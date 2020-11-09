<template>
  <section id="what-we-do">
    <div class="title">
      <h2>What we do</h2>
      <p>
        We have developed community programs aimed at helping the most
        vulnerable to rebuild and strengthen their lives
      </p>
    </div>
    <div v-for="activity in activities" class="activity" :key="activity.title">
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
img.icon::after {
  content: "hellko";
}

#what-we-do {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
}
#what-we-do h3 {
  @apply text-lg;
}

#what-we-do h2 + p {
  @apply text-gray-900;
}
#what-we-do .activity:nth-child(2n) {
  transform: translateY(5.5rem);
}
#home-content::before {
  content: "";
  display: block;
  position: absolute;
  top: 20%;
  left: 1vw;
  width: 96vw;
  height: 80%;
  background: rgba(0, 0, 0, 0.01);
  z-index: -3;
  border-top-left-radius: 50% 4%;
  border-top-right-radius: 50% 4%;
}
</style>
