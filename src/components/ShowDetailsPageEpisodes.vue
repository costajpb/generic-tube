<script setup lang="ts">
    import type Episode from '@/domain/episode/entity';

    defineProps<{
        episodes: Episode[]
    }>()
</script>

<template>
    <h2>Episodes</h2>
    <ol>
        <li v-for="episode in episodes" :key="episode.id">
            <article>
                <header>
                    <h3>{{ episode.title }}</h3>
                    <p>{{ episode.duration }}m</p>
                </header>
                <img :src="episode.coverImage" :alt="episode.title" />
                <div class="summary" v-html="episode.summary" />
            </article>
        </li>
    </ol>
</template>

<style scoped>
    * {
        all: unset;
    }

    a {
        cursor: pointer;
    }

    ol {
        display: flex;
        flex-direction: column;
        gap: var(--size-4);
        max-height: 60vh;
        overflow: auto;
    }

    h3 {
        font-size: var(--font-size-1)
    }

    article {
        display: grid;
        grid-template-areas:
            "e f"
            "g g"
        ;
        gap: var(--size-2);
        grid-template-columns: minmax(10ch, 20vw) auto;
    }

    img {
        grid-area: e;
        max-width: 100%;
    }

    header {
        grid-area: f;
    }

    h3 {
        display: block;
        font-weight: var(--font-weight-6);
        font-size: var(--font-size-2);
    }

    .summary {
        grid-area: g;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
</style>