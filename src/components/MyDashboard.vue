<script setup lang="ts">
    import type { Categories } from 'application/dashboard';
    import MyDashboardCategory from '@/src/components/MyDashboardCategory.vue';

    defineProps<{
        categories: Categories
    }>()
</script>

<template>
    <div class="categories">
        <MyDashboardCategory v-for="(shows, name) in categories" :key="name" :name="name" :shows="shows" />
    </div>
</template>

<style scoped>
    .categories {
        margin-block: var(--size-fluid-3);
        display: flex;
        flex-direction: column;
        gap: var(--size-fluid-3);
    }
</style>
