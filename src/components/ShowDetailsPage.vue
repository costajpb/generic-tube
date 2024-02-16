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
        <div class="intro">
            <img :src="details.coverImage" :alt="details.title" />
            <div v-html="details.summary"></div>
        </div>
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
        <div class="episodes">
            <ShowDetailsPageEpisodes :episodes="details.episodes" />
        </div>
    </div>
</template>

<style module>
    p {
        margin: 0;
    }
</style>

<style scoped>
    * {
        all: unset;
    }

    .container {
        margin-inline: var(--layout-margin-inline);
        display: flex;
        flex-direction: column;
        gap: var(--size-2);
    }

    h1 {
        font-size: var(--font-size-4);
        margin-block: var(--size-2);
        display: block;
        font-weight: var(--font-weight: 4);
    }

    img {
        width: var(--size-11);
        float: left;
        margin-right: var(--size-2);
    }

    details {
        background: var(--gray-2);
    }

    summary {
        font-weight: var(--font-weight-6);
        cursor: pointer;
        display: block;
        background: var(--gray-4);
        padding: var(--size-1) var(--size-2);

        &:before {
            content: url('/arrow-left.svg');
            display: inline-block;
            width: var(--size-4);
            vertical-align: text-bottom;
            transform: rotate(180deg);
            transition: transform ease 300ms;

            details[open] & {
                transform: rotate(270deg)
            }
        }
    }

    dl {
        display: block;
        padding: var(--size-1) var(--size-2);
    }
    
    dt {
        font-weight: var(--font-weight-6);
        margin-right: var(--size-1);
    }

    dd {
        & + dd {
            &:before {
                content: ", "
            }
        }

        & + dt {
            margin-top: var(--size-4);

            &:before {
                content: "\a";
                white-space: pre;
            }
        }
    }

    @media (min-width: 700px) {
        .container {
            display: grid;
            grid-template-areas:
                "a a"
                "b c"
                "d d";
            grid-template-columns: auto 300px;
        }

        h1 {
            grid-area: a;
        }

        .intro {
            grid-area: b
        }

        details {
            grid-area: c;
            align-self: baseline;
        }

        .episodes {
            grid-area: d;
        }
    }
</style>