import Show from "../../domain/show/entity";
import Shows from "../../domain/show/repository";
import UseCase from "../shared/use-case";

export type Categories = Record<string, Show[]>

export default class Dashboard extends UseCase<Show> {
    private categorize(shows: Show[]) {
        const categories: Categories = {}
        
        shows.forEach(show => {
            const genres = show.genres
            genres.forEach(genre => {
                if (!(genre in categories)) {
                    categories[genre] = []
                }
                categories[genre].push({...show})
            })
        })

        return categories
    }

    get categories(): Promise<Categories> {
        return (async () => {
            const shows = await (this.repository as Shows).list()
            return this.categorize(shows)
        })()
    }

    display(show: Show) {
        this.emit('dashboard:display', show)
    }

    search(query: string) {
        return (this.repository as Shows).search(query)
    }
}