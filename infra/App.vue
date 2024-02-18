<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import LayoutHeader from '@/infra/components/LayoutHeader.vue';
  import ShowSearch from './components/ShowSearch.vue';
</script>

<template>
  <LayoutHeader>
    <ShowSearch />
  </LayoutHeader>
  <RouterView />
</template>
