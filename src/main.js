import './assets/main.css'
import store from './store'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axiosInstance from './axios'
import './index.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faUser as farUser } from '@fortawesome/free-regular-svg-icons';

library.add(faUser, farUser);


const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.use(store)
app.config.globalProperties.$axios = axiosInstance;
app.mount('#app')
