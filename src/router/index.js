import { createRouter, createWebHistory } from 'vue-router';
import About from '../views/About.vue';
import EventList from '../views/EventList.vue';
import EventDetails from '../views/EventDetails.vue';

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    props: true,
    component: EventDetails,
  },
  {
    path: '/about',
    name: 'About',
    // lazy-loaded: component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
