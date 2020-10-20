<template>
  <ul class="flex space-x-4">
    <li v-for="program in programs" :key="program.title" class="flex-1">
      <nuxt-link
        :to="{ name: 'programs-slug', params: { slug: program.slug } }"
        class="block relative rounded overflow-hidden preview"
      >
        <img class="w-full h-24 object-cover" :src="program.images[0]" />
        <div class="absolute cover inset-0 z-10 bg-black bg-opacity-25 hover:bg-opacity-50"></div>

        <p class="absolute top-0 left-0 z-20 px-2 text-white font-bold">
          {{ program.title }}
        </p>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      programs: [],
    };
  },
  async fetch() {
    const all = await this.$http
      .$get("/_content/programs")
      .catch((err) => console.error(err));

    this.programs = all.filter((program) => program.images);
  },
};
</script>
