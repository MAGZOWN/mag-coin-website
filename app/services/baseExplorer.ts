import { foundationData } from "../data/foundationData";

const BASESCAN_URL = "https://basescan.org";

export const baseExplorer = {
  getBaseUrl() {
    return BASESCAN_URL;
  },

  getTokenUrl() {
    return foundationData.explorer;
  },

  getContractUrl() {
    return `${BASESCAN_URL}/address/${foundationData.contract}`;
  },

  getAddressUrl(address: string) {
    return `${BASESCAN_URL}/address/${address}`;
  },

  getTransactionUrl(txHash: string) {
    return `${BASESCAN_URL}/tx/${txHash}`;
  },

  getBlockUrl(blockNumber: number | string) {
    return `${BASESCAN_URL}/block/${blockNumber}`;
  },
};
