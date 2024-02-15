<script setup lang="ts">
    import { computed, inject, ref, type Ref } from 'vue';
    import UseCase from '@/application/shared/use-case'
    import MyDashboardSearchResult from '@/src/components/MyDashboardSearchResult.vue'
    import type Show from '@/domain/show/entity';
    import debounce from '@/src/util/debounce';
    import ShowSearchTrigger from './ShowSearchTrigger.vue';
    
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
    <ShowSearchTrigger anchor="search" />
    <section id="search" class="container" :data-is-active="isActive" v-click-outside="deactivate">
        <div class="actions">
            <a href="#">Close</a>
            <input @transitionstart="transitionStart" @transitionend="transitionEnd" @focus="activate" placeholder="Search shows..." type="search" @input="searchShows" />
        </div>
        <MyDashboardSearchResult :result="result" v-if="result" v-show="showResults" />
    </section>
</template>

<style lang="postcss">
    .actions {
        position: sticky;
        top: 0;
        display: flex;
        gap: var(--size-2);
    }

    #search {
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
    }

    input[type="search"] {
        flex: 1 1 0
        /* order: -1; */
    }


    /* FIXME: use custom media */
    @media (min-width: 700px) {
        a[href="#search"] {
            display: none
        }
    }

    /* .container {
        position: relative;
    }

    input {
        transition: width ease-in-out 300ms;
        width: 15em;

        .container[data-is-active="true"] & {
            width: 100%
        }
    } */
</style>