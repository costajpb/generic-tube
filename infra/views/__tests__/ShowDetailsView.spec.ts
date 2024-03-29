import router from '@/infra/router'
import { flushPromises, mount } from '@vue/test-utils'
import ShowDetailsView from '@/infra/views/ShowDetailsView.vue'
import ShowDetails from '@/application/show-details'
import snapshowWrapper from '@/infra/__tests__/snapshotWrapper'

vi.mock('vue-router', async (importOriginal) => {
  const mod = await importOriginal<typeof import('vue-router')>()
  return {
    ...mod,
    useRoute: () => ({
      params: {
        id: '1'
      }
    })
  }
})

describe('ShowDetailsView', () => {
  it('should render', () => {
    vi.spyOn(ShowDetails.prototype, 'details', 'get').mockResolvedValue({
      id: 1,
      title: 'Title',
      genres: [],
      summary: 'Summary',
      type: 'Type',
      language: 'Language',
      episodes: []
    })
    expect(snapshowWrapper(ShowDetailsView)).toMatchSnapshot()
  })

  it('should return to dashboard upon request', async () => {
    vi.spyOn(ShowDetails.prototype, 'details', 'get').mockResolvedValue({
      id: 1,
      title: 'Title',
      genres: [],
      summary: 'Summary',
      type: 'Type',
      language: 'Language',
      episodes: []
    })
    const push = vi.spyOn(router, 'push')
    const wrapper = mount(ShowDetailsView)

    await flushPromises()
    ;(wrapper.vm as any).useCase.emit('showDetails:return')

    expect(push).toHaveBeenCalledWith('/')
  })
})
