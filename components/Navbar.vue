<template>
  <nav id="navbar" class="relative flex justify-between px-4 md:px-16 items-center">
    <nuxt-link v-if="notHome" to="/">
      <img src="/media/logo.png" alt="G.A.P" class="block h-16" />
    </nuxt-link>
    <button
      class="block sm:hidden p-2 bg-blue-600"
      @click="toggleMenu"
    >
      menu
    </button>
    <ul class="hidden sm:flex" :class="{ '-ml-16': notHome, 'block absolute top-0 z-100 mt-12 right-0 w-1/2 shadow bg-white': menuOpen, 'hidden': !menuOpen }">
      <li
        v-for="page in navLinks"
        :key="page.title"
        class="text-gray-900 hover:text-blue-600 hover:underline"
      >
        <nuxt-link class="block py-2 px-4 capitalize" :to="page.link">{{
          page.title
        }}</nuxt-link>
      </li>
    </ul>
    <nuxt-link class="block px-4 py-2 donate my-2 text-white" to="/donate"
      >Donate</nuxt-link
    >
  </nav>
</template>

<script>
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
