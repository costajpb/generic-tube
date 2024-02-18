<script setup lang="ts">
    import type { Categories } from '@/application/dashboard';
    import DashboardPageCategorySkeleton from '@/infra/components/DashboardPageCategorySkeleton.vue';
    import DashboardPageCategory from '@/infra/components/DashboardPageCategory.vue';
    import { watchEffect, ref } from 'vue';

    const resolved = ref<Categories | undefined>(undefined)

    const props = defineProps<{
        categories: Promise<Categories>
    }>()

    watchEffect(async () => {
        resolved.value = await props.categories
    })
</script>

<template>
    <div>
        <div :class="classes.categories" v-if="!resolved">
            <DashboardPageCategorySkeleton v-for="index in 4" :key="index" />
        </div>
        <div :class="classes.categories" v-if="resolved">
            <DashboardPageCategory v-for="(shows, name) in resolved" :key="name" :name="name" :shows="shows" />
        </div>
    </div>
</template>

<style module="classes">
    .categories {
        margin-block: var(--layout-margin-block-default);
        display: flex;
        flex-direction: column;
        gap: var(--layout-margin-block-default);
        margin-inline: var(--layout-margin-inline-default);
    }
</style>
