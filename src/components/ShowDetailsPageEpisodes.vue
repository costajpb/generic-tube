<script setup lang="ts">
    import type Episode from '@/domain/episode/entity';

    defineProps<{
        episodes: Episode[]
    }>()
</script>

<template>
    <ol>
        <li v-for="episode in episodes" :key="episode.id">
            {{ episode.title }}
        </li>
    </ol>
</template>