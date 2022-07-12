import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/index.css'
import router from './router'
import store from './store';
// Vue 3rd party plugins
import "./core/plugins/bootstrap";

createApp(App)
.use(router)
.use(store)
.mount('#app')
