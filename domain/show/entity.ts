import type Entity from "@/domain/shared/entity";
import type Episode from '@/domain/episode/entity';

export default interface Show extends Entity {
    title: string
    genres: string[]
    coverImage?: string
    summary: string
    episodes?: Episode[]
    type: string
    language: string
}

export type ShowWithEpisodes = Required<Pick<Show, 'episodes'>> & Show