<template>
<NuxtLink class="block" :to="`/blog/author/${author.name}`">
<div class="flex items-center">
    <img class="h-8 w-8 rounded-full" :src="author.image" :alt="`${author.name}-profile-image`">
    <div class="pl-2">
        <p>{{author.name}}</p>
        <p class="text-xs leading-tight">Tech blogger</p>
    </div>
</div>
</NuxtLink>
</template>

<script>
export default {
    props: {
        author: {
            type: Object,
            required: true
        }
    }
}
</script>