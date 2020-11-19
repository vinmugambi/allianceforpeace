<template>
  <div>
    <header class="h-48 header relative pt-4">
      <div class="container">
        <back to="index" label="Back to home page" />

        <div class="absolute bottom-0 pb-4">
          <h1>{{ page.title }}</h1>
          <p v-if="page.description">{{ page.description }}</p>
        </div>
      </div>
    </header>

    <main class="pt-4 container page pb-16">
      <nuxt-content :document="page" />
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    if (params.slug === "programs") return;
    const page = await $content("pages", params.slug)
      .fetch()
      .catch((err) => error(404, "The page you are looking for is missing"));
    return { page };
  },
};
</script>
