<template>
  <div>
    <back to="programs" label="Back to all programs"/>
    <carousel v-if="program.images" :images="program.images"/>
    <h1>{{ program.title}}</h1>
    <p v-if="program.description">{{ program.description }}</p>
    <article class="py-4">
      <nuxt-content :document="program" />
    </article>
    <prev-next :prev="prev" :next="next" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const program = await $content("programs", params.slug).fetch().catch(err=> error(404, "The page you are looking for is miising"));

    const [prev, next] = await $content("programs")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();

    return { program, prev, next };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString("en-GB", options);
    },
    imagesFullPaths(images){
      
    }
  },
};
</script>

