import Home from "."
import shows from './__fixtures__/shows.json'
import categories from './__fixtures__/categories.json'

describe('application/home', () => {
    test('categorize the most popular shows (i.e. highest weight) by genre', async () => {
        const repository = {
            list: () => Promise.resolve(shows)
        }
        
        const useCase = new Home(repository as any)
        expect(await useCase.categories).toStrictEqual(categories)
    })
})