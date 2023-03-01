import { describe, it, expect, vi, afterEach, beforeAll, afterAll } from "vitest"
import { mount, config, flushPromises } from "@vue/test-utils"
import { useRoute, useRouter } from "vue-router"
import { logInUser, signUpUser } from "../../utils/firebase/auth.utils.js"

import AuthPage from "../AuthPage.vue"
import BaseButton from "../../components/UI/BaseButton.vue"
import BaseCard from "../../components/UI/BaseCard.vue"
import BaseInput from "../../components/UI/BaseInput.vue"

function factory() {
  return mount(AuthPage, {
    global: {
      stubs: ['router-link'],
      components: {
        BaseButton,
        BaseCard,
        BaseInput
      }
    }
  })
}

const push = vi.fn()
vi.mock('vue-router', () => ({
  useRoute: vi.fn(),
  useRouter: vi.fn(() => ({
    push
  }))
}))

vi.mock('../../utils/firebase/auth.utils.js', () => ({
  signUpUser: vi.fn(),
  logInUser: vi.fn()
}));

describe('AuthPage.vue', () => {
  beforeAll(() => {
    config.global.renderStubDefaultSlot = true
  })
  
  afterAll(() => {
    config.global.renderStubDefaultSlot = false
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('Shows Login title and signup link on /login', () => {
    useRoute.mockImplementationOnce(() => ({
      path: '/login'
    }))

    const wrapper = factory()
    expect(wrapper.html()).toContain('Log In')
    expect(wrapper.html()).toContain('Dont have an account? Sign Up')
    expect(wrapper.find('#subtitle').attributes().to).toBe('/sign-up')
  })

  it('Shows Sign Up title and login link on /sign-up', () => {
    useRoute.mockImplementationOnce(() => ({
      path: '/sign-up'
    }))

    const wrapper = factory()
    expect(wrapper.html()).toContain('Sign Up')
    expect(wrapper.html()).toContain('Already have an account? Log In')
    expect(wrapper.find('#subtitle').attributes().to).toBe('/login')
  })

  it('Shows two form inputs and submit and go back buttons', () => {
    useRoute.mockImplementationOnce(() => ({
      path: '/sign-up'
    }))

    const wrapper = factory()
    expect(wrapper.html()).toContain('Email')
    expect(wrapper.html()).toContain('Password')
    expect(wrapper.html()).toContain('Submit')
    expect(wrapper.html()).toContain('Go Back')
  })

  it('Calls logInUser and router.push with valid submission', async () => {
    useRoute.mockImplementationOnce(() => ({
      path: '/login'
    }))

    const wrapper = factory()
    const form = wrapper.find('form')

    await wrapper.find('#email').setValue('email@email.com')
    await wrapper.find('#password').setValue('password')
    await form.trigger('submit.prevent')

    await flushPromises()

    expect(push).toHaveBeenCalledTimes(1)
    expect(logInUser).toHaveBeenCalledTimes(1)
  })

  it('Calls signUpUser and router.push with valid submission', async () => {
    useRoute.mockImplementationOnce(() => ({
      path: '/sign-up'
    }))

    const wrapper = factory()
    const form = wrapper.find('form')

    await wrapper.find('#email').setValue('email@email.com')
    await wrapper.find('#password').setValue('password')
    await form.trigger('submit.prevent')

    await flushPromises()

    expect(push).toHaveBeenCalledTimes(1)
    expect(signUpUser).toHaveBeenCalledTimes(1)
  })

  it('Shows frontend validation messages and does not call signUp/logIn methods on invalid submission', async () => {
    useRoute.mockImplementationOnce(() => ({
      path: '/sign-up'
    }))

    const wrapper = factory()
    const form = wrapper.find('form')

    // Submit with no input
    await form.trigger('submit.prevent')
    await flushPromises()
    expect(signUpUser).not.toHaveBeenCalled()
    expect(wrapper.html()).toContain('Please enter a valid email')

    // Submit with invalid email
    await wrapper.find('#email').setValue('emailemail.com')
    await form.trigger('submit.prevent')
    await flushPromises()
    expect(signUpUser).not.toHaveBeenCalled()
    expect(wrapper.html()).toContain('Please enter a valid email')

    // Submit with no password
    await wrapper.find('#email').setValue('email@email.com')
    await form.trigger('submit.prevent')
    await flushPromises()
    expect(signUpUser).not.toHaveBeenCalled()
    expect(wrapper.html()).toContain('Please enter a password')
  })
})