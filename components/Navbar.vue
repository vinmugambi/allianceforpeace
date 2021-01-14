<template>
  <nav id="navbar" class="flex justify-between px-4 md:px-16 items-center">
    <nuxt-link v-if="notHome" to="/">
      <img src="/media/logo.png" alt="G.A.P" class="block h-16" />
    </nuxt-link>
    <div class="sm:hidden">
      <button
        type="button"
        @click="menuOpen = true"
        class="block h-full p-2 hover:text-gray-400 focus:outline-none"
      >
        <svg
          class="h-6 w-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
      <button
        v-if="menuOpen"
        @click="menuOpen = false"
        tabindex="-1"
        class="inset-0 h-full w-full z-40 fixed bg-gray-800 opacity-50 cursor-default"
      ></button>
    </div>
    <ul class="hidden sm:flex" :class="{'-ml-16':notHome}">
      <li
        v-for="page in navLinks"
        :key="page.title"
        class="relative z-100 text-gray-900 hover:text-blue-600 hover:underline"
      >
        <nuxt-link class="block py-2 px-4 capitalize" :to="page.link">{{
          page.title
        }}</nuxt-link>
      </li>
    </ul>
    <div
      v-if="menuOpen"
      class="sm:hidden block fixed top-0 z-50 mt-12 mr-2 right-0 w-1/2 shadow bg-white rounded-xs"
    >
      <ul>
        <li class="relative h-6">
          <button
            @click="menuOpen = false"
            v-if="menuOpen"
            class="flex items-center justify-center absolute text-white z-50 h-8 w-8 right-0 bg-gray-500 rounded-bl shadow hover:bg-red-600"
          >
            <close />
          </button>
        </li>
        <li
          v-for="page in navLinks"
          :key="page.title"
          class="relative z-100 text-gray-900 hover:text-blue-600 hover:underline"
        >
          <nuxt-link class="block py-2 px-4 capitalize" :to="page.link">{{
            page.title
          }}</nuxt-link>
        </li>
      </ul>
    </div>
    <nuxt-link class="block px-4 py-2 donate my-2 text-white" to="/donate"
      >Donate</nuxt-link
    >
  </nav>
</template>

<script>
import Close from "./icons/Close.vue";
export default {
  data() {
    return {
      menuOpen: false,
      navLinks: [
        { link: "/programs", title: "Programs" },
        { link: "/about", title: "About" },
        { link: "/gallery", title: "Gallery" },
      ],
    };
  },
  computed: {
    notHome() {
      return this.$nuxt.$route.name !== "index";
    },
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style lang="postcss" scoped>
.donate {
  background: linear-gradient(180deg, #07a6de 0%, #2f7087 100%);
  border-radius: 2px;
}
</style>
