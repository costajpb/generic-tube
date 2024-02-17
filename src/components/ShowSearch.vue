<script setup lang="ts">
    import { computed, ref } from 'vue';
    import MyDashboardSearchResult from '@/src/components/MyDashboardSearchResult.vue'
    import type Show from '@/domain/show/entity';
    import debounce from '@/src/util/debounce';
    import ShowSearchTrigger from './ShowSearchTrigger.vue';
    import SearchShows from '@/src/adapters/use-cases/search-shows';
    
    const isLoading = ref<boolean | undefined>(undefined)
    const result = ref<Show[] | undefined>(undefined)
    const useCase = new SearchShows()

    const searchShows = (event: Event) => {
        const target = event.target as HTMLInputElement
        
        (async () => {
            const value = target.value
            if (!value.length) return result.value = undefined
            if (value.length > 2) {
                isLoading.value = true
                debounce(async () => {
                    result.value = await useCase.search(target.value)
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

    const showResults = computed(() => !isTransitioning.value && isActive.value && !isLoading.value)
</script>
<template>
    <ShowSearchTrigger anchor="search" />
    <section id="search" class="container" :data-is-active="isActive" v-click-outside="deactivate">
        <div class="actions">
            <a href="#"><span>Close</span></a>
            <input @transitionstart="transitionStart" @transitionend="transitionEnd" @focus="activate" placeholder="Search shows..." type="search" @input="searchShows" />
        </div>
        <p v-show="isLoading">Loading...</p>
        <MyDashboardSearchResult :result="result" v-if="result" v-show="showResults" />
    </section>
</template>

<style lang="postcss" scoped>
    .actions {
        position: sticky;
        top: 0;
        display: flex;
        gap: var(--size-2);

        @media (min-width: 700px) {
            position: static;
            display: block;
        }
    }
    
    a[href="#"] {
        @media (min-width: 700px) {
            display: none;
        }
    }

    a[href="#"] span {
        display: none;
    }

    a[href="#"]:before {
        content: url('/arrow-left.svg');
        display: inline-block;
        width: var(--font-size-2);
        height: var(--font-size-2);
        vertical-align: middle;
    }

    #search {
        /* contain: paint; */
        background: white;
        position: fixed;
        height: 100%;
        width: 100%;
        overflow: auto;
        top: 0;
        left: 100%;
        transition: left ease 300ms;
        z-index: var(--layer-5);
        display: flex;
        flex-direction: column;
        padding: var(--layout-margin-inline);

        &:target {
            left: 0;
        }

        @media (min-width: 700px) {
            position: relative;
            top: unset;
            left: unset;
            background: unset;
            width: unset;
            height: unset;
            padding: unset;
            overflow: visible;
        }
    }

    input[type="search"] {
        flex: 1 1 0;
        /* order: -1; */
        transition: width ease-in-out 300ms;
        width: 15em;
        line-height: 2;

        .container[data-is-active="true"] & {
            @media (min-width: 700px) {
                width: 100%
            }
        }
    }


    /* FIXME: use custom media */
    @media (min-width: 700px) {
        a[href="#search"] {
            display: none
        }
    }
</style>