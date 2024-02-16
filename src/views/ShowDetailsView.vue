<script setup lang="ts">
    import { onMounted, provide, ref } from 'vue';
    import ShowDetails from '@/src/adapters/use-cases/show-details'
    import { useRoute } from 'vue-router';
    import type Show from '@/domain/show/entity';
    import ShowDetailsPage from '@/src/components/ShowDetailsPage.vue';
    import router from '../router';

    const details = ref<Required<Pick<Show, 'episodes'>> & Show | undefined>(undefined)
    const route = useRoute()
    const useCase = new ShowDetails(parseInt(route.params.id as string))
    
    useCase.on('showDetails:return', () => {
        router.push('/')
    })
    
    provide('useCase', useCase)

    onMounted(async () => {
        details.value = (await useCase.details) as Required<Pick<Show, 'episodes'>> & Show
    })
</script>

<template>
    <ShowDetailsPage :details="details" v-if="details" />
</template>