// https://v3.nuxtjs.org/api/configuration/nuxt.config
import eslintPlugin from 'vite-plugin-eslint'

export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  publicRuntimeConfig: {
    ethMainnetRpc: process.env.ETH_MAINNET_PUBLIC_RPC,
  },
  // scss: ["~/assets/scss/main", "~/assets/scss/animations"],
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;400;600;900&display=swap',
      },
    ],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "@/assets/_colors.scss" as *;@use "@/assets/_global.scss" as *;@use "@/assets/_mixins.scss" as *;',
        },
      },
    },
    plugins: [eslintPlugin()],
  },
})
