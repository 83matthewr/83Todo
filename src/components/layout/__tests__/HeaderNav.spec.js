import { describe, it, expect, vi, afterEach, beforeAll, afterAll } from "vitest"
import { mount, config } from "@vue/test-utils"
import HeaderNav from "../HeaderNav.vue"
import BaseButton from "../../UI/BaseButton.vue"
import { useCurrentUser } from "vuefire"
import { useRouter } from "vue-router";
import { signOutUser } from "../../../utils/firebase/auth.utils";

function factory() {
  return mount(HeaderNav, {
    global: {
      stubs: ['router-link'],
      components: {
        BaseButton
      }
    }
  })
}

vi.mock('vuefire', () => ({
  useCurrentUser: vi.fn()
}))

const push = vi.fn();
vi.mock('vue-router', () => ({
  useRouter: vi.fn(() => ({
    push
  }))
}))

vi.mock('../../../utils/firebase/auth.utils', () => ({
  signOutUser: vi.fn()
}))

describe('HeaderNav.vue', () => {
  beforeAll(() => {
    config.global.renderStubDefaultSlot = true
  })
  
  afterAll(() => {
    config.global.renderStubDefaultSlot = false
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('Shows app title', () => {
    useCurrentUser.mockImplementationOnce(() => ({
      value: null
    }))

    const wrapper = factory()
    expect(wrapper.html()).toContain('83Todo')
  })

  it('Shows signup and login buttons if unauthenticated', () => {
    useCurrentUser.mockImplementationOnce(() => ({
      value: null
    }))

    const wrapper = factory()
    expect(wrapper.html()).toContain('Sign Up');
    expect(wrapper.html()).toContain('Log In');
    expect(wrapper.get('#logo').attributes().to).toBe('/');
  })

  it('Show signout button and username if authenticated', () => {
    useCurrentUser.mockImplementationOnce(() => ({
      value: {
        email: "83matthewr@gmail.com",
        uid: "i1rBRTxhj4bZjHmByo3kQCwkivE2"
      }
    }))

    const wrapper = factory()
    expect(wrapper.html()).toContain('83matthewr');
    expect(wrapper.html()).toContain('Sign Out');
    expect(wrapper.get('#logo').attributes().to).toBe('/dashboard');
  })

  it('Calls signOutUser and router.push after clicking sign out', async () => {
    useCurrentUser.mockImplementationOnce(() => ({
      value: {
        email: "83matthewr@gmail.com",
        uid: "i1rBRTxhj4bZjHmByo3kQCwkivE2"
      }
    }))

    const wrapper = factory();
    
    wrapper.find('#signout').trigger('click');
    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenCalledWith('/');
    expect(signOutUser).toHaveBeenCalledTimes(1);
  });
})