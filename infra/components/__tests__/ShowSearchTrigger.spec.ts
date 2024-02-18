import snapshowWrapper from "@/infra/__tests__/snapshotWrapper"
import ShowSearchTrigger from "../ShowSearchTrigger.vue"

describe('infra/components/ShowSearchTrigger', () => {
    it('should render', () => {
        expect(snapshowWrapper(ShowSearchTrigger)).toMatchSnapshot()
    })
})