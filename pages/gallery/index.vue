<template>
  <div>
    <back to="index" label="To home" />
    <ul>
      <li>images</li>
      <li>videos</li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const gallery = await $content("gallery").fetch();

    return {
      gallery,
    };
  },
};
</script>
