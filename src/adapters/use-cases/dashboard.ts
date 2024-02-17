import UseCase, { type Featured } from '@/application/dashboard'
import Shows from '@/domain/show/repository'
import tvMazeAdapter from '@/src/adapters/tv-maze'
import mitt from 'mitt'

export default class Dashboard extends UseCase {
    constructor(featured: Featured) {
        super(featured, new Shows(tvMazeAdapter), mitt())
    }
}