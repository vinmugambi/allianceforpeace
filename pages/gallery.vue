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

    <div
      v-if="activeTabIndex === 0"
      id="images"
      class="max-w-5xl mx-auto flex space-x-2 py-4"
    >
      <div>
        <nuxt-link
          class="block"
          v-for="image in images"
          :key="image.location"
          :to="{name: 'gallery-slug', params: {slug: image.slug}}"
        >
          <img :src="image.location" />
        </nuxt-link>
      </div>
    </div>
    <div v-if="activeTabIndex === 1" class="py-4 container" id="videos">
      <div class="pb-4" v-for="video in videos" :key="video.location">
        <iframe
          class=""
          width="560"
          height="315"
          :src="video.location"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="allowfullscreen"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const gallery = await $content("gallery").fetch();

    const media = gallery.media.map((item) => {
      return { ...item, slug: item.title.replace(/ /g, "-") };
    });

    return {
      images: media.filter((item) => item.type === "image"),
      videos: media.filter((item) => item.type === "video"),
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
