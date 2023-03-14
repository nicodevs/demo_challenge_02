import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from '../src/components/HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders an H1 tag with the contents of the msg prop', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Foo Bar Baz' } })
    expect(wrapper.find('h1').text()).toBe('Foo Bar Baz')
  })
})
