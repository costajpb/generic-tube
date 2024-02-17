<script setup lang="ts">
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';

    const route = useRoute()
    const isHome = computed(() => route.path === '/')
</script>

<template>
    <header :class="classes.container">
        <component :class="classes.title" :is="isHome ? 'h1' : 'a'" :href="isHome ? undefined : '/'">
            ABN Amro Tube
        </component>
        <div :class="classes.extra">
            <slot></slot>
        </div>
    </header>
</template>

<style module="classes" lang="postcss">
    .container {
        background: linear-gradient(
            to right,
            var(--branding-color-primary-200),
            var(--branding-color-primary-100)
        );
        padding-block: var(--size-2);
        padding-inline: var(--layout-margin-inline);

        display: grid;
        grid-template-columns: auto 1fr;
        gap: var(--size-4);
    }

    .title {       
        margin: 0; 
        font-size: var(--font-size-4);
        font-weight: var(--font-weight-9);
        line-height: var(--font-line-height-1);
        /* FIXME: add this to DS */
        color: white;
        text-decoration: none;

        &:hover {
            text-decoration: none;
        }

        &:before {
            content: "📽️";
            background-color: var(--branding-color-secondary);
            padding: 0 var(--size-2);
            border-radius: var(--radius-2);
            margin-right: var(--size-2);
            display: inline-block;
            transform: rotate(-15deg);
        }
    }

    .extra {
        text-align: right
    }
</style>