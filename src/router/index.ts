import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

import TopStories from '../views/TopStories.vue';
import Astrology from '../views/Astrology.vue';
import Favourites from '../views/Favourites.vue';

Vue.use(VueRouter);

class RouteMeta {
  title: string;

  constructor({title}: { title: string }) {
    this.title = title;
  }
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'top-stories',
      component: TopStories,
      meta: new RouteMeta({ title: 'Top Stories' })
    },
    {
      path: '/astrology',
      name: 'astrology',
      component: Astrology,
      meta: new RouteMeta({ title: 'Astrology' })
    },
    {
      path: '/my-favorites',
      name: 'my-favorites',
      component: Favourites,
      meta: new RouteMeta({ title: 'Favourites' })
    }
  ]
});

// This callback runs before every route change, including on initial load
router.beforeEach((to, from, next) => {

  const routeMeta = to.meta as RouteMeta;
  store.dispatch('topToolbar/changeTitle', routeMeta.title);
  next();
});

export default router;
