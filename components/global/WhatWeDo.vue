<template>
  <section id="what-we-do" class="grid grid-cols-2 gap-4">
    <div class="title col-span-2 pb-8 md:text-center">
      <h2 class="mx-auto">What we do</h2>
      <p class="md:mx-auto">
        We have developed community programs aimed at helping the most
        vulnerable to rebuild and strengthen their lives
      </p>
    </div>
    <div v-for="activity in activities" class="activity pb-6" :key="activity.title">
      <div class="pb-1 space-y-1">
        <img class="relative block rounded-xs icon w-8 h-8" :src="activity.icon" />
        <h3 class="font-bold">
          {{ activity.title }}
        </h3>
      </div>

      <p>{{ activity.description }}</p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activities: [],
    };
  },
  async fetch() {
    const activities = await this.$http
      .$get("/_content/what-we-do")
      .catch((err) => console.error(err));

    this.activities = activities.activities;
  },
};
</script>

<style lang="postcss" >
img.icon {
  background: var(--primary);
}
#what-we-do h3 {
  @apply text-lg;
}

#what-we-do h2 + p {
  @apply text-gray-900;
}

</style>
