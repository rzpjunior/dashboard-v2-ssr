import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios';
import createPersistedState from 'vuex-persistedstate';
import * as Cookies from "js-cookie";

Vue.use(Vuex)

const getDefaultState = () => {
  return {
      token: '',
      staff: {}
  };
};

export default new Vuex.Store({
    state: getDefaultState(),
    plugins: [
      createPersistedState({
        storage: {
          getItem: (key) => Cookies.get(key),
          // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
          setItem: (key, value) =>
            Cookies.set(key, value, { expires: 3, secure: true }),
          removeItem: (key) => Cookies.remove(key),
        },
      }),
    ],
    getters: {
      isLoggedIn: state => {
          return state.token;
      },
      getStaff: state => {
          return state.staff;
      }
  },
  mutations: {
      SET_TOKEN: (state, token) => {
          state.token = token;
      },
      SET_STAFF: (state, staff) => {
          state.staff = staff;
      },
      RESET: state => {
          Object.assign(state, getDefaultState());
      }
  },
  actions: {
      login: ({ commit }, { token, staff }) => {
          commit('SET_TOKEN', token);
          commit('SET_STAFF', staff);
          // set auth header
          Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      },
      logout: ({ commit }) => {
          commit('RESET', '');
      }
  },
  })