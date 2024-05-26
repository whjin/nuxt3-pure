import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(nuxtApp => {
  return {
    provide: {
      hello: () => 'hello nuxt3!!!'
    }
  };
});