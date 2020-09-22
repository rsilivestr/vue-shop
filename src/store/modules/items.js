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

    commit('addItems', res.data);
  },
};

const mutations = {
  // Show single page at a time
  setItems: (state, items) => (state.items = items),
  // Show several pages at a time
  addItems: (state, items) => items.forEach((item) => state.items.push(item)),
  // Try this
  // addItems: (state, items) => state.items = state.items.concat(items),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
