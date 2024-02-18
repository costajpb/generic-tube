<script setup lang="ts">
    import { provide } from 'vue';
    import ShowDetails from '@/infra/adapters/use-cases/show-details'
    import { useRoute } from 'vue-router';
    import PageDetails from '@/infra/components/PageDetails.vue';
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
    <PageDetails :details="details" v-if="details" />
</template>