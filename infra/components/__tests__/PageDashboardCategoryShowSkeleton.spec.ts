import snapshowWrapper from "@/infra/__tests__/snapshotWrapper"
import PageDashboardCategoryShowSkeleton from "../PageDashboardCategoryShowSkeleton.vue"

describe('infra/components/PageDashboardCategoryShowSkeleton', () => {
    it('should render', () => {
        expect(snapshowWrapper(PageDashboardCategoryShowSkeleton, {}, {
            name: 'Category',
            shows: []
        }, {
            useCase: {
                display: () => {}
            }
        })).toMatchSnapshot()
    })
})