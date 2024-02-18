
<script setup lang="ts">
    import BaseSkeleton from './BaseSkeleton.vue';
</script>

<template>
    <div>
        <BaseSkeleton :class="classes.name" />
        <ol :class="classes.list">
            <BaseSkeleton :class="classes.show" v-for="index in 5" :key="index" />
        </ol>
    </div>
</template>

<style module="classes" lang="postcss">
    .list {
        display: flex;
        overflow: auto;
        margin: 0;
        padding: 0;
        list-style: none;
        overflow: hidden;
    }

    .name {
        display: inline-block;
        width: 20ch;
        height: 2em;

        @media (min-width: 700px) {
            --_width: var(--size-13);
            --_width: var(--size-14);
        }
    }

    .show {
        --_width: 120px;
        --_height: 160px;
        flex: 0 0 var(--_width);
        height: var(--_height);

        & + & {
            margin-left: var(--size-2);
        }

        @media (min-width: 700px) {
            --_width: 200px;
            --_height: 267px;
        }
    }
</style>