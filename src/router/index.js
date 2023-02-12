import { createRouter, createWebHistory } from "vue-router";
import TaskList from "../views/TaskList.vue";
import TaskDetail from "../views/TaskDetail.vue";
import SignUp from "../views/SignUp.vue";
import Login from "../views/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Task List",
      component: TaskList,
    },
    {
      path: "/:id",
      name: "Task Detail",
      component: TaskDetail,
    },
    {
      path: "/sign-up",
      name: "Sign Up",
      component: SignUp,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
  ],
});

export default router;
