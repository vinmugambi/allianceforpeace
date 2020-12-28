<template>
  <div class="flex justify-between pt-12">
    <NuxtLink
      v-if="prev"
      :to="{ name: 'programs-slug', params: { slug: prev.slug } }"
      class="flex text-gray-700 items-center hover:underline hover:text-blue-500"
    >
      <div  class="arrow rounded-xs">
        <img
        v-if="prev.images"
        :src="prev.images[0]"
        class="block h-12 w-12 object-cover rounded-xs"
      />
        <div v-else class="left rounded-xs"></div>
      </div>
      {{ prev.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
    <NuxtLink
      v-if="next"
      :to="{ name: 'programs-slug', params: { slug: next.slug } }"
      class="flex text-gray-700 items-center hover:underline hover:text-blue-500"
    >
      <div class="arrow rounded-xs">
        <img
        v-if="next.images"
        :src="next.images[0]"
        class="block h-12 w-12 object-cover rounded-xs"
      />
        <div v-else class="right rounded-xs"></div>
      </div>
      {{ next.title }}
    </NuxtLink>
    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
};
</script>

<style lang="postcss" scoped>
.arrow {
  @apply relative h-12 w-12 overflow-hidden bg-gray-200 mr-2;
}
.right,
.left {
  position: absolute;
  height: 3rem;
  width: 3rem;
  transform: rotate(45deg);
  @apply bg-gray-300;
}
.right {
  left: -1.2rem;
}
.left {
  left: 1.2rem;
}
</style>