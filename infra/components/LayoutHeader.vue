<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isHome = computed(() => route.path === '/')
</script>

<template>
  <header :class="classes.container">
    <component :class="classes.title" :is="isHome ? 'h1' : 'a'" :href="isHome ? undefined : '/'">
      ABN Amro Tube
    </component>
    <div :class="classes.extra">
      <slot></slot>
    </div>
  </header>
</template>

<style module="classes" lang="postcss">
.container {
  background: linear-gradient(
    to right,
    var(--color-branding-primary-200),
    var(--color-branding-primary-100)
  );
  padding-block: var(--layout-margin-block-compact);
  padding-inline: var(--layout-margin-inline-default);

  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--layout-margin-inline-default);
  align-items: center;
}

.title {
  margin: 0;
  font-size: var(--font-size-app);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-default-on-brand);
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }

  &:before {
    content: '📽️';
    background-color: var(--color-branding-secondary);
    padding: 0 var(--size-2);
    border-radius: var(--radius-2);
    margin-right: var(--size-2);
    display: inline-block;
    transform: rotate(-15deg);
  }
}

.extra {
  text-align: right;
}
</style>
