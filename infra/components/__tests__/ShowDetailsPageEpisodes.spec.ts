import { mount } from "@vue/test-utils"
import ShowDetailsPageEpisodes from "../ShowDetailsPageEpisodes.vue"
import clickOutside from "@/infra/directives/click-outside"

describe('infra/components/show-details-page-episodes', () => {
    it('should render', () => {
        expect(mount(ShowDetailsPageEpisodes, {
            props: {
                episodes: [{
                    title: 'Episode title',
                    coverImage: 'image',
                    duration: 56,
                    summary: 'Episode summary',
                    id: 1
                }]
            },
            global: {
                directives: {
                    'click-outside': clickOutside
                }
            }
        }).element).toMatchSnapshot()
    })
})