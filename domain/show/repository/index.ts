import Show from "../entity";
import Repository from '../../shared/repository'

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
}