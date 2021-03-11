import Vue from 'vue'
import App from './App.vue'
import { api } from '@/api'
import router from '@/router'
import store from '@/store'
import { BootstrapVue, IconsPlugin, ToastPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(ToastPlugin)

Vue.prototype.$http = api;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
