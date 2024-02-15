<script setup lang="ts">
    import { computed, inject, ref, type Ref } from 'vue';
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

    const isActive = ref(false)

    const activate = () => isActive.value = true
    const deactivate = () => isActive.value = false

    const isTransitioning = ref(false)

    const transitionStart = () => isTransitioning.value = true

    const transitionEnd = () => isTransitioning.value = false

    const showResults = computed(() => !isTransitioning.value && isActive.value)
</script>
<template>
    <div class="container" :data-is-active="isActive" v-click-outside="deactivate">
        <input @transitionstart="transitionStart" @transitionend="transitionEnd" @focus="activate" placeholder="Search shows..." type="search" @input="searchShows" />
        <MyDashboardSearchResult :result="result" v-if="result" v-show="showResults" />
    </div>
</template>

<style lang="postcss">
    .container {
        position: relative;
    }

    input {
        transition: width ease-in-out 500ms;
        width: 15em;

        .container[data-is-active="true"] & {
            width: 100%
        }
    }
</style>