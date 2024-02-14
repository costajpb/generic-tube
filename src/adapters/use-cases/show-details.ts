import UseCase from '@/application/show-details'
import type Show from "@/domain/show/entity";
import Shows from "@/domain/show/repository";
import showAdapter from "../show-adapter";
import Emitter from "@/src/util/emitter";

export default class ShowDetails extends UseCase {
    constructor(id: Show['id'], container: HTMLElement) {
        super(id, new Shows(showAdapter), new Emitter(container))
    }
}