import { mount } from '@vue/test-utils'
import clickOutside from '../directives/clickOutside'

export default function snapshowWrapper(component: any, global = {}, props = {}) {
  return mount(component, {
    props: {
      ...props
    },
    global: {
      directives: {
        'click-outside': clickOutside
      },
      ...global
    }
  }).element
}
