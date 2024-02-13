<script setup lang="ts">
import type { Categories } from 'application/dashboard';
import MyDashboardCategory from './MyDashboardCategory.vue';
import MyDashboardSearch from './MyDashboardSearch.vue';
import { inject } from 'vue';
import type Show from 'domain/show/entity';
    defineProps<{
        categories: Categories
    }>()

    const action = inject('search') as ((query: string) => Show) | undefined
</script>

<template>
    <MyDashboardSearch :action="action" v-if="action" />
    <MyDashboardCategory v-for="(shows, name) in categories" :name="name" :shows="shows" />
</template>