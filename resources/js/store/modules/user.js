import { getToken } from '@/utils/auth.js';

const state = {
    isLogin: false,
    token: getToken(),
    name: ''
}

const getters = {
    getIsLogin (state) {
        return state.isLogin;
    },
    getName (state) {
        return state.name;
    }
}

const mutations = {
    set_is_login (state, status) {
        state.isLogin = status;
    },
    set_name (state, name) {
        state.name = name;
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
