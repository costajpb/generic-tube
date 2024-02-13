import Dashboard from "."
import shows from './__fixtures__/shows.json'
import categories from './__fixtures__/categories.json'
import Show from "../../domain/show/entity"

describe('application/dashboard', () => {
    test('categorize the most popular shows (i.e. highest weight) by genre', async () => {
        const repository = {
            list: () => Promise.resolve(shows)
        }
        
        const useCase = new Dashboard(repository as any)
        expect(await useCase.categories).toStrictEqual(categories)
    })

    test('emit event to display show when requested', () => new Promise(done => {
        const useCase = new Dashboard({} as any)
        const spy = vi.fn()
        const show = {} as Show

        useCase.on('dashboard:display', data => {
            spy(data)
            done()
        })

        useCase.display(show)

        expect(spy).toHaveBeenCalledOnce()
        expect(spy).toHaveBeenCalledWith(data)
    }))

    test('search shows to get their details details', async () => {
        const search = vi.fn().mockReturnValue([])

        const repository = {
            search
        }
        
        const useCase = new Dashboard(repository as any)
        const query = 'powerpuff'

        await useCase.search(query)
        
        expect(search).toHaveBeenCalledOnce()
        expect(search).toHaveBeenCalledWith(query)
    })
})