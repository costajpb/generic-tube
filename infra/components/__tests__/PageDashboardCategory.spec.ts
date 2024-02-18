import snapshowWrapper from "@/infra/__tests__/snapshotWrapper"
import PageDashboardCategory from "../PageDashboardCategory.vue"

describe('infra/components/PageDashboardCategory', () => {
    it('should render', () => {
        expect(snapshowWrapper(PageDashboardCategory, {
            provide: {
                useCase: {
                    display: () => {}
                }
            }
        }, {
            name: 'Category',
            shows: []
        })).toMatchSnapshot()
    })
})