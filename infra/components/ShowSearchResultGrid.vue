<template>
    <ol :class="classes.grid">
        <slot></slot>
    </ol>
</template>

<style module="classes" lang="postcss">
    .grid {
        margin-block: var(--size-4);
        list-style: none;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        gap: var(--size-2);

        @media (min-width: 700px) {
            margin: 0;
        }

        > * {
            height: 150px;
        }
    }
</style>