import { describe, it, expect, vi, afterEach } from "vitest";
import { mount } from '@vue/test-utils';
import { useCurrentUser, useCollection, useDocument } from "vuefire";
import { getTaskSource, getTasksQuery } from "../../utils/firebase/db.utils";
import { useRoute } from "vue-router";
import BaseCard from "../../components/UI/BaseCard.vue";
import DashboardPage from "../DashboardPage.vue";

function factory() {
  return mount(DashboardPage, {
    global: {
      stubs: [
        'task-list-card', 
        'create-new-task', 
        'task-detail-card'
      ],
      components: {
        BaseCard
      }
    }
  });
}

vi.mock('vuefire', () => ({
  useCurrentUser: vi.fn(),
  useCollection: vi.fn(),
  useDocument: vi.fn()
}))

vi.mock('vue-router', () => ({
  useRoute: vi.fn()
}))

vi.mock('../../utils/firebase/db.utils', () => ({
  getTaskSource: vi.fn().mockReturnValue({
    type: "document"
  }),
  getTasksQuery: vi.fn()
}))

describe('DashboardPage.vue', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })
  
  it('Renders two base-cards and calls useDocument and useCollection', () => {
    useCurrentUser.mockImplementationOnce(() => ({
      value: {
        uid: "i1rBRTxhj4bZjHmByo3kQCwkivE2"
      }
    }))
    useRoute.mockImplementationOnce(() => ({
      params: {
        id: 1
      }
    }))

    const wrapper = factory();
    expect(wrapper.get('#task-detail-card')).toBeDefined();
    expect(wrapper.get('#task-list-card')).toBeDefined();
    expect(useCollection).toHaveBeenCalledTimes(1);
    expect(useDocument).toHaveBeenCalledTimes(1);
  })

  it('Renders select a task div if no route.params.id', () => {
    useCurrentUser.mockImplementationOnce(() => ({
      value: {
        uid: "i1rBRTxhj4bZjHmByo3kQCwkivE2"
      }
    }))
    useRoute.mockImplementationOnce(() => ({
      params: {}
    }))

    const wrapper = factory();
    expect(wrapper.html()).toContain("Select a task");
  })
})