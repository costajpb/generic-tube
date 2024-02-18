<script setup lang="ts">
    const props = defineProps<{
        tagName?: string
    }>()
</script>

<template>
    <component :is="props.tagName || 'div'" :class="classes.wrapper">
        <slot></slot>
    </component>
</template>

<style module="classes" lang="postcss">
    @keyframes gradient {
        0% {
            background-position: -100px
        }

        40%, 100% {
            background-position: 140px
        }
    }

    .wrapper {
        border-radius: var(--radius-2);
        animation: gradient 1500ms infinite linear;
        background: linear-gradient(90deg, var(--gray-3) 0px, var(--gray-2) 40px, var(--gray-3) 80px);
        background-size: 600px;
        position: relative;
        overflow: hidden;
        display: inline-block;
    }
</style>