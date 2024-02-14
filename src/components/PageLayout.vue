
<script setup lang="ts">
    import PageHeader from './PageHeader.vue';
    import ShowSearch from './ShowSearch.vue';
    import { defineProps } from 'vue';

    const props = defineProps<{
        isHome?: boolean
    }>()
</script>

<template>
    <PageHeader :is-home="props.isHome">
        <ShowSearch />
    </PageHeader>
    <slot></slot>
</template>