import axios from "axios";
import { defineStore } from "pinia";
import Web3 from "web3";
import { DOGGIES_ABI } from "~~/utils/abis/doggies-abi";
import { DOGGIES_SMART_CONTRACT_ADDRESS } from "~~/utils/constants";

export const useSandboxStore = defineStore("sandbox", {
  state: () => ({
    doggies: {
      doggiesContractInstance: null,
      currentDoggie: {},
    },
  }),
  actions: {
    initializeDoggiesContract() {
      const config = useRuntimeConfig();
      const w3 = new Web3(config.ethMainnetRpc);
      this.doggies.doggiesContractInstance = new w3.eth.Contract(
        DOGGIES_ABI as any,
        DOGGIES_SMART_CONTRACT_ADDRESS
      );
    },
    async setCurrentDoggie(id) {
      const url = await this.doggies.doggiesContractInstance.methods
        .tokenURI(id)
        .call();
      const { data } = await axios.get(url);
      this.doggies.currentDoggie = data;
    },
  },
  getters: {
    doggiesContractInstance: (state) => state.doggies.doggiesContractInstance,
  },
});
