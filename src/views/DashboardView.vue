<script setup lang="ts">
    import Dashboard, { type Categories } from '@/application/dashboard'
    import Shows from '@/domain/show/repository';
    import showAdapter from '@/src/adapters/show-adapter';
    import { onMounted, provide, ref } from 'vue';
    import Emitter from '@/src/util/emitter'
    import MyDashboard from '@/src/components/MyDashboard.vue';
    import type Show from '@/domain/show/entity'
    import router from '@/src/router';

    const container = ref<HTMLElement | null>(null)
    const categories = ref<Categories | undefined>(undefined)
    const display = ref<((show: Show) => void) | null>(null)
    provide('display', display)

    const search = ref<Dashboard['search'] | undefined>(undefined)
    provide('search', search)

    onMounted(async () => {
        const repository = new Shows(showAdapter)
        const useCase = new Dashboard(repository, new Emitter(container.value as HTMLElement))
        categories.value = await useCase.categories
        display.value = useCase.display.bind(useCase)
        search.value = useCase.search.bind(useCase)
        
        container.value?.addEventListener('dashboard:display', (event) => {
            const show = event.detail as Show
            router.push(`/show/${show.id}`)
        })
    })
</script>

<template>
    <div ref="container">
        <MyDashboard :categories="categories" v-if="categories" />
    </div>
</template>