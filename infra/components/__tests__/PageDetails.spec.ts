import snapshowWrapper from "@/infra/__tests__/snapshotWrapper"
import PageDetails from "../PageDetails.vue"

describe('infra/components/PageDetails', () => {
    it('should render', () => {
        expect(snapshowWrapper(PageDetails, {}, {
            details: Promise.resolve({
                id: 1,
                title: 'title',
                coverImage: 'image',
                genres: ['Drama'],
                summary: 'summary',
                type: 'Scripted',
                language: 'English',
                episodes: [{
                    id: 1,
                    duration: 56,
                    title: 'Episode',
                    summary: 'summary'
                }]
            })
        })).toMatchSnapshot()
    })
})