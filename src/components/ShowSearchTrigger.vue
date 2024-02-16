<script setup lang="ts">
    defineProps<{
        anchor: string
    }>()
</script>

<template>
    <a :href="'#' + anchor">Search</a>
</template>

<style lang="postcss" scoped>
    * {
        all: unset
    }

    a {
        cursor: pointer;
        text-indent: 100vw;
        overflow: hidden;
        position: relative;
        height: var(--size-7);
        width: var(--size-7);
        display: inline-block;
        /* FIXME */
        background: white;
        border-radius: var(--radius-round);
        vertical-align: middle;
    }

    a::before {
        content: "🔍";
        font-size: var(--font-size-2);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-indent: 0;
    }
</style>