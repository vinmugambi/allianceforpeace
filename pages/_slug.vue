<template>
  <div>
    <header class="h-48 relative header pt-4">
      <div class="container">
        <back to="index" label="Back to home page" />
      </div>
    </header>

    <main class="pt-4 container page pb-16">
      <div class="-mx-4 px-4 pb-8 -mt-12 rounded-xs bg-white">
        <h1>{{ page.title }}</h1>
        <p v-if="page.description">{{ page.description }}</p>
      </div>
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
  head() {
    return {
      title: `${this.page.title} - Global Alliance for Peace`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.page.description || this.page.title,
        },
      ],
    };
  },
};
</script>
<style lang="postcss">
.page a {
  @apply text-blue-500;
}
.page a:hover {
  @apply underline;
}
.page h1 {
  @apply leading-none py-4;
}
.page h3 {
  @apply font-bold pt-4 pb-2;
}
.page img {
  @apply block my-4 shadow-lg;
}
.page ul li {
  @apply list-disc;
}
.page ol li {
  @apply list-decimal;
}
.page ul,
ol {
  @apply pl-4;
}
.page code {
  @apply bg-gray-200;
}
.page p {
  @apply pb-4;
}
</style>