<template>
  <div>
    <back to="index" label="Back to home page" />

    <h1>{{ page.title }}</h1>
    <p>{{ page.description }}</p>

    <ul class="flex flex-wrap -mx-2">
      <li
        v-for="program in programs"
        :key="program.slug"
        class="w-1/3 px-2 py-4"
      >
        <nuxt-link
          :to="`/programs/${program.slug}`"
          class="block card relative min-h-64 h-full overflow-hidden rounded-xs"
          title="learn more"
        >
          <img
            v-if="program.images"
            :src="program.images[0]"
            :alt="`image of ${program.title}`"
            class="block w-full h-48 object-cover object-top"
          />
          <div class="p-2" :class="{'absolute left-0 card-content':!program.images}">
            <h2>{{ program.title }}</h2>
          </div>
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content("programs-index").fetch();
    const programs = await $content("programs").fetch();
    return {
      page,
      programs,
    };
  },
};
</script>

<style lang="postcss" scoped>
.card h2{
  @apply text-xl;
}
.no-image {
    transform: rotate(45deg);
    top: -2rem;
    left: -2rem;
    z-index: -1;
}
.card:hover h2{
    text-decoration: underline;
}

.card:hover {
  background: rgba(0,0,0,.05);
}
.card {
  border: 1px solid rgba(0,0,0,.05);
  min-height: 14rem;
}
.card-content {
  top: 12rem;
}

</style>