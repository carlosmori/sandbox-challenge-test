// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],
  publicRuntimeConfig: {
    ethMainnetRpc: process.env.ETH_MAINNET_PUBLIC_RPC,
  },
});
