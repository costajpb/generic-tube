import UseCase from '@/application/show-details'
import type Show from "@/domain/show/entity";
import Shows from "@/domain/show/repository";
import tvMazeAdapter from '../tv-maze';
import mitt from 'mitt';

export default class ShowDetails extends UseCase {
    constructor(id: Show['id']) {
        super(id, new Shows(tvMazeAdapter), mitt())
    }
}