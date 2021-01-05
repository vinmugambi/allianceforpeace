<template>
  <div
    v-if="found"
    class="fixed py-4 z-20 bg-gray-700 bg-opacity-25 inset-0 h-screen w-screen"
  >
    {{ finded }}
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
          :to="{ name: 'gallery-slug', params: { slug: sorround.next } }"
          class="absolute flex items-center justify-center right-0 h-full w-12 top-0 z-30 bg-gray-200 bg-opacity-25 hover:bg-opacity-100"
        >
          <right-chev />
        </nuxt-link>
        <nuxt-link
          title="Previous image"
          :to="{ name: 'gallery-slug', params: { slug: sorround.prev } }"
          class="absolute flex items-center justify-center left-0 h-full w-12 top-0 z-30 bg-gray-200 bg-opacity-25 hover:bg-opacity-100"
        >
          <left-chev />
        </nuxt-link>
        <img
          v-if="found.type === 'image'"
          :src="found.location"
          :alt="found.title"
          class="block h-full w-auto mx-auto"
        />
        <div class="h-full grid">
          <iframe
            v-if="found.type === 'video'"
            class="block m-auto"
            width="854"
            height="480"
            :src="`https://www.youtube.com/embed/${found.id}`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Close from "~/components/icons/Close.vue";
import LeftChev from "~/components/icons/LeftChev.vue";
import RightChev from "~/components/icons/RightChev.vue";

export default {
  props: ["media"],
  computed: {
    found() {
      if (!this.$route.params.slug) return false;
      else {
        return this.media.find(
          (item) => item.title == this.$route.params.slug.replace(/-/g, " ")
        );
      }
    },
    sorround() {
      if (this.found) {
        let prev, next;
        let foundIndex = this.media.findIndex((item) => item === this.found);
        if (foundIndex === 0) prev = this.media.length - 1;
        else prev = foundIndex - 1;
        if (foundIndex === this.media.length - 1) next = 0;
        else next = foundIndex + 1;

        return {
          prev: this.media[prev].slug,
          next: this.media[next].slug,
        };
      }
    },
  },
};
</script>