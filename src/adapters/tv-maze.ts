import type Show from "@/domain/show/entity";
import isShowResource from "./api/shows";
import isSearchResource from "./api/search";

function adaptArray(data: unknown[]) {
    return data.map(adaptSingleResource)
}

export class InvalidResourceError extends Error {
    readonly resource: unknown

    constructor(message: string, resource: unknown) {
        super(message)
        this.resource = resource
        this.name = 'InvalidResourceError'
    }
}

function adaptSingleResource(data: unknown): Show {
    let resource
    if (isShowResource(data)) {
        resource = data
    } else if (isSearchResource(data)) {
        resource = data.show
    } else {
        throw new InvalidResourceError('Invalid resource', data)
    }

    return {
        id: parseInt(`${resource.id}`),
        title: `${resource.name}`,
        coverImage: resource.image?.original,
        genres: resource.genres,
        summary: resource.summary,
        type: resource.type,
        language: resource.language,
        website: resource.officialSite,
        episodes: resource._embedded?.episodes.map(episode => ({
            id: parseInt(`${episode.id}`),
            title: episode.name,
            summary: episode.summary,
            coverImage: episode.image?.original,
            duration: episode.runtime
        }))
    }
}

export default function tvMazeAdapter(data: unknown): Show | Show[] {
    if (Array.isArray(data)) {
        return adaptArray(data)
    }
    return adaptSingleResource(data)
}