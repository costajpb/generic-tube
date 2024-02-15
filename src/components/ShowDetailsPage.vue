<script setup lang="ts">
    import type Show from '@/domain/show/entity';
import ShowDetailsPageEpisodes from './ShowDetailsPageEpisodes.vue';
    
    defineProps<{
        details: Required<Pick<Show, 'episodes'>> & Show
    }>()
</script>

<template>
    <div class="container">
        <h1>{{ details.title }}</h1>
        <img :src="details.coverImage" :alt="details.title" />
        <div v-html="details.summary"></div>
        <details>
            <summary>Info</summary>
            <dl>
                <dt>Genres:</dt>
                <dd v-for="genre in details.genres" :key="genre">{{ genre }}</dd>
                <dt>Type:</dt>
                <dd>{{  details.type }}</dd>
                <dt>Language:</dt>
                <dd>{{ details.language }}</dd>
                <dt>Website:</dt>
                <dd>{{  details.website }}</dd>
            </dl>
        </details>
        <ShowDetailsPageEpisodes :episodes="details.episodes" />
    </div>
</template>

<style scoped>
    .container {
        margin-inline: var(--layout-margin-inline);
        display: flex;
        flex-direction: column;
        gap: var(--size-fluid-2);
    }
</style>