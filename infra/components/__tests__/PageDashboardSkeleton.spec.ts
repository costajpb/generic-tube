import snapshowWrapper from "@/infra/__tests__/snapshotWrapper"
import PageDashboardSkeleton from "../PageDashboardSkeleton.vue"

describe('infra/components/PageDashboardSkeleton', () => {
    it('should render', () => {
        expect(snapshowWrapper(PageDashboardSkeleton)).toMatchSnapshot()
    })
})