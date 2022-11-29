import { ActionContext, createStore } from 'vuex'

export interface State {
  result: string | null,
  layout: string | null,
}

export default createStore<State>({
  state: {
    result: null,
    layout: null,
  },
  getters: {
    handleResult(state: State) {
      return state.result
    },
    handleLayout(state: State) {
      return state.layout
    },
    isDark(state: State) {
      return state.layout === 'dark' 
    }
  },
  mutations: {
    saveResult(state: State, value: string) {
      state.result = value
    },
    resetResult(state: State) {
      state.result = null
    },
    changeLayout(state: State, value: string) {
      state.layout = value
    }
  },
  actions: {
    async generateQrCode(context: ActionContext<State, State>, payload) {
      const URL = 'https://api.qrserver.com/v1/create-qr-code';
      const reader = new FileReader()
      try {
        const res = await fetch(`${URL}/?data=${payload}&size=150x150`)
        let result;
        const convertedImage = await res.blob()
        reader.readAsDataURL(convertedImage)
        reader.onloadend = () => {
          result = reader.result
          context.commit('saveResult', result)
        }
      } catch (error: unknown) {
        throw new Error("Error during fetch");
      }
    },
    setDocumentTheme(context: ActionContext<State, State>, theme: string) {
      document.documentElement.setAttribute('data-theme', theme)
      context.commit('changeLayout', theme)
    },
    toggleLayout(context: ActionContext<State, State>) {
      if (localStorage.layout === 'dark') {
        localStorage.setItem('layout', 'light')
        context.dispatch('setDocumentTheme', 'light')
      } else {
        localStorage.setItem('layout', 'dark')
        context.dispatch('setDocumentTheme', 'dark')
      }
    },
    initLayout(context: ActionContext<State, State>) {
      if (localStorage.layout && localStorage.layout === 'dark') {
        context.dispatch('setDocumentTheme', 'dark')
      } else {
        context.dispatch('setDocumentTheme', 'light')
      }
    }
  },
})
