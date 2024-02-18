<script setup lang="ts">
    import type Episode from '@/domain/episode/entity';

    defineProps<{
        episodes: Episode[]
    }>()
</script>

<template>
    <h2 :class="classes.title">Episodes</h2>
    <ol :class="classes.episodes">
        <li v-for="episode in episodes" :key="episode.id">
            <article :class="classes.episode">
                <header :class="classes['episode-header']">
                    <h3 :class="classes['episode-title']">{{ episode.title }}</h3>
                    <p :class="classes.duration">{{ episode.duration }}m</p>
                </header>
                <img :class="classes.cover" :src="episode.coverImage" :alt="episode.title" />
                <div :class="classes.summary" v-html="episode.summary" />
            </article>
        </li>
    </ol>
</template>

<style module="classes" lang="postcss">
    .title {
        padding-inline: var(--layout-margin-inline-default);
        box-sizing: content-box;
        position: relative;
        left: calc(var(--layout-margin-inline-default) * -1);
        width: 100%;
        display: block;
        font-size: var(--font-size-h2);
        line-height: 2;
        border-bottom: var(--border-size-2) var(--color-branding-primary-100) solid;
        margin: 0;
        font-weight: var(--font-weight-bold);
        color: var(--color-branding-primary-200);

        @media (min-width: 700px) {
            box-sizing: border-box;
            position: static;
        }
    }

    .episodes {
        list-style: none;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: var(--layout-margin-block-default);
        grid-auto-rows: 1fr;
        max-height: 60vh;
        overflow: auto;
        background: var(--gray-0);
        box-shadow: var(--inner-shadow-2);
        padding: var(--layout-margin-inline-default);
        margin: 0;
        box-sizing: content-box;
        position: relative;
        left: calc(var(--layout-margin-inline-default) * -1);
        width: 100%;

        @media (min-width: 700px) {
            max-height: none;
            position: static;
            box-sizing: border-box;
        }
    }

    .episode-title {
        font-size: var(--font-size-1);
        display: block;
        font-weight: var(--font-weight-6);
        font-size: var(--font-size-2);
        color: var(--color-branding-primary-200);
        margin: 0;
        line-height: var(--line-height-1);
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .episode {
        display: grid;
        grid-template-areas:
            "e f"
            "g g"
        ;
        gap: var(--size-2);
        grid-template-columns: auto 50%;
        box-shadow: var(--shadow-4);
        padding: var(--size-2) var(--size-4);
        background-color: var(--color-background-default);
        border-radius: var(--radius-2);
        transition: transform ease 300ms;

        &:hover {
            transform: scale(102%, 102%);
        }
    }

    .cover {
        grid-area: e;
        width: 100%;
        height: 90%;
        object-fit: cover;
        font-style: italic;
    }

    .episode-header {
        grid-area: f;
    }

    .summary {
        grid-area: g;
        -webkit-line-clamp: 2;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;

        p {
            margin: 0;
        }
    }

    .duration {
        border: var(--border-size-1) solid var(--gray-4);
        border-radius: var(--radius-2);
        display: inline-block;
        padding: var(--size-1) var(--size-1);
        margin-top: var(--size-1);

        &:before {
            content: "🕗";
            margin-right: var(--size-1);
        }
    }
</style>