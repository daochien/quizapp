const state = {
    active: false,

}

const getters = {
    activeMenuMobile (state) {
        return state.active;
    },

}

const mutations = {
    set_active (state, payload) {
        state.active = payload;
    },
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
