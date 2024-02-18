import UseCase from '@/application/shared/use-case'
import tvMazeAdapter from '@/infra/adapters/tv-maze'
import Shows from '@/domain/show/repository'
import mitt from 'mitt'

export default class SearchShows extends UseCase {
  constructor() {
    super(new Shows(tvMazeAdapter), mitt())
  }
}
