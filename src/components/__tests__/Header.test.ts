import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Header from '../navigation/Header/Header.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(Header)
    expect(wrapper.text()).toContain('KerboJS')
  })
})
