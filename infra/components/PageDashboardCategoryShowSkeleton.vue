<script setup lang="ts">
import BaseSkeleton from './BaseSkeleton.vue'
</script>

<template>
  <BaseSkeleton :class="classes.skeleton" tagName="li">
    <slot></slot>
  </BaseSkeleton>
</template>

<style module="classes" lang="postcss">
.skeleton {
  --_width: 120px;
  --_height: 160px;
  flex: 0 0 var(--_width);
  height: var(--_height);
  position: relative;
  overflow: hidden;

  @media (min-width: 700px) {
    --_width: 200px;
    --_height: 267px;
  }
}
</style>
