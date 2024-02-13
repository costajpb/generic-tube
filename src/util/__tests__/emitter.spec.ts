import Emitter from '../emitter'

describe('pages/shared/emitter', () => {
    test('emit', () => {
        const element = {
            dispatchEvent: vi.fn()
        }
        const name = 'dummy'
        const detail = {
            foo: 'bar'
        }
        const emitter = new Emitter(element as any)

        emitter.emit(name)

        expect(element.dispatchEvent).toHaveBeenCalledTimes(1)
        expect(element.dispatchEvent).toHaveBeenCalledWith(
            new CustomEvent(name, {
                bubbles: true,
                detail
            })
        )
    })

    test('on', () => {
        const element = {
            addEventListener: vi.fn()
        }
        const name = 'dummy'
        const handler = vi.fn()

        const emitter = new Emitter(element as any)

        emitter.on(name, handler)

        expect(element.addEventListener).toHaveBeenCalledTimes(1)
        expect(element.addEventListener).toHaveBeenCalledWith(name, handler)
    })
})
