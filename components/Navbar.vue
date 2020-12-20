<template>
  <nav id="navbar" class="flex justify-between px-16 items-center">
    <nuxt-link v-if="!home" to="/">
      <img src="/media/logo.png" alt="G.A.P" class="block h-16" />
    </nuxt-link>
    <ul class="flex" :class="home ? '' : '-ml-16'">
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
      navLinks: [
        { link: "/programs", title: "Programs" },
        { link: "/about", title: "About us" },
        { link: "/gallery", title: "Gallery" },
      ],
    };
  },
  computed: {
    home() {
      return this.$nuxt.$route.name === "index";
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
