import UseCase from '@/application/dashboard'
import Shows from '@/domain/show/repository'

import Emitter from '@/src/util/emitter'
import tvMazeAdapter from '../tv-maze'

export default class Dashboard extends UseCase {
    constructor(container: HTMLElement) {
        super(new Shows(tvMazeAdapter), new Emitter(container))
    }
}