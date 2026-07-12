import { parseAbi } from "viem";

import { MAG_CONTRACT_ADDRESS } from "./config";

export const MAG_ERC20_ABI = parseAbi([
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address account) view returns (uint256)",
]);

export const MAG_CONTRACT = {
  address: MAG_CONTRACT_ADDRESS,
  abi: MAG_ERC20_ABI,
} as const;
