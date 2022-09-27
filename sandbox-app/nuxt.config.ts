// https://v3.nuxtjs.org/api/configuration/nuxt.config
import eslintPlugin from 'vite-plugin-eslint'
import ElementPlus from 'unplugin-element-plus/vite'

export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
  publicRuntimeConfig: {
    ethMainnetRpc: process.env.ETH_MAINNET_PUBLIC_RPC,
  },
  // scss: ["~/assets/scss/main", "~/assets/scss/animations"],
  build: {
    transpile: ['element-plus/es'],
  },
  meta: {
    title: 'ElementPlus + Nuxt3',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'ElementPlus + Nuxt3',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500&family=Kanit:wght@100;200;400;600;900&display=swap',
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
    plugins: [eslintPlugin(), ElementPlus()],
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  components: true,
})
