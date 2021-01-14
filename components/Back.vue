<template>
  <nuxt-link
    :to="{ name: to }"
    class="inline-flex text-gray-800 text-sm font-bold py-1 hover:text-blue-500"
  >
    <arrow-left />
    <span class="inline-block pl-2">{{ label }}</span>
  </nuxt-link>
</template>

<script>
import ArrowLeft from "./icons/ArrowLeft.vue";
export default {
  props: {
    to: { type: String, required: true },
    label: {
      type: String,
      default: "Back",
    },
  },
};
</script>