<script setup lang="ts">
    // TODO: normalize naming: context-specific or general purpose?
    import { type Categories } from '@/application/dashboard'
    import Dashboard from '@/src/adapters/use-cases/dashboard'
    import { onMounted, provide, ref } from 'vue';
    import MyDashboard from '@/src/components/MyDashboard.vue';
    import type Show from '@/domain/show/entity'
    import router from '@/src/router';

    const container = ref<HTMLElement | null>(null)
    const categories = ref<Categories | undefined>(undefined)
    const display = ref<Dashboard['display'] | undefined>(undefined)
    provide('display', display)

    const search = ref<Dashboard['search'] | undefined>(undefined)
    provide('search', search)

    onMounted(async () => {
        const useCase = new Dashboard(container.value as HTMLElement)
        categories.value = await useCase.categories
        display.value = useCase.display.bind(useCase)
        search.value = useCase.search.bind(useCase)
        
        container.value?.addEventListener('dashboard:display', (event) => {
            const show = (event as CustomEvent).detail as Show
            router.push(`/shows/${show.id}`)
        })
    })
</script>

<template>
    <div ref="container">
        <MyDashboard :categories="categories" v-if="categories" />
    </div>
</template>