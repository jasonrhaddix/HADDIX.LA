import {
    VUEX_APP_INIT,
    VUEX_APP_INITIALIZED
} from '@/store/constants/app'
import {
    VUEX_CONSTANTS_INIT,
    VUEX_PROPERTIES_INIT
} from '@/store/constants/_config'
import {
    VUEX_ROUTING_INIT
} from '@/store/constants/routing'


const state = {
    initializing: false,
    initialized: false,
}

const getters = {}

const actions = {
    [VUEX_APP_INIT]: async ({ commit, dispatch }) => {
        await dispatch(VUEX_CONSTANTS_INIT)
        await dispatch(VUEX_PROPERTIES_INIT)
        await dispatch(VUEX_ROUTING_INIT)
        commit(VUEX_APP_INIT)
    }
}

const mutations = {
    [VUEX_APP_INIT]:( state ) => {
        state.initializing = true
    },

    [VUEX_APP_INITIALIZED]:( state ) => {
        state.initializing = false
        state.initialized = true
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}