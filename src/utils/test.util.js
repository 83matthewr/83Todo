import { render } from '@testing-library/vue';
import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from "../views/DashboardPage.vue";
import AuthPage from "../views/AuthPage.vue";
import Landing from "../views/LandingPage.vue";
import BaseButton from "../components/UI/BaseButton.vue";
import BaseInput from "../components/UI/BaseInput.vue";
import BaseCard from "../components/UI/BaseCard.vue";

export async function renderApp(component, options) {
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: "/",
        name: "LandingPage",
        component: Landing,
      },
      {
        path: "/sign-up",
        name: "SignUp",
        component: AuthPage,
      },
      {
        path: "/login",
        name: "Login",
        component: AuthPage,
      },
      {
        path: "/dashboard/:id?",
        name: "Dashboard",
        component: Dashboard,
        meta: {
          auth: true,
        }
      },
      { 
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: Landing 
      },
    ],
  });

  const renderResult = render(component, {
    global: {
      plugins: [router],
      components: {
        BaseButton,
        BaseCard,
        BaseInput
      }
    },
    ...options,
  });

  // Unlike the router in `hash` mode, the initial routing stack is empty. So,
  // you need to push an initial route to the stack.
  router.push('/');

  return renderResult;
}

export async function mountApp(component, options) {
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: "/",
        name: "LandingPage",
        component: Landing,
      },
      {
        path: "/sign-up",
        name: "SignUp",
        component: AuthPage,
      },
      {
        path: "/login",
        name: "Login",
        component: AuthPage,
      },
      {
        path: "/dashboard/:id?",
        name: "Dashboard",
        component: Dashboard,
        meta: {
          auth: true,
        }
      },
      { 
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: Landing 
      },
    ],
  });

  const renderResult = mount(component, {
    global: {
      plugins: [router],
      components: {
        BaseButton,
        BaseCard,
        BaseInput
      }
    },
    ...options,
  });

  // Unlike the router in `hash` mode, the initial routing stack is empty. So,
  // you need to push an initial route to the stack.
  router.push('/');

  return renderResult;
}