// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      EMAILJS_PUBLIC_KEY: "HnNFANam0n-E0mhr_"
    }
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    '@formkit/nuxt',
    'nuxt-swiper',
  ],
  swiper: {
    prefix: 'Swiper',
    modules: ['navigation', 'pagination', 'virtual', 'effect-flip', 'effect-coverflow', 'keyboard']
  },
  image: {
    provider: 'imagekit',
    imagekit: {
      baseURL: 'https://ik.imagekit.io/c8l1fmjugx/'
    }
  },
  app: {
    head: {
      title: "Hirallaxe | MSHS 27",
      viewport:"width=device-width, initial-scale=1",
      charset: "utf-8",
      meta: [
        { name: "description", content: "The official MSHS 27 Website" },
        { name: "author", content: "Jovianka Pratama" },
        { name: "keywords", content: "mshs, mshs27, perpisahan mshs27, mshs 27, perpisahan mshs 27" },
        { property: "og:type", content: "website" },
        { property: "og:image", content: "https://mshs27.netlify.app/logo-gold-bg.png" },
        { property: "og:image:secure_url", content: "https://mshs27.netlify.app/logo-gold-bg.png" },
        { property: "og:url", content: "https://mshs27.netlify.app/"},
        { property: "og:title", content: "Hirallaxe 27" }
      ]
    }
  }
})