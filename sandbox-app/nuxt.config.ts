// https://v3.nuxtjs.org/api/configuration/nuxt.config
import eslintPlugin from 'vite-plugin-eslint'
import ElementPlus from 'unplugin-element-plus/vite'

export default defineNuxtConfig({
  modules: ['@pinia/nuxt', '@nuxtjs/google-fonts'],
  publicRuntimeConfig: {
    ethMainnetRpc: process.env.ETH_MAINNET_PUBLIC_RPC,
  },
  build: {
    transpile: ['element-plus/es'],
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
  googleFonts: {
    families: {
      Roboto: true,
      'Dancing Script': true,
      Kanit: true,
    },
    overwriting: true, // this flag
  },
})
