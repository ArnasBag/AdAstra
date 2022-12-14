import { createRouter, createWebHistory } from "vue-router";

import WelcomeArea from '../components/WelcomeArea.vue'
import Trips from '../views/Trips.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: WelcomeArea
    },
    {
      path: '/trips',
      component: Trips
    }
  ],
});

export default router;
