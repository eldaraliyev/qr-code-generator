import {ActionContext, createStore} from 'vuex'

export interface State {
    qr_code: string | null,
    layout: string | null,
}

export default createStore<State>({
    state: {
        qr_code: null,
        layout: null,
    },

    getters: {
        GET_QR_CODE: (state: State) => state.qr_code,
        GET_LAYOUT: (state: State) => state.layout,
        IS_DARK_MODE_ENABLED: (state: State) => state?.layout && state?.layout === 'dark'
    },

    mutations: {
        SET_QR_CODE: (state: State, value: string) => {
            if (value) state.qr_code = value
        },
        RESET_QR_CODE: (state: State) => state.qr_code = null,
        SET_LAYOUT: (state: State, value: string | null) => {
            state.layout = value
        }
    },

    actions: {
        GENERATE_QR_CODE: async ({commit}: ActionContext<State, State>, payload: any) => {
            const FETCH_URL = 'https://api.qrserver.com/v1/create-qr-code'
            const FILE_READER = new FileReader()
            try {
                const resposne = await fetch(`${FETCH_URL}/?data=${payload}&size=150x150`)
                const image = await resposne.blob()
                FILE_READER.readAsDataURL(image)
                FILE_READER.onloadend = () => {
                    commit("SET_QR_CODE", FILE_READER.result)
                }
            } catch (error: unknown) {
                throw new Error("Something going wrong during fetch. Make your API call again.")
            }
        },
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
    },
})
