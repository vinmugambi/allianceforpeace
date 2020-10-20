<template>
  <ul class="flex flex-wrap -mx-4">
    <li v-for="activity in activities" :key="activity.title" class="w-1/2 p-4">
      <div class="flex space-x-2">
        <img class="w-6 h-6" :src="activity.icon" />
        <h3>
          {{ activity.title }}
        </h3>
      </div>
      <p>{{activity.description}}</p>
    </li>
  </ul>
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