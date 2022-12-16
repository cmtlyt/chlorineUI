import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import '../components/style/index.scss'
// import '../components/style/button.scss'
// import clButton from '../components/lib'
// Vue.use(clButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
