<script setup lang="ts">
    import type Show from 'domain/show/entity';
    import { inject } from 'vue';
    
    const props = defineProps<{
        name: string,
        shows: Show[]
    }>()

    const display = inject('display') as ((show: Show) => void | undefined)
</script>

<template>
    <article>
        <h2>{{ props.name }}</h2>
        <ol>
            <li v-for="show in props.shows" :key="show.id">
                <a :href="'/shows/' + show.id" @click.prevent="display(show)" v-if="display">
                    <img :src="show.coverImage" :alt="show.title" />
                    {{ show.title }}
                </a>
            </li>
        </ol>
    </article>
</template>