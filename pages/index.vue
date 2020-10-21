<template>
  <div>
    <header>
      <h1 class="max-w-xl py-4 font-bold">{{ home.description }}</h1>
      <div id="gallery">
        <home-carousel :images="images" />

        <nuxt-link class="list" to="gallery">see all media</nuxt-link>
      </div>
    </header>
    <nuxt-content :document="home" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const home = await $content("home").fetch();
    const gallery = await $content("gallery").fetch();

    return {
      home,
      images: gallery.images,
    };
  },
};
</script>

<style lang="postcss" scoped>
#gallery {
  /* top: 16rem; */
}
</style>

