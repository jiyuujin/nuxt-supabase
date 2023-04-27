import svgLoader from 'vite-svg-loader'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  srcDir: 'app/',
  css: ['~/assets/main.css'],
  serverMiddleware: [
    { path: '/api/hello', handler: '~/server/api/hello.ts'},
  ],
  modules: ['@nuxtjs/supabase'],
  vite: {
    plugins: [
      svgLoader({
        svgo: false,
      }),
    ],
  },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY, // ANON_KEY
    },
  },
})
