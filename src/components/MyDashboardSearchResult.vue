<script setup lang="ts">
import type Show from 'domain/show/entity';
    defineProps<{
        result: Show[]
    }>()
</script>

<template>
    <ol>
        <li v-for="show in result" :key="show.id">
            <img :src="show.coverImage" :alt="show.title" />
            <a :href="'/shows/' + show.id">{{ show.title }}</a>
        </li>
    </ol>
</template>

<style scoped>
    ol {
        text-align: initial;
        position: absolute;
        right: 0;
        top: 100%;
        width: 100%;
        z-index: var(--layer-3);
        background: var(--surface-2);
        box-shadow: var(--shadow-6);
        border-radius: var(--radius-8);
        padding: var(--size-1);
        display: flex;
        flex-direction: column;
        max-height: 60vh;
        overflow: auto;
        gap: var(--size-2);
        color: var(--branding-color-primary-200);
    }

    li {
        height: var(--size-11);
        display: inline-grid;
        gap: var(--size-2);
        grid-template-columns: var(--size-9) minmax(50%, min-content);
        align-items: center;
    }
</style>