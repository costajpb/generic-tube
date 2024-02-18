import snapshowWrapper from '@/infra/__tests__/snapshotWrapper'
import ShowSearchResultSkeleton from '../ShowSearchResultSkeleton.vue'

describe('infra/components/ShowSearchResultSkeleton', () => {
  it('should render', () => {
    expect(snapshowWrapper(ShowSearchResultSkeleton)).toMatchSnapshot()
  })
})
