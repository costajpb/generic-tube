<script setup lang="ts">
    defineProps<{
        anchor: string
    }>()
</script>

<template>
    <a :class="classes.trigger" :href="'#' + anchor">Search</a>
</template>

<style lang="postcss" module="classes">
    .trigger {
        text-indent: 100vw;
        overflow: hidden;
        position: relative;
        height: var(--size-7);
        width: var(--size-7);
        display: inline-block;
        background: var(--color-background-default);
        border-radius: var(--radius-round);
        vertical-align: middle;

        &::before {
            content: "🔍";
            font-size: var(--font-size-2);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-indent: 0;
        }

        @media (min-width: 700px) {
            display: none
        }
    }
</style>