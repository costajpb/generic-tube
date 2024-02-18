<script setup lang="ts">
    // TODO: normalize naming: context-specific or general purpose?
    import { type Categories } from '@/application/dashboard'
    import Dashboard from '@/infra/adapters/use-cases/dashboard'
    import { onMounted, provide, ref } from 'vue';
    import DashboardPage from '@/infra/components/DashboardPage.vue';
    import type Show from '@/domain/show/entity'
    import router from '@/infra/router';

    const useCase = new Dashboard(['Drama', 'Thriller', 'Crime', 'Adventure','Music'])
    const categories = useCase.categories

    useCase.on('dashboard:display', (show: Show) => {
        router.push(`/shows/${show.id}`)
    })

    provide('useCase', useCase)
</script>

<template>
    <DashboardPage :categories="categories" v-if="categories" />
</template>