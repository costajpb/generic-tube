import { flushPromises, mount } from '@vue/test-utils'
import router from '@/infra/router'
import clickOutside from '@/infra/directives/clickOutside'
import App from '@/infra/App.vue'
import snapshowWrapper from './snapshotWrapper'

const mocks = vi.hoisted(async () => ({
  UseCase: await vi.importActual('@/application/shared/use-case'),
  search: vi.fn()
}))

vi.mock('@/application/shared/use-case', async () => {
  const search = (await mocks).search
  const UseCase = (await mocks).UseCase.default as any
  class MockUseCase extends UseCase {
    search(query: string) {
      return search(query)
    }
  }
  return {
    default: MockUseCase
  }
})

vi.mock('@/infra/util/debounce', () => ({
  default: (fn: () => void) => {
    fn()
  }
}))

describe('App', () => {
  it('should render', () => {
    expect(snapshowWrapper(App, { plugins: [router] })).toMatchSnapshot()
  })

  it('should allow searching shows with debounce', async () => {
    router.push('/')
    await router.isReady()
    const wrapper = mount(App, {
      global: {
        plugins: [router],
        directives: {
          'click-outside': clickOutside
        }
      }
    })

    await flushPromises()

    const input = wrapper.find('[type=search]')

    const query = 'query'

    ;(input.element as HTMLInputElement).value = query

    input.trigger('input')

    const search = (await mocks).search

    expect(search).toHaveBeenCalledWith(query)
  })
})
