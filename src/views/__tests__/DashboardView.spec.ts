import { flushPromises, mount } from "@vue/test-utils"
import DashboardView from '@/src/views/DashboardView.vue'
import router from "@/src/router"
import Dashboard from "@/application/dashboard"
import clickOutside from "@/src/directives/click-outside"

function mountWithDirective(component: any) {
    return mount(component, {
        global: {
            directives: {
                'click-outside': clickOutside
            }
        }
    })
}

describe('DashboardView', () => {
    it('should render properly', () => {
        const wrapper = mountWithDirective(DashboardView)
        expect(wrapper.element).toMatchSnapshot()
    })

    it('should display a show upon request', async () => {
        vi.spyOn(Dashboard.prototype, 'categories', 'get').mockResolvedValue({})
        const push = vi.spyOn(router, 'push')
        const wrapper = mountWithDirective(DashboardView)
        const show = {id: 1}

        await flushPromises();

        (wrapper.vm as any).useCase.emit('dashboard:display', show)

        expect(push).toHaveBeenCalledWith(`/shows/${show.id}`)
    })
})