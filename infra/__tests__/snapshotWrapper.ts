import { mount } from "@vue/test-utils";
import clickOutside from "../directives/click-outside";

export default function snapshowWrapper(component: any, global = {}, props = {}, provide = {}) {
    return mount(component, {
        props: {
            ...props
        },
        global: {
            directives: {
                'click-outside': clickOutside
            },
            ...global,
        },
        provide: {
            ...provide
        }
    }).element
}