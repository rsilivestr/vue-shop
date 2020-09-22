const dechiperPayload = (state) => {
  if (!state.token) {
    return {};
  }

  const base64Url = state.token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );
  return JSON.parse(jsonPayload);
};

const state = {
  token: '',
};

const getters = {
  token: (state) => state.token,
  userInfo: (state) => {
    const payload = dechiperPayload(state);
    return payload.publicUserInfo;
  },
};

const actions = {
  saveToken({ commit }, token) {
    commit('setToken', token);
    localStorage.setItem('vueShopToken', JSON.stringify(token));
  },

  getLocalToken: ({ commit }) => {
    const token = JSON.parse(localStorage.getItem('vueShopToken'));
    if (token) commit('setToken', token);
  },

  removeToken: ({ commit }) => {
    localStorage.removeItem('vueShopToken');
    commit('setToken', '');
  },
};

const mutations = {
  setToken: (state, token) => (state.token = token),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
