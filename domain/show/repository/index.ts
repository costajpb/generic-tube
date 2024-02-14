import type Show from "../entity";
import type Repository from '../../shared/repository'

export default class Shows implements Repository<Show> {
    readonly baseUrl: string
    private adapter: (data: unknown) => Show | Show[]

    constructor(adapter: Shows['adapter']) {
        this.adapter = adapter
        this.baseUrl = 'https://api.tvmaze.com'
    }

    adapt(data: unknown): Show | Show[] {
        return this.adapter(data)
    }

    async list() {
        const response = await fetch(`${this.baseUrl}/shows`)
        return this.adapt(await response.json()) as Show[]
    }

    async search(query: string) {
        const response = await fetch(`${this.baseUrl}/search/shows?q=${query}`)
        return this.adapt(await response.json()) as Show[]
    }

    async find(id: Show['id']) {
        const response = await fetch(`${this.baseUrl}/shows/${id}`)
        return this.adapt(await response.json()) as Show
    }
}