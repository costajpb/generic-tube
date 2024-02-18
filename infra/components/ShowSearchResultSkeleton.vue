<script setup lang="ts">
import BaseSkeleton from './BaseSkeleton.vue'
import ShowSearchResultGrid from './ShowSearchResultGrid.vue'
</script>

<template>
  <ShowSearchResultGrid>
    <BaseSkeleton tagName="li" v-for="index in 7" :key="index" />
  </ShowSearchResultGrid>
</template>
