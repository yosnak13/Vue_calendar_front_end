import axios from "axios";
const apiUrl = "http://localhost:3000";

const state = {
  event: null,
};

const getters = {
  //変換処理
  // events: (state) =>
  //   state.events.map((event) => {
  //     return {
  //       ...event,
  //       start: new Date(event.start),
  //       end: new Date(event.end),
  //     };
  //   }),
  event: (state) =>
    state.event
      ? {
          ...state.event,
          start: new Date(state.event.start),
          end: new Date(state.event.end),
        }
      : null,
};

const mutations = {
  setEvent: (state, event) => (state.event = event),
};

const actions = {
  async fetchEvents({ commit }) {
    const response = await axios.get(`${apiUrl}/events`);
    commit("setEvent", response.data); // mutationを呼び出す
  },
  setEvent({ commit }, event) {
    commit("setEvent", event);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
