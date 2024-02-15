import type { episode } from "./episodes"
import isEpisodesResource from "./episodes"

export type show = {
    id: number
    name: string
    image: null | {
        original: string
    }
    genres: string[]
    summary: string
    episodes?: episode[]
    type: string
    language: string
    officialSite: string
}

export default function isShowResource(data: unknown): data is show {
    return !!data && typeof data === 'object'
        && 'id' in data
        && 'name' in data
        && 'image' in data && (data.image === null || (typeof data.image === 'object' && 'original' in data.image))
        && 'genres' in data && Array.isArray(data.genres)
        && 'summary' in data
        && (!('episodes' in data) || isEpisodesResource(data.episodes))
        && 'type' in data
        && 'language' in data
        && 'officialSite' in data
}