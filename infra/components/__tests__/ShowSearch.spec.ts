import { DOMWrapper, flushPromises, mount } from '@vue/test-utils'
import ShowSearch from '@/infra/components/ShowSearch.vue'
import clickOutside from '@/infra/directives/clickOutside'

vi.mock('@/infra/util/debounce', () => ({
  default: (fn: () => void) => {
    fn()
  }
}))

describe('components/show-search', () => {
  let wrapper: ReturnType<typeof mount>
  let input: DOMWrapper<Element>

  beforeEach(() => {
    wrapper = mount(ShowSearch, {
      global: {
        directives: {
          'click-outside': clickOutside
        }
      }
    })

    input = wrapper.find('input[type=search]')
  })

  it('should not search if query is shorter than 3 characters', async () => {
    const query = 'qu'
    ;(input.element as HTMLInputElement).value = query
    input.trigger('input')

    await flushPromises()

    expect((wrapper.vm as any).isLoading).toBe(false)
    expect((wrapper.vm as any).result).toBe(undefined)
  })

  it('should clean the results if query is blank', () => {
    ;(wrapper.vm as any).result = [
      {
        id: '1',
        title: 'Dummy show'
      }
    ]
    ;(input.element as HTMLInputElement).value = ''
    input.trigger('input')

    expect((wrapper.vm as any).isLoading).toBe(false)
    expect((wrapper.vm as any).result).toBe(undefined)
  })

  describe('showContainer', () => {
    test('result is defined', () => {
      const vm = wrapper.vm as any
      vm.isTransitioning = false
      vm.isActive = true
      vm.result = []

      expect(vm.showContainer).toBeTruthy()
    })

    test('is loading', () => {
      const vm = wrapper.vm as any
      vm.isTransitioning = false
      vm.isActive = true
      vm.isLoading = true

      expect(vm.showContainer).toBeTruthy()
    })
  })
})
