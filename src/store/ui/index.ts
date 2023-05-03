import {ActionContext, createStore} from "vuex";

export interface State {
    layout: string | null
}

export default createStore<State>({
    state: {
        layout: null
    },

    getters: {
        GET_LAYOUT: (state: State) => () => state.layout,
        IS_DARK_MODE_ENABLED: (state: State) => () => state?.layout && state?.layout === 'dark'
    },

    mutations: {
        SET_LAYOUT: (state: State, value: string | null) => {
            state.layout = value
        }
    },

    actions: {
        INIT_LAYOUT_THEME: ({dispatch}: ActionContext<State, State>) => {
            if (localStorage.layout && localStorage.layout === 'dark') {
                dispatch("SET_LAYOUT_THEME", "dark")
            } else {
                dispatch("SET_LAYOUT_THEME", "light")
            }
        },
        SET_LAYOUT_THEME: ({commit}: ActionContext<State, State>, theme: string) => {
            document.documentElement.setAttribute('data-theme', theme)
            commit("SET_LAYOUT", theme)
        },
        TOGGLE_LAYOUT_THEME: ({dispatch}: ActionContext<State, State>) => {
            if (localStorage.layout === 'dark') {
                localStorage.setItem('layout', 'light')
                dispatch("SET_LAYOUT_THEME", 'light')
            } else {
                localStorage.setItem('layout', 'dark')
                dispatch("SET_LAYOUT_THEME", 'dark')
            }
        }
    }
})