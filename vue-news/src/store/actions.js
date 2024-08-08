import { fetchUser, fetchItem, fetchList } from '../api/index.js';

export default {
  FETCH_USER({ commit }, userId) {
    return fetchUser(userId).then(res => commit('SET_USER', res.data));
  },
  FETCH_ITEM({ commit }, itemId) {
    return fetchItem(itemId).then(res => commit('SET_ITEM', res.data));
  },

  FETCH_LIST({ commit }, listType) {
    return fetchList(listType).then(res => commit('SET_LIST', res.data));
  },
  INCREMENT_POINTS({ commit }, id) {
    return commit('INCREASE_HEART', id);
  },
  DECREMENT_POINTS({ commit }, id) {
    return commit('DECREASE_HEART', id);
  },
  ADD_TODO({ commit }, text) {
    return commit('ADD_TODO', text);
  },
  DELETE_TODO({ commit }, id) {
    return commit('DELETE_TODO', id);
  },
};
