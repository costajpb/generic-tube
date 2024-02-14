import UseCase, { type Emitter } from "@/application/shared/use-case";
import type Show from "@/domain/show/entity";
import type Shows from "@/domain/show/repository";
import EventEmitter from "events";

export default class ShowDetails extends UseCase<Show> {
    private id: Show['id']

    constructor(id: Show['id'], repository: Shows, emitter: Emitter = new EventEmitter()) {
        super(repository, emitter)
        this.id = id
    }

    get details(): Promise<Show> {
        return (this.repository as Shows).find(this.id)
    }
}