<template>
    <div :class="classes.container">
        <slot></slot>
    </div>
</template>

<style module="classes">
    .container {
        padding-bottom: var(--layout-margin-inline-default);

        @media (min-width: 700px) {
            padding: var(--layout-margin-block-compact);
            border: var(--border-size-3) solid var(--color-branding-secondary);
            border-radius: var(--radius-2);
            position: absolute;
            width: 100%;
            max-height: 60vh;
            overflow: auto;
            top: 100%;
            right: 0;
            /* FIXME */
            background: white;
            box-shadow: var(--shadow-6);
            border-radius: var(--radius-2);
        }
    }
</style>