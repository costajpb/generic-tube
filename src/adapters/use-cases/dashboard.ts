import UseCase from '@/application/dashboard'
import Shows from '@/domain/show/repository'

import tvMazeAdapter from '../tv-maze'
import mitt from 'mitt'

export default class Dashboard extends UseCase {
    constructor() {
        super(new Shows(tvMazeAdapter), mitt())
    }
}