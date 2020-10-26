<template>
  <div>
    <back to="index" label="To home" />
    <h1>Gallery</h1>
    <nav class="mt-4">
      <ul class="flex mx-auto">
        <li tabindex="1" class="tab-item" :class="activeTabIndex===0?'border-b-2 border-blue-600': ''" v-on:click="setActiveTab(0)">
          images
        </li>
        <li tabindex="2" class="tab-item" :class="{'border-b-2 border-blue-600': activeTabIndex===1}" v-on:click="setActiveTab(1)">
          videos
        </li>
      </ul>
    </nav>
    <div v-if="activeTabIndex === 0" id="images" class="flex space-x-6 py-4">
      <div class="flex-1 flex-column space-y-6">
        <img
          class="block rounded"
          v-for="image in firstCol"
          :key="image.location"
          :src="image.location"
        />
      </div>
      <div class="flex-1 space-y-6">
        <img
          class="block rounded"
          v-for="image in secondCol"
          :key="image.location"
          :src="image.location"
        />
      </div>
      <!-- <div class="flex-1 space-y-4">
        <img
          class="block rounded"
          v-for="image in thirdCol"
          :key="image.location"
          :src="image.location"
        />
      </div> -->
    </div>
    <div v-if="activeTabIndex === 1" class="py-4" id="videos">
      <div class="pb-4" v-for="video in videos" :key="video.location">
        <iframe
          class="rounded"
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

    let firstCol = [];
    let secondCol = [];

    const images = gallery.images.forEach((element, index) => {
      if (index % 2 === 0) {
        firstCol.push(element);
      } else {
        secondCol.push(element);
      }
    });

    return {
      images: gallery.images,
      videos: gallery.videos,
      firstCol,
      secondCol,
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

<style lang="postcss" scoped>
.tab-item {
  @apply py-2 px-4 font-bold text-blue-600 cursor-pointer;
}
.tab-item:hover {
  background: rgba(0, 0, 0, 0.04);
}
nav {
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
</style>
