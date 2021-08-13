import axios from 'axios';

const apiUrl = 'http://localhost:3000';

const state = {
  calendars: [],
};

const getters = {
  calendars: state => state.calendars,
};

const mutations = {
  setCalendars: (state, calendars) => (state.calendars = calendars),
};

const actions = {
  async fetchCalendars({ commit }) {
    const response = await axios.get(`${apiUrl}/calendars`);
    commit('setCalendars', response.data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
