import snapshowWrapper from "@/infra/__tests__/snapshotWrapper"
import PageDashboardVue from "../PageDashboard.vue"

describe('infra/components/PageDashboard', () => {
    it('should render', () => {
        expect(snapshowWrapper(PageDashboardVue, {}, {
            categories: Promise.resolve({})
        })).toMatchSnapshot()
    })
})