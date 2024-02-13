import { flushPromises, mount } from "@vue/test-utils"
import DashboardView from '../DashboardView.vue'
import router from "@/src/router"
import Dashboard from "@/application/dashboard"

describe('DashboardView', () => {
    it('should render properly', () => {
        const wrapper = mount(DashboardView)
        expect(wrapper.element).toMatchSnapshot()
    })

    it('should display show upon request', async () => {
        vi.spyOn(Dashboard.prototype, 'categories', 'get').mockReturnValue([])      
        const push = vi.spyOn(router, 'push')
        const wrapper = mount(DashboardView)
        const detail = {id: 1}

        await flushPromises()

        wrapper.trigger('dashboard:display', {
            detail
        })

        expect(push).toHaveBeenCalledWith(`/shows/${detail.id}`)
    })
})