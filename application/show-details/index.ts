import UseCase, { type Emitter } from "@/application/shared/use-case";
import type Show from "@/domain/show/entity";
import type Shows from "@/domain/show/repository";

export default class ShowDetails extends UseCase {
    private id: Show['id']

    constructor(id: Show['id'], repository: Shows, emitter: Emitter) {
        super(repository, emitter)
        this.id = id
    }

    get details(): Promise<Show> {
        return this.repository.find(this.id)
    }

    return() {
        this.emit('showDetails:return')
    }
}