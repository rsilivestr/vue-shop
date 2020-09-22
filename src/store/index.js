import Vue from 'vue';
import Vuex from 'vuex';
import items from './modules/items';
// import token from './modules/token';
import account from './modules/account';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: { items, account },
});
