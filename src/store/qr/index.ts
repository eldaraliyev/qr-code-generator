import {ActionContext, createStore} from "vuex";

interface State {
    qr_code: string | null,
}

export default createStore<State>({
    state: {
        qr_code: null,
    },

    getters: {
        GET_QR_CODE: (state: State) => () => state.qr_code
    },

    mutations: {
        SET_QR_CODE: (state: State, value: string) => {
            if (value) state.qr_code = value
        },
        RESET_QR_CODE: (state: State) => state.qr_code = null
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
        }
    }
})