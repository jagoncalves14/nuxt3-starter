import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxtjs/supabase'],
  css: ['@/assets/main.css', 'vuetify/lib/styles/main.sass'],
  build: {
    transpile: ['vuetify'],
  },
  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: 'github-dark',
      preload: ['vue']
    }
  }
})
