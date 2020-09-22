const state = {
  user: {},
  token: '',
};

const getters = {
  userInfo: (state) => state.user,
};

const actions = {
  saveUser({ commit }, user) {
    commit('setUser', user);
    localStorage.setItem('vueShopUser', JSON.stringify(user));
  },

  getLocalUser({ commit }) {
    const user = JSON.parse(localStorage.getItem('vueShopUser'));
    if (user) commit('setUser', user);
  },

  saveToken({ commit }, token) {
    commit('setToken', token);
    localStorage.setItem('vueShopToken', JSON.stringify(token));
  },

  getLocalToken: ({ commit }) => {
    const token = JSON.parse(localStorage.getItem('vueShopToken'));
    if (token) commit('setToken', token);
  },
};

const mutations = {
  setUser: (state, user) => (state.user = user),
  setToken: (state, token) => (state.token = token),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
