import UseCase from '@/application/dashboard'
import Shows from '@/domain/show/repository'
import showAdapter from '../show-adapter'
import Emitter from '@/src/util/emitter'

export default class Dashboard extends UseCase {
    constructor(container: HTMLElement) {
        super(new Shows(showAdapter), new Emitter(container))
    }
}