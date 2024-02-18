import { flushPromises, mount } from "@vue/test-utils"
import DashboardView from '@/infra/views/DashboardView.vue'
import router from "@/infra/router"
import Dashboard from "@/application/dashboard"
import clickOutside from "@/infra/directives/click-outside"
import snapshowWrapper from "@/infra/__tests__/snapshotWrapper"

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
        expect(snapshowWrapper(DashboardView)).toMatchSnapshot()
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