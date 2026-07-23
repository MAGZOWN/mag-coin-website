import { publicClient } from "./blockchain";

const BASE_MAINNET_CHAIN_ID = 8453;

export type BaseNetworkStatus = {
  networkName: "Base Mainnet";
  chainId: number;
  blockNumber: string;
  latestBlockTimestamp: string;
  synchronizedAt: string;
  isConnected: boolean;
  status: "CONNECTED" | "WRONG_NETWORK";
};

export async function getBaseNetworkStatus(): Promise<BaseNetworkStatus> {
  const [chainId, latestBlock] = await Promise.all([
    publicClient.getChainId(),

    publicClient.getBlock({
      blockTag: "latest",
    }),
  ]);

  if (latestBlock.number === null) {
    throw new Error(
      "The latest Base block number is temporarily unavailable.",
    );
  }

  const isConnected = chainId === BASE_MAINNET_CHAIN_ID;

  return {
    networkName: "Base Mainnet",
    chainId,
    blockNumber: latestBlock.number.toString(),
    latestBlockTimestamp: new Date(
      Number(latestBlock.timestamp) * 1000,
    ).toISOString(),
    synchronizedAt: new Date().toISOString(),
    isConnected,
    status: isConnected ? "CONNECTED" : "WRONG_NETWORK",
  };
}
