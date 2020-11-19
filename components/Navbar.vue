<template>
  <div id="navbar">
    <nav class="flex justify-between container items-center">
      <nuxt-link to="/">
        <img src="/logo.png" alt="G.A.P" class="block h-16" />
      </nuxt-link>
      <ul id="nav-menu" class="flex">
        <li
          v-for="page in navLinks"
          :key="page.title"
          class="hover:text-blue-600"
        >
          <nuxt-link
            class="block py-2 px-4 uppercase font-bold"
            :to="{ name: page.name, params: { slug: page.slug } }"
            >{{ page.title }}</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navLinks: [],
    };
  },
  async fetch() {
    const pages = await this.$http
      .$get("/_content/pages")
      .catch((err) => console.error(err));

    const pageList = pages.map((page) => {
      return { name: "slug", slug: page.name, title: page.title };
    });

    const noHome = pageList.filter((page) => page.slug !== "index");

    const gallery = await this.$http
      .$get("/_content/gallery")
      .catch((err) => console.error(err));

    const indices = [gallery].map((page) => {
      return { title: page.title, name: page.name };
    });
    this.navLinks = indices.concat(noHome);
  },
};
</script>

<style lang="postcss">
#navbar {
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
</style>
