import {
    VUEX_UI_HEADER_SHOW,
    VUEX_UI_HEADER_HIDE,

    VUEX_UI_NAVIGATION_SHOW,
    VUEX_UI_NAVIGATION_HIDE,
    VUEX_UI_NAVIGATION_TOGGLE_OPENSTATE,

    VUEX_UI_NAVIGATION_ENABLED,
    VUEX_UI_NAVIGATION_DISABLED,

    VUEX_UI_OVERLAY_CONTAINER_SHOW,
    VUEX_UI_OVERLAY_CONTAINER_HIDE,
    VUEX_UI_OVERLAY_CONTAINER_SET_STATE,
    VUEX_UI_OVERLAY_CONTAINER_SET_COMPONENT,

    VUEX_UI_NOTIFICATIONS_CONTAINER_SHOW,
    VUEX_UI_NOTIFICATIONS_CONTAINER_HIDE,
    VUEX_UI_NOTIFICATIONS_CONTAINER_SET_STATE,
    VUEX_UI_NOTIFICATIONS_CONTAINER_DEFAULT_DELAY
    // VUEX_UI_NOTIFICATIONS_CONTAINER_SET_COMPONENT
} from '@/store/constants/ui'


const state = {
    headerState: false, 
    navigation: {
        isEnabled: true,
        openState: false
    },
    overlayContainer: {
        component: null,
        title: '',
        openState: false
    },
    notificationsContainer : {
        component: null,
        data: null,
        timeout: null,
        openState: false
    }
}


const getters = {
    // 
}


const actions = {
    // HEADER UI
    [VUEX_UI_HEADER_SHOW]:({ commit }) => {
        commit(VUEX_UI_HEADER_SHOW)
    },

    [VUEX_UI_HEADER_HIDE]:({ commit }) => {
        commit(VUEX_UI_HEADER_HIDE)
    },

    // NAVIGATION UI
    [VUEX_UI_NAVIGATION_SHOW]:({ commit }) => {
        commit(VUEX_UI_NAVIGATION_SHOW)
    },

    [VUEX_UI_NAVIGATION_HIDE]:({ commit }) => {
        commit(VUEX_UI_NAVIGATION_HIDE)
    },

    [VUEX_UI_NAVIGATION_TOGGLE_OPENSTATE]:({ commit }) => {
        commit(VUEX_UI_NAVIGATION_TOGGLE_OPENSTATE)
    },

    [VUEX_UI_NAVIGATION_ENABLED]:({ commit }) => {
        commit(VUEX_UI_NAVIGATION_ENABLED)
    },

    [VUEX_UI_NAVIGATION_DISABLED]:({ commit }, delay) => {
        commit(VUEX_UI_NAVIGATION_DISABLED)

        if (delay) {
            setTimeout(() => {
                commit(VUEX_UI_NAVIGATION_ENABLED)
            }, delay)
        }
    },

    // OVERLAY CONTAINER UI
    [VUEX_UI_OVERLAY_CONTAINER_SHOW]:({ commit }) => {
        commit(VUEX_UI_OVERLAY_CONTAINER_SHOW)
    },

    [VUEX_UI_OVERLAY_CONTAINER_HIDE]:({ commit }) => {
        commit(VUEX_UI_OVERLAY_CONTAINER_HIDE)
    },

    [VUEX_UI_OVERLAY_CONTAINER_SET_COMPONENT]:({ commit }, payload) => {
        commit(VUEX_UI_OVERLAY_CONTAINER_SET_COMPONENT, payload)
    },

    // NOTIFICATIONS CONTAINER UI
    [VUEX_UI_NOTIFICATIONS_CONTAINER_SHOW]:({ commit }, payload) => {
        commit(VUEX_UI_NOTIFICATIONS_CONTAINER_SHOW, payload)
    },

    [VUEX_UI_NOTIFICATIONS_CONTAINER_HIDE]:({ commit }) => {
        commit(VUEX_UI_NOTIFICATIONS_CONTAINER_HIDE)
    },

   /*  [VUEX_UI_NOTIFICATIONS_CONTAINER_SET_COMPONENT]:({ commit }, payload) => {
        commit(VUEX_UI_NOTIFICATIONS_CONTAINER_SET_COMPONENT, payload)
    }, */
}


const mutations = {
    // HEADER UI
    [VUEX_UI_HEADER_SHOW]:( state ) => {
        state.headerState = true;
    },

    [VUEX_UI_HEADER_HIDE]:( state ) => {
        state.headerState = false;
    },

    // NAVIGATION UI
    [VUEX_UI_NAVIGATION_SHOW]:( state ) => {
        state.navigation.openState = true
    },

    [VUEX_UI_NAVIGATION_HIDE]:( state ) => {
        state.navigation.openState = false
    },

    [VUEX_UI_NAVIGATION_TOGGLE_OPENSTATE]:( state ) => {
        state.navigation.openState = !state.navigation.openState
    },

    [VUEX_UI_NAVIGATION_ENABLED]:( state ) => {
        state.navigation.isEnabled = true
    },

    [VUEX_UI_NAVIGATION_DISABLED]:( state ) => {
        state.navigation.isEnabled = false
    },

    // OVERLAY CONTAINER UI
    [VUEX_UI_OVERLAY_CONTAINER_SHOW]:( state ) => {
        state.overlayContainer.openState = true
    },
    
    [VUEX_UI_OVERLAY_CONTAINER_HIDE]:( state ) => {
        state.overlayContainer.openState = false
    },

    [VUEX_UI_OVERLAY_CONTAINER_SET_STATE]:( state, payload) => {
        state.overlayContainer.openState = payload
    },

    [VUEX_UI_OVERLAY_CONTAINER_SET_COMPONENT]:( state, payload ) => {
        if (payload.component) state.overlayContainer.component = payload.component
        if (payload.title) state.overlayContainer.title = payload.title
    },

    // NOTIFICATIONS CONTAINER UI
    [VUEX_UI_NOTIFICATIONS_CONTAINER_SHOW]:( state, payload ) => {
        if (payload.component) state.notificationsContainer.component = payload.component
        if (payload.data) state.notificationsContainer.data = payload.data
        state.notificationsContainer.timeout = (payload.timeout) ? payload.timeout : VUEX_UI_NOTIFICATIONS_CONTAINER_DEFAULT_DELAY
        
        state.notificationsContainer.openState = true
    },
    
    [VUEX_UI_NOTIFICATIONS_CONTAINER_HIDE]:( state ) => {
        state.notificationsContainer.openState = false
    },

    [VUEX_UI_NOTIFICATIONS_CONTAINER_SET_STATE]:( state, payload) => {
        state.notificationsContainer.openState = payload
    },

    /* [VUEX_UI_NOTIFICATIONS_CONTAINER_SET_COMPONENT]:( state, payload ) => {
        if (payload.component) state.notificationsContainer.component = payload.component
        if (payload.data) state.notificationsContainer.data = payload.data
    }, */
}


export default {
    state,
    getters,
    actions,
    mutations
}