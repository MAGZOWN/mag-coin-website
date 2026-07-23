import { NextResponse } from "next/server";

import { MAG_PROJECT_WALLET_ADDRESS } from "../../ecosystem/lib/config";

const ETHERSCAN_V2_API_URL = "https://api.etherscan.io/v2/api";
const BASE_CHAIN_ID = "8453";
const DEFAULT_TRANSACTION_LIMIT = 5;
const MAX_TRANSACTION_LIMIT = 10;

type EtherscanNormalTransaction = {
  blockNumber: string;
  timeStamp: string;
  hash: string;
  nonce: string;
  from: string;
  to: string;
  value: string;
  gas: string;
  gasPrice: string;
  isError: string;
  txreceipt_status?: string;
  input: string;
  contractAddress: string;
  cumulativeGasUsed: string;
  gasUsed: string;
  confirmations: string;
  methodId?: string;
  functionName?: string;
};

type EtherscanResponse = {
  status: string;
  message: string;
  result: EtherscanNormalTransaction[] | string;
};

export type TreasuryTransaction = {
  hash: string;
  blockNumber: string;
  timestamp: number;
  from: string;
  to: string;
  valueWei: string;
  direction: "INCOMING" | "OUTGOING" | "SELF";
  status: "SUCCESS" | "FAILED";
  methodId: string;
  functionName: string;
  basescanUrl: string;
};

function getTransactionLimit(request: Request): number {
  const { searchParams } = new URL(request.url);
  const requestedLimit = Number(searchParams.get("limit"));

  if (!Number.isInteger(requestedLimit) || requestedLimit < 1) {
    return DEFAULT_TRANSACTION_LIMIT;
  }

  return Math.min(requestedLimit, MAX_TRANSACTION_LIMIT);
}

function getDirection(
  from: string,
  to: string,
): TreasuryTransaction["direction"] {
  const walletAddress = MAG_PROJECT_WALLET_ADDRESS.toLowerCase();
  const normalizedFrom = from.toLowerCase();
  const normalizedTo = to.toLowerCase();

  if (
    normalizedFrom === walletAddress &&
    normalizedTo === walletAddress
  ) {
    return "SELF";
  }

  if (normalizedFrom === walletAddress) {
    return "OUTGOING";
  }

  return "INCOMING";
}

function mapTransaction(
  transaction: EtherscanNormalTransaction,
): TreasuryTransaction {
  return {
    hash: transaction.hash,
    blockNumber: transaction.blockNumber,
    timestamp: Number(transaction.timeStamp),
    from: transaction.from,
    to: transaction.to,
    valueWei: transaction.value,
    direction: getDirection(transaction.from, transaction.to),
    status:
      transaction.isError === "1" ||
      transaction.txreceipt_status === "0"
        ? "FAILED"
        : "SUCCESS",
    methodId: transaction.methodId ?? "",
    functionName: transaction.functionName ?? "",
    basescanUrl: `https://basescan.org/tx/${transaction.hash}`,
  };
}

export async function GET(request: Request) {
  const apiKey = process.env.ETHERSCAN_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Treasury transaction history is not configured. Add ETHERSCAN_API_KEY to the server environment.",
      },
      {
        status: 503,
        headers: {
          "Cache-Control": "no-store",
        },
      },
    );
  }

  const limit = getTransactionLimit(request);

  const query = new URLSearchParams({
    chainid: BASE_CHAIN_ID,
    module: "account",
    action: "txlist",
    address: MAG_PROJECT_WALLET_ADDRESS,
    startblock: "0",
    endblock: "99999999",
    page: "1",
    offset: String(limit),
    sort: "desc",
    apikey: apiKey,
  });

  try {
    const response = await fetch(
      `${ETHERSCAN_V2_API_URL}?${query.toString()}`,
      {
        headers: {
          Accept: "application/json",
        },
        next: {
          revalidate: 60,
        },
      },
    );

    if (!response.ok) {
      throw new Error(
        `Explorer request failed with status ${response.status}.`,
      );
    }

    const data = (await response.json()) as EtherscanResponse;

    if (
      data.status === "0" &&
      typeof data.result === "string" &&
      data.message !== "No transactions found"
    ) {
      throw new Error(data.result || data.message);
    }

    const transactions = Array.isArray(data.result)
      ? data.result.map(mapTransaction)
      : [];

    return NextResponse.json(
      {
        walletAddress: MAG_PROJECT_WALLET_ADDRESS,
        network: "Base Mainnet",
        chainId: Number(BASE_CHAIN_ID),
        transactionCount: transactions.length,
        transactions,
        fetchedAt: new Date().toISOString(),
      },
      {
        headers: {
          "Cache-Control":
            "public, s-maxage=60, stale-while-revalidate=300",
        },
      },
    );
  } catch (error) {
    console.error(
      "Unable to load MAG treasury transaction history:",
      error,
    );

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Treasury transaction history is temporarily unavailable.",
      },
      {
        status: 502,
        headers: {
          "Cache-Control": "no-store",
        },
      },
    );
  }
}

