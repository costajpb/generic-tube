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

<style scoped lang="postcss">
    * {
        all: unset;
    }

    a {
        cursor: pointer;
    }

    h2 {
        padding-inline: var(--layout-margin-inline);
        display: block;
        font-size: var(--font-size-5);
        line-height: 2;
        border-bottom: var(--border-size-2) var(--branding-color-primary-100) solid;
    }

    ol {
        display: grid;
        /* FIXME: 300px */
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: var(--size-4);
        max-height: 60vh;
        overflow: auto;
        background: var(--gray-0);
        /* box-sizing: content-box; */
        /* padding: var(--layout-margin-inline); */
        /* margin-left: calc(var(--layout-margin-inline) * -1); */
        box-shadow: var(--inner-shadow-2);
        padding: var(--layout-margin-inline);

        @media (min-width: 700px) {
            max-height: none;
        }
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
        box-shadow: var(--shadow-4);
        padding: var(--size-2) var(--size-4);
        /* FIXME */
        background-color: white;
        border-radius: var(--radius-2);
        transition: transform ease 300ms;

        &:hover {
            transform: scale(102%, 102%);
        }
    }

    img {
        grid-area: e;
        width: 100%;
        height: 90%;
        object-fit: cover;
    }

    header {
        grid-area: f;
    }

    h3 {
        display: block;
        font-weight: var(--font-weight-6);
        font-size: var(--font-size-2);
        color: var(--heading-color);
    }

    .summary {
        grid-area: g;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
</style>