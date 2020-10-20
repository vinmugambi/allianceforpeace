<template>
  <div>
    <programs/>
    <nuxt-content :document="home" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const home = await $content("home").fetch();

    return {
      home,
    };
  },
};
</script>