<template>
    <div :class="classes.container">
        <slot></slot>
    </div>
</template>

<style module="classes">
    .container {
        padding: var(--layout-margin-inline);
        box-sizing: border-box;

        @media (min-width: 700px) {
            padding: var(--layout-margin-inline);
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