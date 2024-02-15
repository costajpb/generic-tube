export default class Emitter {
    private element?: HTMLElement

    constructor(element?: HTMLElement) {
        this.element = element
    }

    emit(event: string, data?: object) {
        // XXX: should this be replaced with Vue emit?
        this.element?.dispatchEvent(
            new CustomEvent(event, {
                bubbles: true,
                detail: data
            })
        )
    }

    on(event: string, handler: (data: object) => void) {
        this.element?.addEventListener(event, handler)
    }
}