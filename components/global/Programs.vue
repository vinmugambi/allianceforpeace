<template>
  <ul class="flex flex-col sm:flex-row sm:space-x-8 pt-4 sm:pb-4">
    <li v-for="program in programs" :key="program.title" class="w-full sm:w-1/2 lg:w-1/3 pb-6 rounded overflow-hidden">
      <nuxt-link
        :to="{ name: 'programs-slug', params: { slug: program.slug } }"
        class="block relative overflow-hidden preview"
      >
        <img class="w-full h-64 object-cover" :src="program.images[0]" />
        <div class="absolute bottom-0 left-0 right-0 z-20 px-4">
          <h4 class="px-4 py-0 bg-white border-b border-gray-600">
            {{ program.title }}
          </h4>
        </div>
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
