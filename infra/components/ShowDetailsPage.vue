<script setup lang="ts">
    import type Show from '@/domain/show/entity';
    import ShowDetailsPageEpisodes from './ShowDetailsPageEpisodes.vue';
    
    defineProps<{
        details: Required<Pick<Show, 'episodes'>> & Show
    }>()
</script>

<template>
    <div :class="classes.container">
        <div :class="classes.jumbotron">
            <h1 :class="classes.title">{{ details.title }}</h1>
            <img :class="classes.cover" :src="details.coverImage" :alt="details.title" />
            <dl :class="classes.specs">
                <dt>Genres:</dt>
                <dd v-for="genre in details.genres" :key="genre">{{ genre }}</dd>
                <dt>Type:</dt>
                <dd>{{  details.type }}</dd>
                <dt>Language:</dt>
                <dd>{{ details.language }}</dd>
                <dt>Website:</dt>
                <dd>{{  details.website }}</dd>
            </dl>
        </div>
        
        <div>
            <div :class="classes.summary" v-html="details.summary"></div>
        
            <div :class="classes.episodes">
                <ShowDetailsPageEpisodes :episodes="details.episodes" />
            </div>
        </div>
    </div>
</template>>

<style module="classes" lang="postcss">
    .container {
        margin-inline: var(--layout-margin-inline);
        display: flex;
        flex-direction: column;
        gap: var(--size-2);

        @media (min-width: 700px) {
            margin-inline: 0;
            display: block;
        }

        p {
            margin: 0
        }
    }

    .title {
        font-size: var(--font-size-4);
        margin-block: var(--size-2);
        display: block;
        font-weight: var(--font-weight-4);

        @media (min-width: 700px) {
            grid-area: a;
            margin: 0;
            position: absolute;
            top: var(--layout-margin-inline);
            left: var(--layout-margin-inline);
            z-index: var(--layer-1);
            font-size: var(--font-size-fluid-3);
        }
    }

    .cover {
        width: var(--size-11);
        float: left;
        margin-right: var(--size-2);

        @media (min-width: 700px) {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% 25%;
        }
    }

    .specs {
        margin: 0;
        display: block;

        dt {
            display: inline;
            font-weight: var(--font-weight-6);
            margin-right: var(--size-1);
        }

        dd {
            display: inline;
            margin: 0;

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
            z-index: 1;
            right: var(--layout-margin-inline);
            bottom: var(--layout-margin-inline);
            position: absolute;
            text-align: right;
            background: rgba(0,0,0,50%);
            padding-block: var(--size-1);
            padding-inline: var(--layout-margin-inline);
            border-radius: var(--radius-2);
        }
    }

    .jumbotron {
        @media (min-width: 700px) {
            height: 30vw;
            position: relative;
            overflow: hidden;
            display: block;
            /* FIXME */
            color: white;

            &:hover {
                height: 50vw;
                transition: height ease 500ms;
            }
        }
    }

    .summary {
        @media (min-width: 700px) {
            padding-block: var(--size-8);
            padding-inline: var(--layout-margin-inline);
            max-width: 60ch;
            display: block;
        }
    }
</style>