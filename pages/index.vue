<template>
  <div>
    <header
      class="grid grid-cols-1 md:grid-cols-7 gap-4 md:auto-cols-min pt-2"
      style="background: linear-gradient(180deg, #ffffff 0%, #f1f6f8 100%)"
    >
      <div class="px-16 md:-mt-8 col-span-3 leading-tight flex items-center">
        <div class="px-4">
          <div class="py-4">
            <img class="block h-16" src="/media/logo.png" alt="Logo" />
            <div class="py-2 font-serif">Care | Support | Growth</div>
          </div>
          <h1 class="text-4xl">
            {{ home.description }}
          </h1>
        </div>
      </div>
      <div class="col-span-4">
        <home-carousel :images="images" />
      </div>
    </header>
    <div id="home-content" class="px-32 relative" >
      <nuxt-content :document="home" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const home = await $content("pages", "home").fetch();
    const gallery = await $content("gallery").fetch();

    return {
      home,
      images: gallery.images,
    };
  },
};
</script>

<style lang="postcss">
#home-content::before {
  content: "";
  display: block;
  position: absolute;
  top: 0%;
  left: 5vw;
  width: 90vw;
  height: 2%;
  background: linear-gradient(to bottom,rgba(39, 76, 87, 0.08),rgba(160, 192, 204, 0.1));
  z-index: -3;
  border-bottom-right-radius: 50% 50%;
  border-bottom-left-radius: 50% 50%;
}
</style>


