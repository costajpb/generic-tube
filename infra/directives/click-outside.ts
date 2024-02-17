import type { Directive } from "vue";

let clickOutsideEvent: (event: MouseEvent) => void

export default <Directive<HTMLElement,() => void>>{
    beforeMount(el, callback) {
        clickOutsideEvent = (event) => {
            if (!(el === event.target || el.contains(event.target as HTMLElement))) {
                callback.value()
            }
        };
        document.addEventListener('click', clickOutsideEvent);
    },
    unmounted() {
        document.removeEventListener('click', clickOutsideEvent);
    },
};