import snapshowWrapper from "@/infra/__tests__/snapshotWrapper"
import LayoutHeaderVue from "../LayoutHeader.vue"
import router from "@/infra/router"

describe('infra/components/LayoutHeader', () => {
    it('should render', () => {
        expect(snapshowWrapper(LayoutHeaderVue, {
            plugins: [router]
        })).toMatchSnapshot()
    })
})