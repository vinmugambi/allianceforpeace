<template>
  <div
    v-if="found !== 'index'"
    class="fixed py-4 z-20 bg-gray-700 bg-opacity-25 inset-0 h-screen w-screen"
  >
    <div
      class="flex flex-col w-5/6 h-full mx-auto rounded bg-gray-100 shadow-xl"
    >
      <div class="relative text-center font-bold">
        <nuxt-link
          title="close"
          :to="{ name: 'gallery' }"
          class="flex items-center justify-center absolute text-white z-50 h-8 w-8 right-0 bg-gray-500 rounded-bl shadow hover:bg-red-600"
        >
          <close />
        </nuxt-link>
        {{ found.title }}
      </div>
      <div class="bg-gray-300 h-148 rounded relative">
        <nuxt-link
          title="Next image"
          :to="{ name: 'gallery-slug', params: { slug: prev } }"
          class="absolute flex items-center justify-center right-0 h-full w-12 top-0 z-30 bg-gray-200 bg-opacity-25 hover:bg-opacity-100"
        >
          <right-chev />
        </nuxt-link>
        <nuxt-link
          title="Previous image"
          :to="{ name: 'gallery-slug', params: { slug: next } }"
          class="absolute flex items-center justify-center left-0 h-full w-12 top-0 z-30 bg-gray-200 bg-opacity-25 hover:bg-opacity-100"
        >
          <left-chev />
        </nuxt-link>
        <img
          :src="found.location"
          :alt="found.title"
          class="block h-full w-auto mx-auto"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Close from "~/components/icons/Close.vue";
import LeftChev from "~/components/icons/LeftChev.vue";
import RightChev from "~/components/icons/RightChev.vue";

export default {
  async asyncData({ $content, params, error }) {
    const media = await $content("gallery").fetch();
    const images = media.media.filter((item) => item.type === "image");

    let found, next, prev;
    if (params.slug) {
      found = images.find(
        (item) => item.title == params.slug.replace(/-/g, " ")
      );
    } else return { found: "index" };

    function slug(url) {
      return url.replace(/ /g, "-");
    }

    if (!found) {
      return { found: "error" };
    } else {
      let foundIndex = images.findIndex((item) => item === found);
      if (foundIndex === 0) prev = images.length - 1;
      else prev = foundIndex - 1;
      if (foundIndex === images.length - 1) next = 0;
      else next = foundIndex + 1;

      return {
        found,
        prev: slug(images[prev].title),
        next: slug(images[next].title),
      };
    }
  },
};
</script>