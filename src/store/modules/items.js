import axios from 'axios';

const state = {
  items: [],
};

const getters = {
  allItems: (state) => state.items,
};

const actions = {
  async fetchItems({ commit }, params = { limit: 12, page: 1 }) {
    const res = await axios.get(
      `http://localhost:3000/items?_limit=${params.limit}&_page=${params.page}`
    );

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
