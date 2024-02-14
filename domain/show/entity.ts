import type Entity from "@/domain/shared/entity";

export default interface Show extends Entity {
    title: string
    genres: string[]
    coverImage?: string
} 