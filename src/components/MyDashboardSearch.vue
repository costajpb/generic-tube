<script setup lang="ts">
    import { ref } from 'vue';
    import UseCase from '@/application/dashboard'
    import MyDashboardSearchResult from '@/src/components/MyDashboardSearchResult.vue'
    import type Show from '@/domain/show/entity';
    import debounce from '@/src/util/debounce';
    
    const result = ref<Show[] | undefined>(undefined)

    const props = defineProps<{
        action: UseCase['search']
    }>()

    const searchShows = (event: Event) => {
        const target = event.target as HTMLInputElement

        (async () => {
            const value = target.value
            if (value.length > 2) {
                result.value = await props.action(target.value)
            }
        })()
    }
</script>
<template>
    <input placeholder="Search shows..." type="search" @input="searchShows" />
    <MyDashboardSearchResult :result="result" v-if="result" />
</template>