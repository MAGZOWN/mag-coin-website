import { foundationData } from "../data/foundationData";

export const blockchainService = {
  getNetwork() {
    return foundationData.network;
  },

  getTokenName() {
    return foundationData.tokenName;
  },

  getSymbol() {
    return foundationData.symbol;
  },

  getContract() {
    return foundationData.contract;
  },

  getExplorer() {
    return foundationData.explorer;
  },

  getExplorerLink() {
    return foundationData.explorer;
  },

  getShortContract() {
    const address = foundationData.contract;
    return `${address.slice(0, 9)}...${address.slice(-6)}`;
  },

  getVerificationStatus() {
    return foundationData.verificationStatus;
  },

  getLiquidity() {
    return foundationData.liquidity;
  },

  getTokenSummary() {
    return {
      network: foundationData.network,
      tokenName: foundationData.tokenName,
      symbol: foundationData.symbol,
      tokenStandard: foundationData.tokenStandard,
      totalSupply: foundationData.totalSupply,
      decimals: foundationData.decimals,
      contract: foundationData.contract,
      explorer: foundationData.explorer,
      verificationStatus: foundationData.verificationStatus,
      sourceCode: foundationData.sourceCode,
    };
  },
};
