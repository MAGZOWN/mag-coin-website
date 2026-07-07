import { foundationData } from "../data/foundationData";
import { blockchainService } from "./blockchainService";

export const verificationService = {
  getVerificationStatus() {
    return foundationData.verificationStatus;
  },

  isVerified() {
    return foundationData.verificationStatus === "Verified";
  },

  getSourceCodeStatus() {
    return foundationData.sourceCode;
  },

  getContractAddress() {
    return blockchainService.getContract();
  },

  getExplorerUrl() {
    return blockchainService.getExplorer();
  },

  getVerificationSummary() {
    return {
      verified: this.isVerified(),
      verificationStatus: this.getVerificationStatus(),
      sourceCode: this.getSourceCodeStatus(),
      contract: this.getContractAddress(),
      explorer: this.getExplorerUrl(),
    };
  },
};
