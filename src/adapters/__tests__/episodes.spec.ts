import isEpisodesResource from "@/src/adapters/api/episodes"

describe('adapters/episode', () => {
    test('isEpisodesResource', () => {
        const data = [
            {
                id: 1,
                name: 'episode',
                image: {
                    original: 'original-image'
                },
                summary: 'summary',
                runtime: 56
            }
        ]

        expect(isEpisodesResource(data)).toBeTruthy()
    })
})