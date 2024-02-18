<script setup lang="ts">
    import BaseSkeleton from './BaseSkeleton.vue';
</script>

<template>
    <ol :class="classes.grid">
        <BaseSkeleton tagName="li" :class="classes.item" v-for="index in 7" :key="index" />
    </ol>
</template>

<style module="classes" lang="postcss">
/* FIXME: reuse grid styling */
    .grid {
        margin-block: var(--size-4);
        list-style: none;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        gap: var(--size-2);

        @media (min-width: 700px) {
            margin: 0;
        }
    }
    
    .item {
        height: 150px;
    }
</style>