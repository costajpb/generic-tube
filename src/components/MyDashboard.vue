<script setup lang="ts">
import type { Categories } from 'application/dashboard';
import MyDashboardCategory from '@/src/components/MyDashboardCategory.vue';
import MyDashboardSearch from './MyDashboardSearch.vue';
import { inject } from 'vue';
import type Show from 'domain/show/entity';
import PageHeader from '@/src/components/PageHeader.vue'

    defineProps<{
        categories: Categories
    }>()

    const action = inject('search') as ((query: string) => Show) | undefined
</script>

<template>
    <PageHeader>
        <MyDashboardSearch :action="action" v-if="action" />
    </PageHeader>
    <div class="categories">
        <MyDashboardCategory v-for="(shows, name) in categories" :key="name" :name="name" :shows="shows" />
    </div>
</template>

<style scoped>
    .categories {
        margin-block: var(--size-7);
        display: flex;
        flex-direction: column;
        gap: var(--size-9);
    }
</style>
