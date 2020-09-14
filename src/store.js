import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const items = [
  { id: 0, name: 'Item A' },
  { id: 1, name: 'Item B' },
  { id: 2, name: 'Item C' },
  { id: 3, name: 'Item D' },
  { id: 4, name: 'Item E' },
  { id: 5, name: 'Item F' },
];

export default new Vuex.Store({
  state: { items },
});
