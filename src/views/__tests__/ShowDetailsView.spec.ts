import ShowDetails from "@/application/show-details"
import router from "@/src/router"
import { flushPromises, mount } from "@vue/test-utils"
import ShowDetailsView from "../ShowDetailsView.vue"

describe('ShowDetailsView', () => {
    it('should return to dashboard upon request', async () => {
        const push = vi.spyOn(router, 'push')
        const wrapper = mount(ShowDetailsView)

        await flushPromises()
        
        wrapper.trigger('showDetails:return')

        expect(push).toHaveBeenCalledWith('/')
    })
})