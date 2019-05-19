const profile = {
  firstName: 'Rinat',
  lastName: 'Davlikamov',
  nickName: 'supervueman',
  age: 28,
  avatar: 'avatar.jpg'
}

export default {
  namespaced: true,
  state: {
    profile: null
  },
  mutations: {
    setProfile(state, payload) {
      state.profile = payload;
    }
  },
  actions: {
    async fetchProfile({
      commit
    }) {
      commit('setProfile', profile);
    }
  },
  getters: {
    getProfile(state) {
      return state.profile;
    }
  }
};
