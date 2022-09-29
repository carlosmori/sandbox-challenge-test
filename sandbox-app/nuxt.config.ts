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
  hooks: {
    async 'nitro:config'(nitroConfig) {
      if (nitroConfig.dev) {
        return
      }
      for (let index = 1; index < 3; index++) {
        nitroConfig.prerender.routes.push(`/${index}`)
      }
    },
  },
  head: {
    title: 'gfg',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
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
    plugins: [ElementPlus({ useSource: true })],
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
  target: 'static',
})
