<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import PageHeader from '@/infra/components/PageHeader.vue';
  import ShowSearch from './components/ShowSearch.vue';
</script>

<template>
  <PageHeader>
    <ShowSearch />
  </PageHeader>
  <RouterView />
</template>
