<template>
  <div>
    <back to="gallery" label="To all images and videos"/>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const gallery= await $content("gallery").fetch();
     
     return {
         gallery
     }
  }, 
};
</script>
