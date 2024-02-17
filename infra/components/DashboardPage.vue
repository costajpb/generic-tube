<script setup lang="ts">
    import type { Categories } from 'application/dashboard';
    import DashboardPageCategory from '@/infra/components/DashboardPageCategory.vue';

    defineProps<{
        categories: Categories
    }>()
</script>

<template>
    <div :class="classes.categories">
        <DashboardPageCategory v-for="(shows, name) in categories" :key="name" :name="name" :shows="shows" />
    </div>
</template>

<style module="classes">
    .categories {
        margin-block: var(--size-fluid-3);
        display: flex;
        flex-direction: column;
        gap: var(--size-fluid-3);
    }
</style>
