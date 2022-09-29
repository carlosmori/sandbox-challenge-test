import axios from 'axios'
import { defineStore } from 'pinia'
import Web3 from 'web3'
import { DOGGIES_ABI } from '~~/utils/abis/doggies-abi'
import { DOGGIES_SMART_CONTRACT_ADDRESS } from '~~/utils/constants'
import { ContractEnum, RpcEnum } from '~~/utils/types'
import { Doggie, Trait } from '~~/utils/types/doggie'

export const useSandboxStore = defineStore('sandbox', {
  state: () => ({
    store: {
      doggies: {
        contract: null,
        currentDoggie: {
          name: '',
          image_url: '',
          owner: '',
          description: '',
          traits: [],
        },
      },
      // boredApes:{} for example
    },
  }),
  actions: {
    initializeContract(contract: ContractEnum, rpc: RpcEnum) {
      const config = useRuntimeConfig()
      const w3 = new Web3(config[rpc])
      switch (contract) {
        case ContractEnum.DOGGIES:
          this.store.doggies.contract = new w3.eth.Contract(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            DOGGIES_ABI as any,
            DOGGIES_SMART_CONTRACT_ADDRESS
          )

          break
        case ContractEnum.BORED_APES:
          // POTENTIAL IMPLEMENTATIONs
          break

        default:
          break
      }
    },
    async setCurrentDoggie(doggieId: number) {
      const doggieContract = this.store.doggies.contract
      // todo potential refactor, abstract API into its own module. Abstract response adapters.
      if (doggieContract && doggieId) {
        try {
          // get sandbox api url
          const url = await doggieContract.methods.tokenURI(doggieId).call()
          // get the owner of the current NFT
          const owner = await doggieContract.methods.ownerOf(doggieId).call()
          const data = await axios.get(url)
          const doggie: Doggie = data.data
          // persist in Pinia store
          this.store.doggies.currentDoggie = {
            ...doggie,
            attributes: doggie.attributes.map((trait: Trait) =>
              trait.value === '' ? { ...trait, value: 'Not specified' } : trait
            ),
            owner,
          }
        } catch (error) {
          return new Error(
            `Something went wrong. Stackstrace: ${error.message}`
          )
        }
      } else {
        this.store.doggies.currentDoggie = {}
      }
    },
    resetCurrentDoggie() {
      this.store.doggies.currentDoggie = {
        name: '',
        image_url: '',
        owner: '',
        description: '',
        traits: [],
      }
    },
  },
  getters: {
    getCurrentDoggie: (state) => state.store.doggies.currentDoggie,
  },
})
