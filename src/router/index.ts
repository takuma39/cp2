import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home/HomeView.vue";
import NewsView from "../views/News/NewsView.vue";
import ServiceView from "../views/Service/ServiceView.vue";
import WorkView from "../views/Work/WorkView.vue";
import CompanyView from "../views/Company/CompanyView.vue";
import RecruitView from "../views/Recruit/RecruitView.vue";
import ContactView from "../views/Contact/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/news",
      name: "news",
      component: NewsView,
    },
    {
      path: "/service",
      name: "service",
      component: ServiceView,
    },
    {
      path: "/work",
      name: "work",
      component: WorkView,
    },
    {
      path: "/company",
      name: "company",
      component: CompanyView,
    },
    {
      path: "/recruit",
      name: "recruit",
      component: RecruitView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
  ],
});

export default router;
