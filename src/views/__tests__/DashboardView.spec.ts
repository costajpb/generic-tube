import { mount } from "@vue/test-utils"
import DashboardView from '../DashboardView.vue'
import categories from '../../../application/dashboard/__fixtures__/categories.json'
import type Show from "domain/show/entity"

describe('DashboardView', () => {
    // it('should call the use case display method when a show is clicked', () => {
    //     const wrapper = mount()
    // })

    it('should render properly', () => {
        const wrapper = mount(DashboardView)
        expect(wrapper.element).toMatchSnapshot()
    })

    it('should display show upon request', () => {
        const wrapper = mount(DashboardView)
        const detail = {id: 1} as Show
        wrapper.element.dispatchEvent(new CustomEvent('dashboard:display', {
            detail
        }))
    })
})