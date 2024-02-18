import snapshowWrapper from "@/infra/__tests__/snapshotWrapper"
import ShowSearchResultGrid from "../ShowSearchResultGrid.vue"

describe('infra/components/ShowSearchResultGrid', () => {
    it('should render', () => {
        expect(snapshowWrapper(ShowSearchResultGrid)).toMatchSnapshot()
    })
})