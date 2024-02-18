import Repository from '.'
import nock from 'nock'
import type Show from '@/domain/show/entity'

describe('domain/show/repository', () => {
    test('list', async () => {
        const shows = [
            {
                id: 1,
                title: 'Title 1',
                genres: ['Drama', 'Action'],
                coverImage: '',
                summary: 'Summary 1',
                type: 'Animation',
                language: 'English'
            },
            {
                id: 2,
                title: 'Title 2',
                genres: ['Drama', 'Adventure'],
                coverImage: '',
                summary: 'Summary 2',
                type: 'Documentary',
                language: 'Japanese'
            },
            {
                id: 3,
                title: 'Title 3',
                genres: ['Adventure'],
                coverImage: '',
                summary: 'Summary 3',
                type: 'Documentary',
                language: 'English'
            },
            {
                id: 4,
                title: 'Title 4',
                genres: ['Adventure'],
                coverImage: '',
                summary: 'Summary 4',
                type: 'Animation',
                language: 'German'
            }
        ]

        const adapter = () => shows

        const repository = new Repository(adapter)

        nock(repository.baseUrl)
            .get('/shows')
            .query({
                embedded: 'episodes'
            })
            .reply(200, shows)

        expect(await repository.list()).toStrictEqual(shows)

    })

    test('search', async () => {
        const shows: Show[] = [
            {
                id: 6771,
                title: 'Demashitaa! Powerpuff Girls Z',
                genres: ['Comedy', 'Action'],
                coverImage: 'https://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg',
                summary: 'Summary 1',
                type: 'Animation',
                language: 'English'
            },
            {
                id: 26437,
                title: 'The Powerpuff Girls',
                genres: ['Comedy', 'Action'],
                coverImage: 'https://static.tvmaze.com/uploads/images/original_untouched/104/260281.jpg',
                summary: 'Summary 2',
                type: 'Animation',
                language: 'English'
            }
        ]
        
        const adapter = () => shows

        const repository = new Repository(adapter)

        const query = 'powerpuff'

        nock(repository.baseUrl)
            .get(`/search/shows?=${query}`)
            .reply(200, shows)

        expect(await repository.search(query)).toStrictEqual(shows)
    })
})