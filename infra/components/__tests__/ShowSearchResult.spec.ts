import snapshowWrapper from "@/infra/__tests__/snapshotWrapper"
import ShowSearchResult from "../ShowSearchResult.vue"

describe('infra/components/ShowSearchResult', () => {
    it('should render', () => {
        expect(snapshowWrapper(ShowSearchResult, {}, { result: [{
            id: 1,
            title: 'Show title',
            coverImage: 'image'
        }] })).toMatchSnapshot()
    })
})