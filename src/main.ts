import './assets/main.css'
import routers from './router/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import store from './store/store.js';
import  VuelidatePlugin  from '@vuelidate/core'

import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'

createApp(App).use(routers).use(store).use(VuelidatePlugin).mount('#app')
