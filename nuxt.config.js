export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/nuxt3-pure/' : '/',
    buildAssetsDir: '/static/'
  },
  experimental: {
    payloadExtraction: false
  }
});
