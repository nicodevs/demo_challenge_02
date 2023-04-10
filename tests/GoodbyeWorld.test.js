import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import GoodbyeWorld from '../src/components/GoodbyeWorld.vue'

describe('GoodbyeWorld', () => {
  it('renders an H2 tag with the contents of the msg prop', () => {
    const wrapper = mount(GoodbyeWorld, { props: { msg: 'Foo Bar Baz' } })
    expect(wrapper.find('h2').text()).toBe('Foo Bar Baz')
  })
})
