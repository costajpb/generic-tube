<script setup lang="ts">
    import { inject, ref, type Ref } from 'vue';
    import UseCase from '@/application/shared/use-case'
    import MyDashboardSearchResult from '@/src/components/MyDashboardSearchResult.vue'
    import type Show from '@/domain/show/entity';
    import debounce from '@/src/util/debounce';
    
    const isLoading = ref<boolean | undefined>(undefined)
    const result = ref<Show[] | undefined>(undefined)
    const search = inject('search') as Ref<UseCase<Show>['search']>

    const searchShows = (event: Event) => {
        const target = event.target as HTMLInputElement

        (async () => {
            const value = target.value
            if (!value.length) return result.value = undefined
            if (value.length > 2) {
                isLoading.value = true
                debounce(async () => {
                    result.value = await search.value(target.value)
                    isLoading.value = false
                })
            }
        })()
    }
</script>
<template>
    <input placeholder="Search shows..." type="search" @input="searchShows" />
    <MyDashboardSearchResult :result="result" v-if="result" />
</template>