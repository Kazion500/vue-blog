import * as VueRouter from "vue-router";

const routes = [
  { path: "/", name: "home", component: () => import("@/views/Home.vue") },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes, // short for `routes: routes
  strict: true,
});

export default router;
