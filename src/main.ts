import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from "./components/index"
import "./assets/scss/global.scss"

const app = createApp(App)

components.forEach(component => {
    app.component(component.__name, component)
});
app.use(store)
    .use(router)
    .mount('#app')
