import { foundationData } from "../data/foundationData";

export const blockchainService = {
  network: foundationData.network,

  contract: foundationData.contract,

  explorer: foundationData.explorer,

  getContractExplorerUrl() {
    return foundationData.explorer;
  },

  getShortContract() {
    return `${foundationData.contract.slice(0, 9)}...${foundationData.contract.slice(-6)}`;
  },

  getTokenSummary() {
    return {
      network: foundationData.network,
      tokenName: foundationData.tokenName,
      symbol: foundationData.symbol,
      totalSupply: foundationData.totalSupply,
      decimals: foundationData.decimals,
      tokenStandard: foundationData.tokenStandard,
      contract: foundationData.contract,
      explorer: foundationData.explorer,
      verificationStatus: foundationData.verificationStatus,
      sourceCode: foundationData.sourceCode,
    };
  },

  getLiquiditySummary() {
    return foundationData.liquidity;
  },
};
