import UseCase from '@/application/show-details'
import type Show from "@/domain/show/entity";
import Shows from "@/domain/show/repository";
import Emitter from "@/src/util/emitter";
import tvMazeAdapter from '../tv-maze';

export default class ShowDetails extends UseCase {
    constructor(id: Show['id'], container: HTMLElement) {
        super(id, new Shows(tvMazeAdapter), new Emitter(container))
    }
}