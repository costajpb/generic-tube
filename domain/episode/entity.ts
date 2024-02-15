import type Entity from "@/domain/shared/entity";

export default interface Episode extends Entity {
    title: string
    coverImage?: string
    summary: string
    duration: number
}