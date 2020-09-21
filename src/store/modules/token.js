const state = {
  token: '',
};

const actions = {
  saveToken({ commit }, token) {
    // Save to state
    commit('setToken', token);
    // Save to local storage
    localStorage.setItem('vueShopToken', JSON.stringify(token));
  },
};

const mutations = {
  setToken: (state, token) => (state.token = token),
};

export default {
  state,
  actions,
  mutations,
};
