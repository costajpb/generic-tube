import { flushPromises, mount } from "@vue/test-utils"
import MyDashboardSearch from "../MyDashboardSearch.vue"

describe('components/my-dashboard-search', () => {
    it('should not search if query is shorter than 3 characters', async () => {
        const wrapper = mount(MyDashboardSearch, {
            props: {
                action: () => Promise.resolve([])
            }
        })

        const input = wrapper.find('input[type=search]');
        const query = 'qu';
        (input.element as HTMLInputElement).value = query
        input.trigger('input')

        await flushPromises()

        expect((wrapper.vm as any).result).toBe(undefined)
    })
})