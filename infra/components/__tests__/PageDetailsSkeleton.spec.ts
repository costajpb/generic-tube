import snapshowWrapper from "@/infra/__tests__/snapshotWrapper"
import PageDetailsSkeleton from "../PageDetailsSkeleton.vue"

describe('infra/components/PageDetailsSkeleton', () => {
    it('should render', () => {
        expect(snapshowWrapper(PageDetailsSkeleton)).toMatchSnapshot()
    })
})