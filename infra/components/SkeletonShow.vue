<template>
    <li :class="classes.skeleton">
        <slot></slot>
    </li>
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

    .skeleton {
        --_width: 120px;
        --_height: 160px;
        flex: 0 0 var(--_width);
        height: var(--_height);
        border-radius: var(--radius-2);
        animation: gradient 1500ms infinite linear;
        background: linear-gradient(90deg, var(--gray-3) 0px, var(--gray-2) 40px, var(--gray-3) 80px);
        background-size: 600px;
        position: relative;
        overflow: hidden;

        & + & {
            margin-left: var(--size-2);
        }


        @media (min-width: 700px) {
            --_width: 200px;
            --_height: 267px;
        }
    }
</style>