<script setup lang="ts">
    import type Show from 'domain/show/entity'

    defineProps<{
        result: Show[]
    }>()
</script>

<template>
    <ol :class="classes.shows" v-show="result && result.length">
        <li :class="classes.show" v-for="show in result" :key="show.id">
            <a :class="classes.anchor" :href="'/shows/' + show.id">
                <img :class="classes.cover" :src="show.coverImage" :title="show.title" :alt="show.title" />
            </a>
        </li>
    </ol>
    <p :class="classes['no-results']" v-show="!result.length">No shows found! :(</p>
</template>

<style module="classes" lang="postcss">
    .anchor {
        position: absolute;
        width: 100%;
        height: 100%;
        text-align: center;

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

    .shows {
        text-align: initial;
        margin-block: var(--size-4);
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        gap: var(--size-2);
        color: var(--branding-color-primary-200);

        @media (min-width: 700px) {
            margin: 0;
        }
    }

    .show {
        height: 150px;
        border-radius: var(--radius-2);
        overflow: hidden;
        position: relative;
        /* FIXME */
        background-color: gray;
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