import Vue from 'vue';
import Vuex from 'vuex';
import items from './modules/items';
import token from './modules/token';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { items, token },
});
