import Vue from 'vue';
import commonComponentsRequire from '@/functions/commonComponentsRequire';
import App from './App.vue';
import router from './routers';
import {
  store
} from './store';
import axios from 'axios';
import '@/assets/sass/index.sass';

commonComponentsRequire();

Vue.config.productionTip = false;
const baseUrl =
  process.env.NODE_ENV === 'development' ?
  process.env.VUE_APP_SERVER_URL_DEV :
  process.env.VUE_APP_SERVER_URL_PROD;

axios.defaults.baseURL = baseUrl;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
