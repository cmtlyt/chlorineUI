import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import '../components/style/index.scss'

new Vue({
  render: h => h(App),
}).$mount('#app')
