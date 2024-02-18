<script setup lang="ts">
import type { Categories } from '@/application/dashboard'
import PageDashboardSkeleton from '@/infra/components/PageDashboardSkeleton.vue'
import PageDashboardCategory from '@/infra/components/PageDashboardCategory.vue'
import { watchEffect, ref } from 'vue'

const resolved = ref<Categories | undefined>(undefined)

const props = defineProps<{
  categories: Promise<Categories>
}>()

watchEffect(async () => {
  resolved.value = await props.categories
})
</script>

<template>
  <div>
    <div :class="classes.categories" v-if="!resolved">
      <PageDashboardSkeleton v-for="index in 4" :key="index" />
    </div>
    <div :class="classes.categories" v-if="resolved">
      <PageDashboardCategory
        v-for="(shows, name) in resolved"
        :key="name"
        :name="name"
        :shows="shows"
      />
    </div>
  </div>
</template>

<style module="classes">
.categories {
  margin-block: var(--layout-margin-block-default);
  display: flex;
  flex-direction: column;
  gap: var(--layout-margin-block-default);
  margin-inline: var(--layout-margin-inline-default);
}
</style>
