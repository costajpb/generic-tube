<script setup lang="ts">
    import type Show from 'domain/show/entity';
    import { inject } from 'vue';
    
    const props = defineProps<{
        name: string,
        shows: Show[]
    }>()

    const display = inject('display') as ((show: Show) => void | undefined)

    const scrollHorizontally = (event: WheelEvent) => {
        const offset = event.deltaY;
        (event.currentTarget as HTMLElement).scrollLeft += offset
    }
</script>

<template>
    <article>
        <h2>{{ props.name }}</h2>
        <ol @wheel.prevent="scrollHorizontally">
            <li v-for="show in props.shows" :key="show.id">
                <a :href="'/shows/' + show.id" @click.prevent="display(show)" v-if="display">
                    <img :src="show.coverImage" :alt="show.title" />
                </a>
            </li>
        </ol>
    </article>
</template>

<style scoped>
    article {
        margin-inline: var(--layout-margin-inline);
    }

    h2 {
        font-size: var(--font-size-4);
        color: var(--branding-color-primary-200);
        margin-bottom: var(--size-fluid-1);
    }

    ol {
        display: flex;
        list-style: none;
        padding: 0;
        overflow: auto;
    }

    li {
        padding: 0;
        flex: 0 0 15vw;
        height: 20vw;
        border-radius: var(--radius-2);
        position: relative;
        overflow: hidden;
    }

    a {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    li + li {
        margin-left: var(--size-fluid-1)
    }

    img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
</style>