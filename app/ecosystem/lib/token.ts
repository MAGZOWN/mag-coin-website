import { formatUnits } from "viem";

import { publicClient } from "./blockchain";
import { MAG_CONTRACT } from "./contracts";

export async function getMagTokenInfo() {
  const [name, symbol, decimals, totalSupply] = await Promise.all([
    publicClient.readContract({
      ...MAG_CONTRACT,
      functionName: "name",
    }),

    publicClient.readContract({
      ...MAG_CONTRACT,
      functionName: "symbol",
    }),

    publicClient.readContract({
      ...MAG_CONTRACT,
      functionName: "decimals",
    }),

    publicClient.readContract({
      ...MAG_CONTRACT,
      functionName: "totalSupply",
    }),
  ]);

  return {
    name,
    symbol,
    decimals,
    totalSupply: formatUnits(totalSupply, decimals),
  };
}
