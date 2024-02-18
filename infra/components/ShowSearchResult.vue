<script setup lang="ts">
    import type Show from 'domain/show/entity'
    import ShowSearchResultGrid from './ShowSearchResultGrid.vue';
    import BaseSkeleton from './BaseSkeleton.vue';

    defineProps<{
        result: Show[]
    }>()
</script>

<template>
    <ShowSearchResultGrid v-show="result && result.length">
        <BaseSkeleton tagName="li" v-for="show in result" :key="show.id">
            <a :class="classes.anchor" :href="'/shows/' + show.id">
                <img :class="classes.cover" :src="show.coverImage" :title="show.title" :alt="show.title" />
            </a>
        </BaseSkeleton>
    </ShowSearchResultGrid>
    <p :class="classes['no-results']" v-show="!result.length">No shows found! :(</p>
</template>

<style module="classes" lang="postcss">
    .anchor {
        position: absolute;
        width: 100%;
        height: 100%;
        text-align: center;
        top: 0;
        left: 0;

        @media (min-width: 700px) {
            position: static;
        }
    }

    .cover {
        max-width: 100%;
        object-fit: cover;
        display: block;
        position: absolute;

        &:not([src]) {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            /* FIXME */
            color: white;
        }
    }

    .no-results {
        text-align: center;
        font-size: var(--font-size-5);
        font-weight: var(--font-weight-5);
        margin-block: var(--size-4);
        /* FIXME */
        color: var(--gray-6);
    }
</style>