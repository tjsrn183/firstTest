/* eslint-disable */
export default {
  SET_USER(state, user) {
    state.user = user;
  },
  SET_ITEM(state, item) {
    state.item = item;
  },
  SET_LIST(state, list) {
    state.list = list;
  },
  INCREASE_HEART(state, id) {
    for (let element of state.list) {
      if (element.id === id) {
        element.points += 1;
        break;
      }
    }
  },
  DECREASE_HEART(state, id) {
    for (let element of state.list) {
      if (element.id === id) {
        element.points -= 1;
        break;
      }
    }
  },
  ADD_TODO(state, text) {
    state.comment.push(text);
  },
  DELETE_TODO(state, id) {
    state.comment.splice(id, 1);
  },
};
