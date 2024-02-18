<script setup lang="ts">
    import Dashboard from '@/infra/adapters/use-cases/dashboard'
    import { provide } from 'vue';
    import PageDashboard from '@/infra/components/PageDashboard.vue';
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
    <PageDashboard :categories="categories" v-if="categories" />
</template>