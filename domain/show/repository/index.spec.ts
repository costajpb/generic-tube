import Repository from '.'
import nock from 'nock'

describe('domain/show/repository', () => {
    test('list', async () => {
        const shows = [
            {
                id: 1,
                title: 'Title 1',
                genres: ['Drama', 'Action']
            },
            {
                id: 2,
                title: 'Title 2',
                genres: ['Drama', 'Adventure']
            },
            {
                id: 3,
                title: 'Title 3',
                genres: ['Adventure']
            },
            {
                id: 4,
                title: 'Title 4',
                genres: ['Adventure']
            }
        ]

        const adapter = () => shows

        const repository = new Repository(adapter)

        nock(repository.baseUrl)
            .get('/shows')
            .reply(200, shows)

        expect(await repository.list()).toStrictEqual(shows)

    })
})