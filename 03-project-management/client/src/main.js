import {createApp} from 'vue'
import 'ant-design-vue/dist/antd.min.css';
import './style.css'
import App from './App.vue'
import router from "./router/index.js";
import Antd from 'ant-design-vue';
// Vue 3rd party plugins
import "./core/plugins/bootstrap";
import store from "./store/index.js";

createApp(App)
    .use(Antd)
    .use(router)
    .use(store)
    .mount('#app')
