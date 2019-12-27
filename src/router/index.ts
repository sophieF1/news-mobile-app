import Vue from 'vue';
import VueRouter from 'vue-router';

import TopStories from '../views/TopStories.vue';
import Astrology from '../views/Astrology.vue';
import Favourites from '../views/Favourites.vue';


Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'top-stories',
      component: TopStories
    },
    {
      path: '/astrology',
      name: 'astrology',
      component: Astrology
    },
    {
      path: '/my-favourites',
      name: 'favourites',
      component: Favourites
    }
  ]
});
