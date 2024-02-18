<script setup lang="ts">
    import type Show from '@/domain/show/entity';
    import ShowDetailsPageEpisodes from '@/infra/components/ShowDetailsPageEpisodes.vue';
    import ShowDetailsPageSkeleton from '@/infra/components/ShowDetailsPageSkeleton.vue';
    import { ref, watchEffect } from 'vue';
    
    const resolved = ref<Required<Pick<Show, 'episodes'>> & Show | undefined>(undefined)

    const props = defineProps<{
        details: Promise<Required<Pick<Show, 'episodes'>> & Show>
    }>()

    watchEffect(async () => {
        resolved.value = await props.details
    })
</script>

<template>
    <ShowDetailsPageSkeleton v-if="!resolved" />
    <div :class="classes.container" v-if="resolved">
        <div :class="classes.jumbotron">
            <h1 :class="classes.title">{{ resolved.title }}</h1>
            <img :class="classes.cover" :src="resolved.coverImage" :alt="resolved.title" />
            <dl :class="classes.specs">
                <dt>Genres:</dt>
                <dd v-for="genre in resolved.genres" :key="genre">{{ genre }}</dd>
                <dt>Type:</dt>
                <dd>{{  resolved.type }}</dd>
                <dt>Language:</dt>
                <dd>{{ resolved.language }}</dd>
            </dl>
        </div>
        
        <div>
            <div :class="classes.summary" v-html="resolved.summary"></div>
        
            <div :class="classes.episodes">
                <ShowDetailsPageEpisodes :episodes="resolved.episodes" />
            </div>
        </div>
    </div>
</template>>

<style module="classes" lang="postcss">
    .container {
        margin-inline: var(--layout-margin-inline-default);
        display: flex;
        flex-direction: column;
        gap: var(--size-2);

        @media (min-width: 700px) {
            margin-inline: 0;
            display: block;
        }
    }

    .title {
        font-size: var(--font-size-h1);
        margin-block: var(--layout-margin-block-default);
        display: block;
        font-weight: var(--font-weight-bold);
        color: var(--color-branding-primary-200);

        @media (min-width: 700px) {
            margin: 0;
            position: absolute;
            top: var(--layout-margin-inline-default);
            padding-inline: var(--layout-margin-inline-default);
            background: rgba(0,0,0,50%);
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
            right: var(--layout-margin-inline-default);
            bottom: var(--layout-margin-inline-default);
            position: absolute;
            text-align: right;
            background: rgba(0,0,0,50%);
            padding-block: var(--size-1);
            padding-inline: var(--layout-margin-inline-default);
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
        margin-block: var(--layout-margin-block-default);

        p {
            margin: 0
        }

        @media (min-width: 700px) {
            margin-block: 0;
            padding-block: var(--layout-margin-block-loose);
            padding-inline: var(--layout-margin-inline-default);
            max-width: 60ch;
            display: block;
        }
    }
</style>