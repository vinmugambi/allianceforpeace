<template>
  <div>
    <back to="index" label="To home"/>  
    <h1>{{ page.title}}</h1>
    <p v-if="page.description">{{ page.description }}</p>
    <article class="pt-4 pb-16">
      <nuxt-content :document="page" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const page = await $content("pages", params.slug).fetch().catch(err=> error(404, "The page you are looking for is miising"));
    return {page};
  },
};
</script>

