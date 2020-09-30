<template>
  <article>
    <AppSearchInput />
    <h1>{{ article.title }}</h1>
    <author :author="article.author"></author>
    <p>{{ article.description }}</p>
    <img :src="article.img" :alt="article.alt" />
    <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>
    <nav>
      <ul class="text-blue-700">
        <li
          :class="{ 'ml-2': link.depth === 3 }"
          v-for="link of article.toc"
          :key="link.id"
        >
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </nav>
    <nuxt-content :document="article" />
    <prev-next :prev="prev" :next="next" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    const [prev, next] = await $content("articles")
      .only(["title", "slug"])
      .sortBy("createdAt", "asc")
      .surround(params.slug)
      .fetch();

    return { article, prev, next };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return new Date(date).toLocaleDateString("en-GB", options);
    },
  },
};
</script>

<style lang="postcss">
h1 {
  @apply text-4xl capitalize;
}
.nuxt-content h2 {
  @apply text-2xl;
}
.nuxt-content h3 {
  @apply text-lg font-semibold;
}
.nuxt-content p {
  @apply pl-2;
}
</style>

