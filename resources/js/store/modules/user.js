import { getToken } from '@/utils/auth.js';

const state = {
    isLogin: false,
    token: getToken(),
    name: '',
    email: ''
}

const getters = {
    getIsLogin (state) {
        return state.isLogin;
    },
    getName (state) {
        return state.name;
    },
    getEmail (state) {
        return state.email;
    }
}

const mutations = {
    set_is_login (state, status) {
        state.isLogin = status;
    },
    set_name (state, name) {
        state.name = name;
    },
    set_email (state, email) {
        state.email = email;
    }
}

const actions = {
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}
