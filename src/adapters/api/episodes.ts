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
        return 'id' in episode
        && 'name' in episode
        && 'image' in episode && (episode.image === null || (typeof episode.image === 'object' && 'original' in episode.image))
        && 'summary' in episode
    })
}