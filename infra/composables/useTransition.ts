import { onMounted, onUnmounted, ref, type Ref } from 'vue'

export default function useTransition(element: Ref<HTMLElement | null>) {
  const isTransitioning = ref(false)

  const transitionStart = () => (isTransitioning.value = true)
  const transitionEnd = () => (isTransitioning.value = false)

  onMounted(() => {
    element.value?.addEventListener('transitionstart', transitionStart)
    element.value?.addEventListener('transitionend', transitionEnd)
  })

  onUnmounted(() => {
    element.value?.removeEventListener('transitionstart', transitionStart)
    element.value?.removeEventListener('transitionEnd', transitionEnd)
  })

  return isTransitioning
}
