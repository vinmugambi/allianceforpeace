<template>
<div class="w-2/3">

  <ul class="flex flex-wrap -mx-2">
    <li v-for="activity in activities" :key="activity.title" class="w-1/2 p-2">
      <div class="flex space-x-2">
        <img class="w-6 h-6" :src="activity.icon" />
        <h3>
          {{ activity.title }}
        </h3>
      </div>
      <p>{{activity.description}}</p>
    </li>
  </ul>
</div>
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
