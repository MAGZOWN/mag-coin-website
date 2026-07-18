import {
  formatEther,
  formatUnits,
  getAddress,
  isAddress,
  parseAbi,
  type Address,
} from "viem";

import { publicClient } from "./blockchain";
import { MAG_CONTRACT } from "./contracts";

export const BASE_USDC_ADDRESS =
  "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913" as const;

const ERC20_BALANCE_ABI = parseAbi([
  "function balanceOf(address account) view returns (uint256)",
  "function decimals() view returns (uint8)",
]);

export type WalletPortfolio = {
  address: Address;
  ethBalance: string;
  magBalance: string;
  usdcBalance: string;
  holdsMag: boolean;
  basescanAddressUrl: string;
};

export function validateWalletAddress(value: string): boolean {
  return isAddress(value.trim());
}

export function normalizeWalletAddress(value: string): Address {
  const trimmedAddress = value.trim();

  if (!isAddress(trimmedAddress)) {
    throw new Error("Please enter a valid Ethereum or Base wallet address.");
  }

  return getAddress(trimmedAddress);
}

export async function getWalletPortfolio(
  walletAddress: string,
): Promise<WalletPortfolio> {
  const address = normalizeWalletAddress(walletAddress);

  const [
    ethBalanceRaw,
    magBalanceRaw,
    magDecimals,
    usdcBalanceRaw,
    usdcDecimals,
  ] = await Promise.all([
    publicClient.getBalance({
      address,
    }),

    publicClient.readContract({
      ...MAG_CONTRACT,
      functionName: "balanceOf",
      args: [address],
    }),

    publicClient.readContract({
      ...MAG_CONTRACT,
      functionName: "decimals",
    }),

    publicClient.readContract({
      address: BASE_USDC_ADDRESS,
      abi: ERC20_BALANCE_ABI,
      functionName: "balanceOf",
      args: [address],
    }),

    publicClient.readContract({
      address: BASE_USDC_ADDRESS,
      abi: ERC20_BALANCE_ABI,
      functionName: "decimals",
    }),
  ]);

  return {
    address,
    ethBalance: formatEther(ethBalanceRaw),
    magBalance: formatUnits(magBalanceRaw, magDecimals),
    usdcBalance: formatUnits(usdcBalanceRaw, usdcDecimals),
    holdsMag: magBalanceRaw > BigInt(0),
    basescanAddressUrl: `https://basescan.org/address/${address}`,
  };
}
