<script setup lang="ts">
import type Show from 'domain/show/entity';
    defineProps<{
        result: Show[]
    }>()
</script>

<template>
    <div class="search-result">
        <ol v-show="result.length">
            <li v-for="show in result" :key="show.id">
                <a :href="'/shows/' + show.id">
                    <img :src="show.coverImage" :title="show.title" :alt="show.title" />
                </a>
            </li>
        </ol>
        <p v-show="!result.length">No shows found! :(</p>
    </div>
</template>

<style scoped lang="postcss">
    * {
        all: unset;
    }

    a {
        cursor: pointer;
        position: absolute;
        width: 100%;
        height: 100%;
        text-align: center;

        @media (min-width: 700px) {
            position: static;
            
        }
    }

    img {
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

        @media (min-width: 700px) {
        }
    }

    ol {
        text-align: initial;
        margin-block: var(--size-4);
        /* position: absolute;
        right: 0;
        top: 100%;
        width: 100%; */
        /* z-index: var(--layer-3); */
        /* background: var(--surface-2); */
        /* box-shadow: var(--shadow-6); */
        /* border-radius: var(--radius-8); */
        /* padding: var(--size-1); */
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        /* flex-direction: row;
        flex-wrap: wrap;
        align-items: stretch; */
        /* max-height: 60vh; */
        /* overflow: auto; */
        gap: var(--size-2);
        color: var(--branding-color-primary-200);

        @media (min-width: 700px) {
            margin: 0;
        }
    }

    li {
        /* flex: 0 0 15vw; */
        height: 150px;
        border-radius: var(--radius-2);
        overflow: hidden;
        /*display: inline-grid;
        gap: var(--size-2);
        grid-template-columns: var(--size-9) minmax(50%, min-content);
        align-items: center; */
        position: relative;
        /* FIXME */
        background-color: gray;
    }

    p {
        text-align: center;
        font-size: var(--font-size-5);
        font-weight: var(--font-weight-5);
        margin-block: var(--size-4);
        /* FIXME */
        color: var(--gray-6);
    }

    .search-result {
        padding: var(--layout-margin-inline);
        box-sizing: border-box;

        @media (min-width: 700px) {
            padding: var(--layout-margin-inline);
            position: absolute;
            width: 100%;
            max-height: 60vh;
            overflow: auto;
            top: 100%;
            right: 0;
            /* FIXME */
            background: white;
            box-shadow: var(--shadow-6);
            border-radius: var(--radius-2);
        }
    }
</style>