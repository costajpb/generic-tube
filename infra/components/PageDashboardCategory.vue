<script setup lang="ts">
import type Dashboard from '@/application/dashboard'
import type Show from '@/domain/show/entity'
import { inject } from 'vue'
import PageDashboardCategoryShowSkeleton from '@/infra/components/PageDashboardCategoryShowSkeleton.vue'

const props = defineProps<{
  name: string
  shows: Show[]
}>()

const useCase = inject('useCase') as Dashboard

const scrollHorizontally = (event: WheelEvent) => {
  const offset = event.deltaY
  ;(event.currentTarget as HTMLElement).scrollLeft += offset
}
</script>

<template>
  <article :class="classes.category">
    <h2 :class="classes.title">{{ props.name }}</h2>
    <ol :class="classes.shows" @wheel.prevent="scrollHorizontally">
      <PageDashboardCategoryShowSkeleton v-for="show in props.shows" :key="show.id">
        <a
          :class="classes.anchor"
          :href="'/shows/' + show.id"
          @click.prevent="useCase.display(show)"
        >
          <img :class="classes.cover" :src="show.coverImage" :alt="show.title" />
        </a>
      </PageDashboardCategoryShowSkeleton>
    </ol>
  </article>
</template>

<style module="classes" lang="postcss">
.title {
  font-size: var(--font-size-h2);
  color: var(--color-branding-primary-200);
  margin: 0;
}

.shows {
  display: flex;
  overflow: auto;
  margin: 0;
  padding: 0;
  list-style: none;

  > * + * {
    margin-left: var(--size-2);
  }
}

.anchor {
  position: absolute;
  width: 100%;
  height: 100%;
  color: var(--color-text-muted-on-light);
  text-align: center;
}

.cover {
  object-fit: cover;
  width: 100%;
  height: 100%;
  font-style: italic;
}
</style>
