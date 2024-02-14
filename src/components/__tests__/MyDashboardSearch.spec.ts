import { DOMWrapper, flushPromises, mount } from "@vue/test-utils"
import MyDashboardSearch from "../MyDashboardSearch.vue"

describe('components/my-dashboard-search', () => {
    let wrapper: ReturnType<typeof mount>
    let input: DOMWrapper<Element>

    beforeEach(() => {
        wrapper = mount(MyDashboardSearch, {
            props: {
                action: () => Promise.resolve([])
            }
        })

        input = wrapper.find('input[type=search]');
    })
    
    it('should not search if query is shorter than 3 characters', async () => {
        const query = 'qu';
        (input.element as HTMLInputElement).value = query
        input.trigger('input')

        await flushPromises()

        expect((wrapper.vm as any).result).toBe(undefined)
    })

    it('should clean the results if query is blank', () => {
        (wrapper.vm as any).result = [
            {
                id: '1',
                title: 'Dummy show'
            }
        ];
        (input.element as HTMLInputElement).value = ''
        input.trigger('input')

        expect((wrapper.vm as any).result).toBe(undefined)
    })
})