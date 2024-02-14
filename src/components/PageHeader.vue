<script lang="ts">
</script>
<template>
    <header>
        <h1>
            ABN Amro Tube
        </h1>
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

        /* FIXME: add this to DS */
        color: white;
    }

    h1 {        
        font-size: var(--font-size-4);
    }

    h1:before {
        content: "📽️";
        background-color: var(--branding-color-secondary);
        padding: 0 var(--size-2);
        border-radius: var(--radius-2);
        margin-right: var(--size-2);
    }
</style>