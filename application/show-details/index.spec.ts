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
})