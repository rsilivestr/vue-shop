import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(Router);

const routes = [
  { path: '/', name: Home, component: Home },
  { path: '/about', name: 'About', component: () => import('../views/About.vue') },
  { path: '/login', name: 'Login', component: () => import('../views/Login.vue') },
  { path: '/profile', name: 'Profile', component: () => import('../views/Profile.vue') },

  // Redirect random paths to Home
  { path: '*', redirect: '/' },
];

export const router = new Router({ mode: 'history', routes });
