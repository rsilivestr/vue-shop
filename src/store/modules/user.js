const state = {
  user: {
    // authorized: boolean,
    // isAdmin: boolean,
    // username: string,
  },
};

const getters = {
  getUser: () => state.user,
};

const actions = {
  saveUser({ commit }, user) {
    commit('setUser', user);

    localStorage.setItem('vueShopUser', user);
  },
};

const mutations = {
  setUser: (state, user) => (state.user = user),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
