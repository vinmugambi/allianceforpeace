<template>
  <div>
    <img
      v-if="images.length===1"
      class="h-108 w-full object-cover rounded-sm"
      :src="images[0]"
    />
    <div v-else class="flex flex-col">
      <div class="w-full overflow-hidden relative">
        <img
          class="h-96 md:h-120 w-full object-cover rounded"
          :src="images[currentImageIndex]"
        />
        <div class="absolute top-0 left-0 bottom-auto right-auto h-full flex items-center z-10">
          <button
            class="p-2 bg-gray-200 bg-opacity-25 hover:bg-opacity-50 focus:outline-none"
            @click.prevent="back"
          >
           <left-chev/>
          </button>
        </div>
        <div class="absolute top-0 right-0 bottom-auto left-auto h-full flex items-center z-10">
          <button
            class="p-2 bg-gray-200 bg-opacity-25 hover:bg-opacity-50 focus:outline-none"
            @click.prevent="next"
          >
          <right-chev/>
          </button>
        </div>
      </div>
      <div
        class="w-full md:w-1/4 py-2 md:pl-4 flex items-center md:items-start justify-center"
      >
        <div
          class="p-1 rounded"
          v-for="(image,index) in images"
          :key="image"
          :class="currentImageIndex===index?'border border-blue-500': ''"
          @click="setCurrentImage(index)"
        >
          <img :src="image" class="block object-cover w-16 h-16 md:h-24 md:w-24 rounded" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RightChev from "./icons/RightChev.vue"
import LeftIChev from "./icons/LeftChev.vue"
export default {
  props: ["images"],
  data() {
    return {
      currentImageIndex: 0
    };
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
    setCurrentImage(index) {
      this.currentImageIndex = index;
    }
  }
};
</script>