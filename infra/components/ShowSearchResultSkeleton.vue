<template>
    <ol :class="classes.grid">
        <li :class="classes.grid__item" v-for="index in 7" :key="index"></li>
    </ol>
</template>

<style module="classes" lang="postcss">
/* FIXME: reuse grid styling */
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
    }

    @keyframes gradient {
        0% {
            background-position: -100px
        }

        40%, 100% {
            background-position: 140px
        }
    }
  
  
  
    .grid__item {
        height: 150px;
        border-radius: var(--radius-2);
        animation: gradient 1500ms infinite linear;
        background: linear-gradient(90deg, var(--gray-3) 0px, var(--gray-2) 40px, var(--gray-3) 80px);
        background-size: 600px;
    }
</style>