import axios from 'axios';

const state = {
  items: [],
};

const getters = {
  allItems: (state) => state.items,
};

const actions = {
  async fetchItems({ commit }) {
    const res = await axios.get('http://localhost:3000/items');

    commit('setItems', res.data);
  },
};

const mutations = {
  setItems: (state, items) => (state.items = items),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
