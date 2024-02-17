<script setup lang="ts">
    import type Dashboard from '@/application/dashboard';
    import type Show from 'domain/show/entity';
    import { inject } from 'vue';
    
    const props = defineProps<{
        name: string,
        shows: Show[]
    }>()

    const useCase = inject('useCase') as Dashboard

    const scrollHorizontally = (event: WheelEvent) => {
        const offset = event.deltaY;
        (event.currentTarget as HTMLElement).scrollLeft += offset
    }
</script>

<template>
    <article :class="classes.category">
        <h2 :class="classes.title">{{ props.name }}</h2>
        <ol :class="classes.shows" @wheel.prevent="scrollHorizontally">
            <li :class="classes.show" v-for="show in props.shows" :key="show.id">
                <a :href="'/shows/' + show.id" @click.prevent="useCase.display(show)">
                    <img :class="classes.cover" :src="show.coverImage" :alt="show.title" />
                </a>
            </li>
        </ol>
    </article>
</template>

<style module="classes" lang="postcss">
    .category {
        margin-inline: var(--layout-margin-inline-default);
    }

    .title {
        font-size: var(--font-size-h2);
        color: var(--color-branding-primary-200);
        margin: 0;
    }

    .shows {
        display: flex;
        overflow: auto;
        margin: 0;
        padding: 0;
    }

    .show {
        flex: 0 0 15vw;
        height: 20vw;
        border-radius: var(--radius-2);
        position: relative;
        overflow: hidden;

        a {
            position: absolute;
            width: 100%;
            height: 100%;
        }

        & + & {
            margin-left: var(--size-fluid-1)
        }
    }

    .cover {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
</style>