import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginView.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("@/views/SignupView.vue"),
    },
    {
      path: "/movie",
      name: "movie",
    },
    {
      path: "/tv",
      name: "tv",
    },
    {
      path: "/artists",
      name: "artists",
    },
    {
      path: "/plus",
      name: "plus",
    },
  ],
});

export default router;
