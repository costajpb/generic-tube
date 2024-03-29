import type Show from '@/domain/show/entity'
import type { show } from '@/infra/adapters/api/shows'
import tvMazeAdapter from '@/infra/adapters/tv-maze'

describe('adapters/tv-maze', () => {
  const data: show = {
    id: 1,
    name: 'show name',
    genres: ['drama'],
    image: {
      original: 'image'
    },
    summary: 'summary',
    type: 'type',
    language: 'language'
  }

  it('should adapt a single show resource', () => {
    const actual = tvMazeAdapter(data)

    const expected: Show = {
      id: data.id,
      title: data.name,
      genres: data.genres,
      coverImage: data.image?.original,
      summary: data.summary,
      type: data.type,
      language: data.language
    }

    expect(actual).toEqual(expected)
  })

  it('should adapt a show resource with episodes', () => {
    const episode = {
      id: 1,
      name: 'Episode name',
      summary: 'Episode summary',
      image: {
        original: 'original-image'
      },
      runtime: 56
    }

    const actual = tvMazeAdapter({
      ...data,
      _embedded: {
        episodes: [episode]
      }
    }) as Show

    expect(actual.episodes).toEqual([
      {
        id: episode.id,
        title: episode.name,
        summary: episode.summary,
        coverImage: episode.image.original,
        duration: episode.runtime
      }
    ])
  })

  it('should adapt an array of resources', () => {
    const actual = tvMazeAdapter([data])

    const expected: Show[] = [
      {
        id: data.id,
        title: data.name,
        genres: data.genres,
        coverImage: data.image?.original,
        summary: data.summary,
        type: data.type,
        language: data.language
      }
    ]

    expect(actual).toEqual(expected)
  })

  it('should handle the search resource', () => {
    const resource = {
      score: 0.543,
      show: {
        ...data
      }
    }

    const actual = tvMazeAdapter([resource])

    const expected = [
      {
        id: data.id,
        title: data.name,
        genres: data.genres,
        coverImage: data.image?.original,
        summary: data.summary,
        type: data.type,
        language: data.language
      }
    ]

    expect(actual).toEqual(expected)
  })
})
