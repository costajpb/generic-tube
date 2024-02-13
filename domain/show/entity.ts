import Entity from "../shared/entity";

export default interface Show extends Entity {
    title: string
    genres: string[]
    coverImage: string
} 