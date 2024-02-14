<script setup lang="ts">
    const props = defineProps<{
        isHome?: boolean
    }>()
</script>

<template>
    <header>
        <component class="title" :is="props.isHome ? 'h1' : 'a'" :href="props.isHome ? undefined : '/'">
            ABN Amro Tube
        </component>
        <slot></slot>
    </header>
</template>

<style scoped>
    header {
        background: linear-gradient(
            to right,
            var(--branding-color-primary-200),
            var(--branding-color-primary-100)
        );
        padding-block: var(--size-2);
        padding-inline: var(--layout-margin-inline);

        display: flex;
        justify-content: space-between;
    }

    .title {        
        font-size: var(--font-size-4);
        font-weight: var(--font-weight-9);
        line-height: var(--font-line-height-1);
        /* FIXME: add this to DS */
        color: white;
    }

    .title:hover {
        text-decoration: none;
    }

    .title:before {
        content: "📽️";
        background-color: var(--branding-color-secondary);
        padding: 0 var(--size-2);
        border-radius: var(--radius-2);
        margin-right: var(--size-2);
        display: inline-block;
        transform: rotate(-15deg);
    }
</style>