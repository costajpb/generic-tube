export type episode = {
    id: string
    name: string
    image: null | {
        original: string
    }
    summary: string
}

export default function isEpisodesResource(data: unknown): data is episode[] {
    if (!Array.isArray(data)) throw new Error('Episodes is not an array!')
    return data.every(episode => {
        return 'name' in episode
        && 'image' in data && (data.image === null || (typeof data.image === 'object' && 'original' in data.image))
        && 'summary' in data
    })
}