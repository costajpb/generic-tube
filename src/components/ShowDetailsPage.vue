<script setup lang="ts">
    import type Show from '@/domain/show/entity';
    import { computed } from 'vue';
    
    const props = defineProps<{
        details: Show
    }>()

    const genres = computed(() => props.details.genres.join(', '))
</script>

<template>
    <h1>{{ details.title }}</h1>
    <p>Genres: {{ genres }}</p>
    <img :src="details.coverImage" :alt="details.title" />
</template>