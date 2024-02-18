import { mount } from "@vue/test-utils";
import clickOutside from "../directives/click-outside";

export default function snapshowWrapper(component: any, global = {}) {
    return mount(component, {
        global: {
            directives: {
                'click-outside': clickOutside
            },
            ...global,
        }
    }).element
}