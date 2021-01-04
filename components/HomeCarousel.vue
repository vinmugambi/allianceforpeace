<template>
  <div>
    <img
      v-if="images.length === 1"
      class="h-108 w-full object-cover"
      :src="images[0].location"
    />
    <div v-else class="flex flex-col">
      <div class="w-full overflow-hidden relative">
        <div
          v-for="(image, index) in images"
          :key="image.location"
          class="bg-gray-100"
        >
          <img
            v-if="index === currentImageIndex"
            class="h-128 w-full object-cover"
            :src="image.location"
          />
        </div>
        <div
          class="absolute top-0 left-0 bottom-auto right-auto h-full flex items-center z-10"
        >
          <button
            class="py-2 pr-3 pl-1 rounded-r-full bg-gray-200 bg-opacity-25 hover:bg-opacity-50 focus:outline-none"
            @click.prevent="back"
          >
            <left-chev />
          </button>
        </div>
        <div
          class="absolute top-0 right-0 bottom-auto left-auto h-full flex items-center z-10"
        >
          <button
            class="py-2 pl-3 pr-1 rounded-l-full bg-gray-200 bg-opacity-25 hover:bg-opacity-50 focus:outline-none"
            @click.prevent="next"
          >
            <right-chev />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RightChev from "./icons/RightChev.vue";
import LeftChev from "./icons/LeftChev.vue";

export default {
  props: ["images"],
  data() {
    return {
      currentImageIndex: 0,
    };
  },

  mounted() {
    setInterval(() => {
      this.next();
    }, 10000);
  },

  methods: {
    next() {
      if (this.currentImageIndex < this.images.length - 1) {
        this.currentImageIndex += 1;
      } else this.currentImageIndex = 0;
    },
    back() {
      if (this.currentImageIndex === 0) {
        this.currentImageIndex = this.images.length - 1;
      } else this.currentImageIndex -= 1;
    },
  },
};
</script>
<style lang="postcss" scoped>
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
img {
  animation: 2s fadein;
}
</style>