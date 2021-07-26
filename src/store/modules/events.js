import axios from "axios";
const apiUrl = "http://localhost:3000";

const state = {
  events: [],
  event: null,
  isEditMode: false,
};

const getters = {
  //変換処理
  events: (state) =>
    state.events.map((event) => {
      return {
        ...event,
        start: new Date(event.start),
        end: new Date(event.end),
      };
    }),
  event: (state) =>
    state.event
      ? {
          ...state.event,
          start: new Date(state.event.start),
          end: new Date(state.event.end),
        }
      : null,
  isEditMode: state => state.isEditMode,
};

const mutations = {
  //eventsステートはカレンダーに予定を表示するために使用
  setEvents: (state, events) => (state.events = events),
  //[...state.events, event]と書くことで元々のstate.events配列の末尾にeventデータを追加
  appendEvent: (state, event) => (state.events = [...state.events, event]),
  setEvent: (state, event) => (state.event = event),
  setEditMode: (state, bool) => (state.isEditMode = bool),
};

const actions = {
  async fetchEvents({ commit }) {
    const response = await axios.get(`${apiUrl}/events`);
    commit("setEvents", response.data); // mutationへ渡す
  },
  async createEvent({ commit }, event) {
    const response = await axios.post(`${apiUrl}/events`, event);
    commit('appendEvent', response.data);
  },
  setEvent({ commit }, event) {
    commit("setEvent", event);
  },
  setEditMode({ commit }, bool) {
    commit('setEditMode', bool)
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
