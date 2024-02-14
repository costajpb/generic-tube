import { flushPromises, mount } from "@vue/test-utils"
import DashboardView from '../DashboardView.vue'
import router from "@/src/router"
import Dashboard from "@/application/dashboard"

describe('DashboardView', () => {
    it('should render properly', () => {
        const wrapper = mount(DashboardView)
        expect(wrapper.element).toMatchSnapshot()
    })

    it('should display a show upon request', async () => {
        vi.spyOn(Dashboard.prototype, 'categories', 'get').mockResolvedValue({})
        const push = vi.spyOn(router, 'push')
        const wrapper = mount(DashboardView)
        const detail = {id: 1}

        await flushPromises()

        wrapper.trigger('dashboard:display', {
            detail
        })

        expect(push).toHaveBeenCalledWith(`/shows/${detail.id}`)
    })

    it('should allow searching shows with debounce', async () => {
        vi.useFakeTimers()
        const search = vi.spyOn(Dashboard.prototype, 'search').mockImplementation(() => [])
        const wrapper = mount(DashboardView)

        await flushPromises()
        
        const input = wrapper.find('[type=search]');

        const query = 'query';

        (input.element as HTMLInputElement).value = query
        
        input.trigger('input')

        vi.runAllTimers()

        expect(search).toHaveBeenCalledWith(query)

        vi.useRealTimers()
    })
})