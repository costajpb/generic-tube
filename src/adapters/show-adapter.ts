import type Show from '../../domain/show/entity'

type show = {
    id: string
    name: string
    image: null | {
        original: string
    }
    genres: string[]
}

type search = {
    score: number
    show: show
}

function isSearchResource(data: unknown): data is search {
    return !!data && typeof data === 'object'
        && 'score' in data
        && 'show' in data && isShowResource(data.show)
}

function isShowResource(data: unknown): data is show {
    return !!data && typeof data === 'object'
        && 'id' in data
        && 'name' in data
        && 'image' in data && (data.image === null || (typeof data.image === 'object' && 'original' in data.image))
        && 'genres' in data && Array.isArray(data.genres)
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
        genres: resource.genres
    }
}

function adaptArray(data: unknown[]) {
    return data.map(adaptSingleResource)
}

export default function showAdapter(data: unknown): Show | Show[] {
    if (Array.isArray(data)) {
        return adaptArray(data)
    }
    return adaptSingleResource(data)
}