import * as VueRouter from "vue-router";
import { LayoutsEnum } from "./types";
import MicroFrontEnd from "./components/MicroFrontEnd.vue";

export const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: [
    {
      path: "/",
      component: MicroFrontEnd,
      props: {
        id: "home",
        urlScript:
          "https://hk-mfe-assets.s3.sa-east-1.amazonaws.com/home/main.js",
        urlStyle:
          "https://hk-mfe-assets.s3.sa-east-1.amazonaws.com/home/style.css",
      },
      meta: {
        layout: LayoutsEnum.Default,
      },
    },
    {
      path: "/about",
      component: MicroFrontEnd,
      props: {
        id: "about",
        urlScript:
          "https://hk-mfe-assets.s3.sa-east-1.amazonaws.com/about/main.js",
      },
      meta: {
        layout: LayoutsEnum.Default,
      },
    },
    {
      path: "/signup",
      component: () => import("./pages/SignupPage.vue"),
      meta: {
        layout: LayoutsEnum.Default,
      },
    },
  ],
});

(window as any)["$router"] = router;
