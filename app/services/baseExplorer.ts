import { foundationData } from "../data/foundationData";
import { projectLinks } from "../data/projectLinks";

export const baseExplorer = {
  getBaseUrl() {
    return projectLinks.explorer;
  },

  getTokenUrl() {
    return projectLinks.tokenExplorer;
  },

  getContractUrl() {
    return projectLinks.contractExplorer;
  },

  getAddressUrl(address: string) {
    return `${projectLinks.explorer}/address/${address}`;
  },

  getTransactionUrl(txHash: string) {
    return `${projectLinks.explorer}/tx/${txHash}`;
  },

  getBlockUrl(blockNumber: number | string) {
    return `${projectLinks.explorer}/block/${blockNumber}`;
  },

  getContractAddress() {
    return foundationData.contract;
  },

  getShortContract() {
    const address = foundationData.contract;
    return `${address.slice(0, 9)}...${address.slice(-6)}`;
  },
};
