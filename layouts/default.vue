<template>
  <div>
    <navbar class="navbar" />
    <Nuxt keep-alive/>
    <footer class="mt-16 flex justify-center items-center h-12 shadow-inner">
      <p class="text-sm">© Global Alliance for Peace 2020</p>
    </footer>
  </div>
</template>

<style lang="postcss">
:root {
  --primary: #07a6de4e;
}
.container {
  @apply max-w-4xl mx-auto px-4;
}
footer {
  color: rgba(0,0,0,.6);
}
h1,
h2,
h3,
h4,
a,
nav {
  font-family: sans-serif;
}
h1.intro {
  @apply capitalize text-4xl font-bold;
}
h1 + p {
  @apply text-lg;
}

h2 {
  @apply text-2xl;
}

section h2, h1 {
  @apply font-bold text-5xl;
}
.page h2 {
  @apply pb-2;
}
.page h2:not(:first-child) {
  @apply pt-6;
}
.page p,
.page h2 {
  @apply max-w-xl;
}
section {
  @apply pt-16;
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
  text-decoration: underline;
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