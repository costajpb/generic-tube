import type Show from "@/domain/show/entity"
import ShowDetails from "."

describe('application/show-details', () => {
    test('display show details', async () => {
        const show: Show = {
            id: 1,
            title: 'Dummy show',
            coverImage: 'cover-image',
            genres: ['Drama']
        }
        
        const repository = {
            find: () => Promise.resolve(show)
        }

        const useCase = new ShowDetails(show.id, repository as any)
        expect(await useCase.details).toStrictEqual(show)
    })

    test('return to dashboard', () => new Promise<void>(done => {
        const spy = vi.fn()
        const repository = {
            find: () => Promise.resolve({})
        }

        const useCase = new ShowDetails(1, repository as any)

        useCase.on('showDetails:return', () => {
            spy()
            done()
        })

        useCase.return()

        expect(spy).toHaveBeenCalledOnce()
    }))
})