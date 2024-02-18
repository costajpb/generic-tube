<script setup lang="ts">
    import { computed, ref, watchEffect } from 'vue';
    import ShowSearchResult from '@/infra/components/ShowSearchResult.vue'
    import type Show from '@/domain/show/entity';
    import debounce from '@/infra/util/debounce';
    import ShowSearchTrigger from './ShowSearchTrigger.vue';
    import SearchShows from '@/infra/adapters/use-cases/search-shows';
    import ShowSearchResultContainer from './ShowSearchResultContainer.vue';
    import ShowSearchResultSkeleton from './ShowSearchResultSkeleton.vue';
    
    const result = ref<Show[] | undefined>(undefined)
    const isLoading = ref(false)
    const useCase = new SearchShows()

    const searchShows = (event: Event) => {
        const target = event.target as HTMLInputElement
        
        (async () => {
            const value = target.value
            if (!value.length) {
                isLoading.value = false;
                return debounce(() => result.value = undefined)
            }
            if (value.length > 2) {
                isLoading.value = true
                result.value = undefined
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

    const showContainer = computed(() => !isTransitioning.value && isActive.value && (result.value || isLoading.value))
</script>
<template>
    <ShowSearchTrigger anchor="search" />
    <section id="search" :class="classes.container" :data-is-active="isActive" v-click-outside="deactivate">
        <div :class="classes.actions">
            <a :class="classes.close" href="#"><span>Close</span></a>
            <input :class="classes.input" @transitionstart="transitionStart" @transitionend="transitionEnd" @focus="activate" placeholder="Search shows..." type="search" @input="searchShows" />
        </div>
        <ShowSearchResultContainer v-show="showContainer">
            <ShowSearchResult :result="result" v-if="result" />
            <ShowSearchResultSkeleton v-show="isLoading" />
        </ShowSearchResultContainer>
    </section>
</template>

<style lang="postcss" module="classes">
    .actions {
        position: sticky;
        top: 0;
        display: flex;
        gap: var(--layout-margin-block-compact);
        align-items: end;

        @media (min-width: 700px) {
            position: static;
            display: block;
        }
    }
    
    .close {
        span {
            display: none;
        }

        &:before {
            content: url('/arrow-left.svg');
            display: inline-block;
            width: var(--font-size-4);
        }

        @media (min-width: 700px) {
            display: none;
        }
    }

    .container {
        contain: paint;
        background: var(--color-text-default-on-muted);
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
        padding: var(--layout-margin-inline-default);

        &:target {
            left: 0;
        }

        @media (min-width: 700px) {
            contain: unset;
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

    .input {
        flex: 1 1 0;
        transition: width ease-in-out 300ms;
        width: 15em;
        line-height: 2;
        /* FIMXE: size this input properly */

        .container[data-is-active="true"] & {
            @media (min-width: 700px) {
                width: 100%
            }
        }
    }
</style>