<template>
  <div class="relative">
    <div id="bg" class="absolute"></div>
    <navbar />
    <div class="max-w-4xl pt-8 mx-auto">
      <Nuxt />
    </div>
  </div>
</template>

<style lang="postcss">
:root{
  --primary:  #07a6de;
}
#bg {
  height: 40vh;
  /* border-bottom-right-radius: 30%; */
  width: 100vw;
  background: rgba(0,0,0,.1);
  z-index: -1;
}
h1,
h2,
h3,
h4,
a,
nav {
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
  @apply text-2xl mt-4;
}

section h2 {
  @apply font-bold text-3xl;
}
section,
header {
  @apply pb-8;
}
h3 {
  @apply text-2xl;
}

h4,
li h3 {
  @apply text-xl;
}

ul + p a,
a.list {
  @apply text-blue-600 font-bold;
  display: inline-block;
  padding-right: 1.4rem;
  background-image: url(/icons/chev-right.svg);
  background-repeat: no-repeat;
  background-position: right;
  background-size: 1rem 1rem;
  text-transform: uppercase;
}

ul + p a:hover,
a.list:hover {
  padding-right: 1.6rem;
}

p {
  @apply max-w-2xl;
}

.rounded-xs {
  border-radius: 2px;
}

table {
  margin-left: -1rem;
}

th {
  text-align: left;
}
th,
td {
  padding-left: 1rem;
}
</style>