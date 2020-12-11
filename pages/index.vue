<template>
  <div>
    <header id="home" class="relative">
      <div class="container">
        <h1 class="intro max-w-xl py-12 mx-auto text-center font-bold">
          {{ home.description }}
        </h1>
        <div id="gallery">
          <home-carousel :images="images" />

          <nuxt-link class="list" to="gallery">see all media</nuxt-link>
        </div>
      </div>
    </header>
    <div id="home-content" class="relative">
      <nuxt-content class="container" :document="home" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const home = await $content("pages","home").fetch();
    const gallery = await $content("gallery").fetch();

    return {
      home,
      images: gallery.images,
    };
  },
};
</script>

<style lang="postcss">
#home::after {
  content: "";
  position: absolute;
  /* background: rgba(0, 0, 0, 0.01); */
  background: url(/media/bg.jpg) no-repeat;
  background-size: cover;
  top: 0;
  left: 0;
  z-index: -2;
  display: block;
  width: 98vw;
  height: 32rem;
  border-bottom-left-radius: 50% 4%;
  border-bottom-right-radius: 50% 4%;
}
#home::before {
  content: "";
  position: absolute;
  /* background: rgba(222, 233, 240, 0.8); */
  top: 0;
  left: 0;
  z-index: -1;
  display: block;
  width: 98vw;
  height: 32rem;
  border-bottom-left-radius: 50% 4%;
  border-bottom-right-radius: 50% 4%;
}
/* #home::before {
  content: "";
  position: absolute;
  background: rgba(0, 0, 0, 0.05);
  top: 0;
  left: 0;
  z-index: -2;
  display: block;
  width: 99vw;
  height: 80vh;
} */
</style>


