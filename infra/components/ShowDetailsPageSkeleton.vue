<script setup lang="ts">
    import BaseSkeleton from '@/infra/components/BaseSkeleton.vue';
</script>

<template>
    <div :class="classes.container">
        <div>
            <BaseSkeleton><div :class="classes.title"></div></BaseSkeleton>
        </div>
        <div>
            <BaseSkeleton><div :class="classes.content"></div></BaseSkeleton>
        </div>
    </div>
</template>

<style module="classes" lang="postcss">
    .container {
        margin-inline: var(--layout-margin-inline-default);
        margin-block: var(--layout-margin-block-default);
    }

    .title {
        width: 20ch;
        height: 2em;
    }

    .content {
        margin-block: var(--layout-margin-block-default);
        width: 50ch;
        max-width: 70vw;
        height: 5em;
    }
</style>