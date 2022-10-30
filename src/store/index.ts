import { createStore } from 'vuex'

export default createStore({
  state: {
    result: null,
  },
  getters: {
    handleResult(state) {
      return state.result
    }
  },
  mutations: {
    saveResult(state, value) {
      state.result = value
    },
    resetResult(state) {
      state.result = null
    }
  },
  actions: {
    async generateQrCode(context, payload) {
      const URL = 'https://api.qrserver.com/v1/create-qr-code';
      const reader = new FileReader()
      try {
        const res = await fetch(`${URL}/?data=${payload}&size=150x150&bgcolor=000&color=fff`)
        let result;
        const convertedImage = await res.blob()
        reader.readAsDataURL(convertedImage)
        reader.onloadend = () => {
          result = reader.result
          context.commit('saveResult', result)
        }
      } catch (error) {
        throw new Error("Error during fetch");
      }
    },
  },
})
