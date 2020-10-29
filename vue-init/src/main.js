import Vue from 'vue'
import App from './App.vue'
import router from './router/permission'
import store from './store'
import { Button, Icon } from '@nutui/nutui';
Button.install(Vue);
Icon.install(Vue);
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
