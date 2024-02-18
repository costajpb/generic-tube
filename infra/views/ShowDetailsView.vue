<script setup lang="ts">
    import { onMounted, provide, ref } from 'vue';
    import ShowDetails from '@/infra/adapters/use-cases/show-details'
    import { useRoute } from 'vue-router';
    import type Show from '@/domain/show/entity';
    import ShowDetailsPage from '@/infra/components/ShowDetailsPage.vue';
    import router from '@/infra/router';

    const route = useRoute()
    const useCase = new ShowDetails(parseInt(route.params.id as string))
    const details = useCase.details
    
    useCase.on('showDetails:return', () => {
        router.push('/')
    })
    
    provide('useCase', useCase)
</script>

<template>
    <ShowDetailsPage :details="details" v-if="details" />
</template>