import type Shows from '@/domain/show/repository'

export interface Emitter {
  emit: (event: string, data: any) => void
  on: (event: string, handler: (data: any) => void) => void
}

export default abstract class UseCase implements Emitter {
  readonly repository: Shows
  protected emitter: Emitter

  constructor(repository: Shows, emitter: Emitter) {
    this.repository = repository
    this.emitter = emitter
  }

  emit<T = unknown>(event: string, data?: T) {
    this.emitter.emit(event, data)
  }

  on<T = unknown>(event: string, handler: (data: T) => void) {
    this.emitter.on(event, handler)
  }

  search(query: string) {
    return this.repository.search(query)
  }
}
