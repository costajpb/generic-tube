import Entity from './entity'

export default interface Repository<T extends Entity> {
    adapt(data: unknown): T | T[]
    readonly baseUrl: string
    list?: () => Promise<T[]>
    find?: (id: T['id']) => Promise<T>
}