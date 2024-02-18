<script setup lang="ts">
import BaseSkeleton from '@/infra/components/BaseSkeleton.vue'
</script>

<template>
  <div :class="classes.container">
    <div>
      <BaseSkeleton :class="classes.title" />
    </div>
    <div>
      <BaseSkeleton :class="classes.content" />
    </div>
  </div>
</template>

<style module="classes" lang="postcss">
.container {
  margin-inline: var(--layout-margin-inline-default);
  margin-block: var(--layout-margin-block-default);
}

.title {
  width: 20ch;
  height: 2em;
}

.content {
  width: 50ch;
  max-width: 70vw;
  height: 5em;
}
</style>
