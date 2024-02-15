import isEpisodesResource from "../api/episodes"

describe('adapters/episode', () => {
    test('isEpisodesResource', () => {
        const data = [
            {
                id: 1,
                name: 'episode',
                image: {
                    original: 'original-image'
                },
                summary: 'summary'
            }
        ]

        expect(isEpisodesResource(data)).toBeTruthy()
    })
})