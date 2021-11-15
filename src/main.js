import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import ErrorPage from 'vue-error-page';

Vue.config.productionTip = false

// axios 전역사용
Vue.prototype.$axios = axios;

// errorPage 관련
window.eventBus = new Vue();
Vue.use(ErrorPage);

// Vue.use(ErrorPage,{
//   tagName:'app-view',
//   bus :'eventbus',
//   event:'error-page',
//   resolver: (component) => {
//     return require('./views/' + component).default;
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
