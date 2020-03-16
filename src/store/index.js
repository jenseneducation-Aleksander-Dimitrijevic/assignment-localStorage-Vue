import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    storedUser: []
  },
  mutations: {
    SET_USER(state, newUser) {
      state.storedUser.push(newUser);
      const parsed = JSON.stringify(state.storedUser);
      sessionStorage.setItem("user", parsed);
    }
  },
  actions: {
    setSessionStorage(context, newUser) {
      context.commit("SET_USER", newUser);
    }
  }
});
