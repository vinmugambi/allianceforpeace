<template>
  <div>
    <div class="max-w-4xl mx-auto">
      <Nuxt />
    </div>
  </div>
</template>

<style lang="postcss">
h1,
h2,
h3,
h4,a {
  font-family: "Ubuntu", serif;
  /* @apply font-bold; */
}
h1 {
  @apply capitalize text-4xl;
}
h1 + p {
  @apply text-lg;
}

h2 {
  @apply text-3xl;
}

section h2 {
  @apply font-bold;
}
section,header{
  @apply pb-16;
}
h3 {
   @apply text-2xl;
}

h4, li h3{
  @apply text-xl;
}

ul + p a, a.list {
  @apply text-blue-600 font-bold;
  display: inline-block;
  padding-right: 1.4rem;
  background-image: url(/icons/chev-right.svg);
  background-repeat: no-repeat;
  background-position: right;
  background-size: 1rem 1rem;
  text-transform: uppercase;
}

ul + p a:hover, a.list:hover {
  padding-right: 1.6rem;
}

.rounded-xs {
  border-radius: 2px;
}
</style>