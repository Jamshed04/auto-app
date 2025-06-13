import { createRouter, createWebHistory } from "vue-router";
import ClientsPage from "@/pages/ClientsPage.vue";
import SchedulePage from '@/pages/SchedulePage.vue'
import PricePage from "@/pages/PricePage.vue";
import StaffPage from "@/pages/StaffPage.vue";

const routes = [
  { path: '/', component: SchedulePage },
  { path: "/price", component: PricePage },
  { path: "/clients", component: ClientsPage },
  { path: "/staff", component: StaffPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;