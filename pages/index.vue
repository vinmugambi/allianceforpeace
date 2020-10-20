<template>
  <div>
    <header class="flex" style="background: rgba(0, 0, 0, 0.08)">
      <div>
        <img :src="mainImage.location" class="h-64 w-full object-cover" />
      </div>
      <div>
        <img
          v-for="image in images"
          :key="image.location"
          :src="image.location"
          class="h-32 w-full object-cover"
        />
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

    const mainImage = gallery.images[0];
    const images = gallery.images.filter((image, index) => index !== 0);

    return {
      home,
      mainImage,
      images,
    };
  },
};
</script>