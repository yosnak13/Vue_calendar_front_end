import axios from "axios";
import { serializeEvent } from '../../functions/serializers';

const apiUrl = "http://localhost:3000";

const state = {
  events: [],
  event: null,
  isEditMode: false,
};

const getters = {
  events: state => state.events.map(event => serializeEvent(event)),
  event: state => serializeEvent(state.event),
  isEditMode: state => state.isEditMode,
};

const mutations = {
  //eventsステートはカレンダーに予定を表示するために使用
  setEvents: (state, events) => (state.events = events),
  //[...state.events, event]と書くことで元々のstate.events配列の末尾にeventデータを追加
  appendEvent: (state, event) => (state.events = [...state.events, event]),
  setEvent: (state, event) => (state.event = event),
  removeEvent: (state, event) => (state.events = state.events.filter(e => e.id !== event.id)),
  resetEvent: state => (state.event = null),
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
  async deleteEvent({ commit }, id) {
    const response = await axios.delete(`${apiUrl}/events/${id}`);
    commit('removeEvent', response.data);
    commit('resetEvent');
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
