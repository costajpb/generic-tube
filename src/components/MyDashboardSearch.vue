<script setup lang="ts">
    import { ref } from 'vue';
import UseCase from '../../application/dashboard'
import MyDashboardSearchResult from './MyDashboardSearchResult.vue';
    
    const result = ref(undefined)

    const props = defineProps<{
        action: UseCase['search']
    }>()

    const searchShows = (event: InputEvent) => {
        const target = event.target as HTMLInputElement

        (async () => {
            const value = target.value
            if (value.length > 3) result.value = await props.action(target.value)
        })()
    }
</script>
<template>
    <input placeholder="Search shows..." type="search" @input="searchShows" />
    <MyDashboardSearchResult :result="result" v-if="result" />
</template>