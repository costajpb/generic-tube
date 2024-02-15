<script setup lang="ts">
    defineProps<{
        anchor: string
    }>()
</script>

<template>
    <a :href="'#' + anchor">Search</a>
</template>

<style lang="postcss" scoped>
    a {
        font-size: 0;
        position: relative;
        height: var(--size-3);
        width: var(--size-3);
        /* FIXME */
        background: white;
        border-radius: var(--radius-round);
    }

    a::before {
        content: "🔍";
        font-size: var(--font-size-2);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>