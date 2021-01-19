<template>
  <div>
    <header class="h-48 relative pt-4 z-10">
      <div class="max-w-5xl mx-auto px-4 sm:px-16 lg:px-4">
        <back to="index" label="Back to home page" />

        <div class="absolute bottom-0 pb-4">
          <h1>{{ page.title }}</h1>
          <p>{{ page.description }}</p>
        </div>
      </div>
    </header>
    <main class="max-w-5xl mx-auto px-4 sm:px-16 lg:px-4">
      <ul class="flex flex-col sm:flex-row sm:flex-wrap sm:-mx-2">
        <li
          v-for="program in programs"
          :key="program.slug"
          class="w-full sm:w-1/2 lg:w-1/3 sm:px-2 py-4"
        >
          <nuxt-link
            :to="`/programs/${program.slug}`"
            class="block card relative h-full overflow-hidden rounded-xs"
            title="learn more"
          >
            <img
              v-if="program.images"
              :src="program.images[0]"
              :alt="`image of ${program.title}`"
              class="block w-full h-48 object-cover object-top"
            />
            <div
              class="p-2"
              :class="{
                'absolute left-0 w-full card-content': !program.images,
              }"
            >
              <h2 class="mt-0 text-center">{{ program.title }}</h2>
            </div>
          </nuxt-link>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const page = await $content("programs-list").fetch();
    const programs = await $content("programs").fetch();
    return {
      page,
      programs,
    };
  },
  head() {
    return {
      title: "Programs - Global Alliance for Peace",
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.page.description,
        },
      ],
    };
  },
};
</script>

<style lang="postcss" scoped>
header {
  border-bottom-right-radius: 10% 30%;
}
header::after {
  content: "";
  display: block;
  position: absolute;
  top: 0px;
  width: 98vw;
  height: 16rem;
  background: rgba(0, 0, 0, 0.01);
  z-index: -3;
  border-bottom-right-radius: 8% 20%;
}
.card h2 {
  @apply text-xl;
}
.no-image {
  transform: rotate(45deg);
  top: -2rem;
  left: -2rem;
  z-index: -1;
}
.card:hover h2 {
  text-decoration: underline;
}

.card:hover {
  /* border-radius: 16px; */
  background: rgba(0, 0, 0, 0.03);
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.23);
}
.card {
  min-height: 16rem;
  background: rgba(0, 0, 0, 0.07);
}
.card-content {
  top: 12rem;
}
</style>