import { createRouter, createWebHistory } from "vue-router";
import { getCurrentUser } from "vuefire";

import Dashboard from "../views/DashboardPage.vue";
import SignUp from "../views/SignUpPage.vue";
import Login from "../views/LoginPage.vue";
import Landing from "../views/LandingPage.vue";

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
      component: SignUp,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/dashboard/:id?",
      name: "Dashboard",
      component: Dashboard,
      meta: {
        auth: true,
      }
    },
  ],
});

router.beforeEach(async (route) => {
  const user = await getCurrentUser();
  if (route.meta.auth && !user) {
    return '/login';
  }
})

export default router;
