import snapshowWrapper from '@/infra/__tests__/snapshotWrapper'
import ShowSearchResultContainer from '../ShowSearchResultContainer.vue'

describe('infra/components/ShowSearchResultContainer', () => {
  it('should render', () => {
    expect(snapshowWrapper(ShowSearchResultContainer)).toMatchSnapshot()
  })
})
