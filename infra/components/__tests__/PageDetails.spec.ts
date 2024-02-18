import snapshowWrapper from "@/infra/__tests__/snapshotWrapper"
import PageDetails from "../PageDetails.vue"

describe('infra/components/PageDetails', () => {
    it('should render', () => {
        expect(snapshowWrapper(PageDetails)).toMatchSnapshot()
    })
})