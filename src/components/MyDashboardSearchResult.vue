<script setup lang="ts">
import type Show from 'domain/show/entity';

    defineProps<{
        result: Show[]
    }>()
</script>

<template>
    <ol>
        <li v-for="show in result" :key="show.id">
            {{ show.title }}
        </li>
    </ol>
</template>