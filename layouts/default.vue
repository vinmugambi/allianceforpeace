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
h4 {
  @apply font-bold font-serif;
}
h1 {
  @apply capitalize text-3xl;
}
h1 + p {
  @apply text-lg;
}

h2{
  @apply text-2xl;
}

.rounded-xs {
  border-radius: 2px;
}
</style>