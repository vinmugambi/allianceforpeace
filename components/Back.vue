<template>
  <nuxt-link :to="{ name: to }" class="inline-flex text-gray-800 font-bold py-1 hover:text-blue-500">
    <svg
      class="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M7 16l-4-4m0 0l4-4m-4 4h18"
      ></path>
    </svg>
    <span class="inline-block pl-2">{{label}}</span>
  </nuxt-link>
</template>

<script>
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