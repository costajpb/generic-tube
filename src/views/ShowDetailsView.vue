<script setup lang="ts">
    import { onMounted, provide, ref } from 'vue';
    import ShowDetails from '@/src/adapters/use-cases/show-details'
    import { useRoute } from 'vue-router';
    import type Show from '@/domain/show/entity';
    import ShowDetailsPage from '@/src/components/ShowDetailsPage.vue';

    const container = ref<HTMLElement | null>(null)
    const details = ref<Show | undefined>(undefined)
    const returnToDashboard = ref<ShowDetails['return'] | undefined>(undefined)
    provide('returnToDashboard', returnToDashboard)

    const route = useRoute()

    onMounted(async () => {
        const useCase = new ShowDetails(parseInt(route.params.id as string), container.value as HTMLElement)
        details.value = await useCase.details
        returnToDashboard.value = useCase.return.bind(useCase)
    })
</script>

<template>
    <div ref="container">
        <ShowDetailsPage :details="details" v-if="details" />
    </div>
</template>