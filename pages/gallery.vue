<template>
  <div>
    <header class="h-48 header relative pt-4">
      <div class="max-w-5xl mx-auto px-4 sm:px-16 lg:px-4">
        <back to="index" label="Back to home page" />

        <nuxt-child :media="media" />

        <div class="absolute bottom-0">
          <h1>Gallery</h1>
          <nav class="mt-4">
            <ul class="flex mx-auto">
              <li
                tabindex="1"
                class="tab-item"
                :class="
                  activeTabIndex === 0
                    ? 'border-b-2 border-blue-600'
                    : 'border-b-2 border-transparent'
                "
                v-on:click="setActiveTab(0)"
              >
                images
              </li>
              <li
                tabindex="2"
                class="tab-item"
                :class="
                  activeTabIndex === 1
                    ? 'border-b-2 border-blue-600'
                    : 'border-b-2 border-transparent'
                "
                v-on:click="setActiveTab(1)"
              >
                videos
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <div
      v-if="activeTabIndex === 0"
      id="image-grid"
      class="max-w-5xl mx-auto px-4 sm:px-16 lg:px-4 py-4 mx-auto md:flex flex-wrap"
    >
      <nuxt-link
        title="View larger"
        class="relative h-48 w-64 p-1"
        v-for="image in images"
        :key="image.location"
        :to="{ name: 'gallery-slug', params: { slug: image.slug } }"
      >
        <div
          class="absolute flex justify-center items-center inset-0 m-1 bg-black bg-opacity-0 hover:bg-opacity-50 text-white text-opacity-0 hover:text-opacity-100"
        >
          <expand class="scale-150" />
        </div>
        <img class="block h-full w-full" :src="image.location" />
      </nuxt-link>
    </div>
    <div
      v-if="activeTabIndex === 1"
      class="max-w-5xl mx-auto px-4 sm:px-16 lg:px-4 py-4 mx-auto md:flex flex-wrap"
      id="videos"
    >
      <nuxt-link
        :to="{ name: 'gallery-slug', params: { slug: video.slug } }"
        class="block w-full md:w-1/2 pb-4 px-2 relative"
        v-for="video in videos"
        :key="video.location"
      >
        <div
          class="absolute inset-0 mb-4 mx-2 flex justify-center items-center text-blue-600 bg-black bg-opacity-0 hover:bg-opacity-25 hover:text-white"
        >
          <play />
        </div>
        <img :src="video.cover" alt="" class="block" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Expand from "~/components/icons/Expand.vue";
import Play from "~/components/icons/Play.vue";
export default {
  async asyncData({ $content, params, error }) {
    const gallery = await $content("gallery").fetch();

    const media = gallery.media.map((item) => {
      if (item.type === "video") {
        item = {
          ...item,
          cover: `https://img.youtube.com/vi/${item.id}/maxresdefault.jpg`,
        };
      }
      return { ...item, slug: item.title.replace(/ /g, "-") };
    });

    return {
      images: media.filter((item) => item.type === "image"),
      videos: media.filter((item) => item.type === "video"),
      media,
    };
  },
  data() {
    return {
      activeTabIndex: 0,
    };
  },

  methods: {
    setActiveTab(index) {
      this.activeTabIndex = index;
    },
  },
  head: {
    title: "Images and Videos - Global alliance for Peace",
    meta: [
      {
        hid: "description",
        name: "description",
        content: "Media showing operations in regions we operate",
      },
    ],
  },
};
</script>

<style lang="postcss">
.tab-item {
  @apply py-2 px-4 font-bold text-blue-600 cursor-pointer;
}
.tab-item:hover {
  background: rgba(0, 0, 0, 0.04);
}
.header::after {
  content: "";
  display: block;
  position: absolute;
  top: 0px;
  width: 97vw;
  height: 100%;
  background: linear-gradient(180deg, #fff 0, #f1f6f8 100%);
  z-index: -3;
  border-bottom-right-radius: 8% 40%;
}
</style>
