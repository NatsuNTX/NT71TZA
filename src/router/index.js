import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    /* Only allow when user is authenticated */
    meta: {needLogin: true}
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/Login'),
    /* You can go to this route, don't worry if you are not authenticated */
    meta: {needLogin: false}
  },
  {
    path: '/callback',
    name: 'Callback',
    component: () => import(/* webpackChunkName: "callback" */ '@/views/Callback'),
    meta: {needLogin: false}
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import(/* webpackChunkName: "useraccount" */ '@/views/Accounts'),
    meta: {needLogin: true}
  }
]

const router = createRouter({
  history: process.env.IS_ELECTRON ? createWebHashHistory() : createWebHistory(),
  /*
  history: createWebHistory(process.env.BASE_URL),
   */
  routes
})
/* Guardian */
router.beforeResolve((to) => {
  /* Check if the route need the user to authenticated before the user can go to that route
  * if authenticated than let it pass otherwise redirect to login route */
  if (to.meta.needLogin && !store.getters['authentication/itsLogin']) {
    return {path: '/login'}
  }
})

export default router
