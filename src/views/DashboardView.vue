<script setup lang="ts">
    // TODO: normalize naming: context-specific or general purpose?
    import { type Categories } from '@/application/dashboard'
    import Dashboard from '@/src/adapters/use-cases/dashboard'
    import { onMounted, provide, ref } from 'vue';
    import MyDashboard from '@/src/components/MyDashboard.vue';
    import type Show from '@/domain/show/entity'
    import router from '@/src/router';

    const categories = ref<Categories | undefined>(undefined)
    const useCase = new Dashboard()

    useCase.on('dashboard:display', (data) => {
        router.push(`/shows/${(data as Show).id}`)
    })

    provide('useCase', useCase)

    onMounted(async () => {
        categories.value = await useCase.categories
    })
</script>

<template>
    <MyDashboard :categories="categories" v-if="categories" />
</template>