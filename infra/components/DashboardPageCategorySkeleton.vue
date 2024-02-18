
<script setup lang="ts">
    import SkeletonCategoryName from './SkeletonCategoryName.vue';
    import SkeletonShow from './SkeletonShow.vue';
</script>

<template>
    <div>
        <SkeletonCategoryName />
        <ol :class="classes.list">
            <SkeletonShow v-for="index in 5" :key="index" />
        </ol>
    </div>
</template>

<style module="classes" lang="postcss">
    .list {
        display: flex;
        overflow: auto;
        margin: 0;
        padding: 0;
        list-style: none;
        overflow: hidden;
    }
</style>