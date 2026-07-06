import { foundationData } from "../data/foundationData";
import { baseExplorer } from "./baseExplorer";

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
    return baseExplorer.getTokenUrl();
  },

  getExplorerLink() {
    return baseExplorer.getTokenUrl();
  },

  getContractExplorer() {
    return baseExplorer.getContractUrl();
  },

  getShortContract() {
    return baseExplorer.getShortContract();
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
      explorer: baseExplorer.getTokenUrl(),
      verificationStatus: foundationData.verificationStatus,
      sourceCode: foundationData.sourceCode,
    };
  },
};
