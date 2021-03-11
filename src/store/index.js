import Vue from 'vue'
import Vuex from 'vuex'
// import getters from './getters'
// import mutations from './mutations'
// import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isLoggedIn: true
    },
    getters: {
        isLoggedIn: state => state.isLoggedIn
    },
    mutations: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        }
    },
    actions: {
        login: ({commit}) => {
            commit('login');
        },
        logout: ({commit}) => {
            commit('logout');
        }
    }
});


export default store;