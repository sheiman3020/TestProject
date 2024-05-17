import './assets/main.css'
import store from './store'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axiosInstance from './axios'

const app = createApp(App)

app.use(router)
app.use(store)
app.config.globalProperties.$axios = axiosInstance;
app.mount('#app')
