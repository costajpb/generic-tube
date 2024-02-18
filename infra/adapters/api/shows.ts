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
    _embedded?: {
        episodes: episode[]
    },
    type: string
    language: string
}

export default function isShowResource(data: unknown): data is show {
    return !!data && typeof data === 'object'
        && 'id' in data
        && 'name' in data
        && 'image' in data && (data.image === null || (typeof data.image === 'object' && 'original' in data.image))
        && 'genres' in data && Array.isArray(data.genres)
        && 'summary' in data
        && (!('_embedded' in data) || (!!data._embedded && typeof data._embedded === 'object' && 'episodes' in data._embedded && isEpisodesResource(data._embedded.episodes)))
        && 'type' in data
        && 'language' in data
}