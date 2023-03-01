import { describe, it, expect } from "vitest"
import { mount } from "@vue/test-utils"
import LandingPage from "../LandingPage.vue"

describe('LandingPage.vue', () => {
  it('Shows welcome message and login/signup links', () => {
    const wrapper = mount(LandingPage, {
      global: {
        stubs: ['router-link']
      }
    })

    expect(wrapper.html()).toContain('Welcome!')
    expect(wrapper.find('#signup').attributes().to).toBe('/sign-up')
    expect(wrapper.find('#login').attributes().to).toBe('/login')
  })
})