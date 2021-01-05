<template>
  <div>
    <header class="h-48 header relative pt-4">
      <div class="max-w-5xl mx-auto">
        <back to="index" label="Back to home page" />

        <nuxt-child />

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

    <div v-if="activeTabIndex === 0" id="image-grid" class="max-w-5xl py-4 mx-auto md:flex flex-wrap">
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
        <img class="block h-full w-full"  :src="image.location" />
      </nuxt-link>
    </div>
    <div v-if="activeTabIndex === 1" class="max-w-5xl py-4 mx-auto flex" id="videos">
      <nuxt-link :to="{ name: 'gallery-slug', params: { slug: video.slug } }" class="block w-full md:w-1/2 pb-4 px-2 relative" v-for="video in videos" :key="video.location">
        <div class="absolute inset-0 mb-4 mx-2 flex justify-center items-center text-blue-600 bg-black bg-opacity-0 hover:bg-opacity-25 hover:text-white">
          <play/>
        </div>
        <img :src="video.cover" alt="" class="block">
        <!-- <iframe
          class=""
          width="560"
          height="315"
          :src="video.location"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="allowfullscreen"
        ></iframe> -->
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
      return { ...item, slug: item.title.replace(/ /g, "-") };
    });

    let videosList= media.filter((item) => item.type === "video");
    const videos= videosList.map(video=> {
      return {...video, cover: `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
    })

    return {
      images: media.filter((item) => item.type === "image"),
      videos,
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
  }
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
