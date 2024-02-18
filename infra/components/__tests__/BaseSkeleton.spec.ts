import snapshowWrapper from "@/infra/__tests__/snapshotWrapper"
import BaseSkeletonVue from "../BaseSkeleton.vue"

describe('infra/components/BaseSkeleton', () => {
    it('should render', () => {
        expect(snapshowWrapper(BaseSkeletonVue)).toMatchSnapshot()
    })
})