import showAdapter from "../show-adapter"

describe('adapters/show-adapter', () => {
    const data = {
        id: 1,
        name: 'show name',
        genres: ['drama'],
        image: {
            original: 'image'
        }
    }

    it('should adapt a single resource', () => {
        const show = showAdapter(data)

        expect(show).toStrictEqual({
            id: data.id,
            title: data.name,
            genres: data.genres,
            coverImage: data.image.original
        })
    })

    it('should adapt an array of resources', () => {
        const shows = showAdapter([data])

        expect(shows).toStrictEqual([{
            id: data.id,
            title: data.name,
            genres: data.genres,
            coverImage: data.image.original
        }])
    })

    it('should handle the search resource', () => {
        const resource = {
            score: 0.543,
            show: {
                ...data
            }
        }
        
        const shows = showAdapter([resource])

        expect(shows).toStrictEqual([{
            id: data.id,
            title: data.name,
            genres: data.genres,
            coverImage: data.image.original
        }])
    })
})