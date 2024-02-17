import type Show from "@/domain/show/entity";
import Shows from "@/domain/show/repository";
import UseCase, { type Emitter } from "@/application/shared/use-case";

export type Categories = Record<string, Show[]>
export type Featured = (keyof Categories)[]

export default class Dashboard extends UseCase {
    readonly featured: Featured

    constructor(featured: Featured, repository: Shows, emitter: Emitter) {
        super(repository, emitter)
        this.featured = featured
    }

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

        return Object.keys(categories)
            .filter(key => this.featured.includes(key))
            .reduce((obj, key) => {
                return {
                    ...obj,
                    [key]: categories[key]
                };
            }, {});
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
}