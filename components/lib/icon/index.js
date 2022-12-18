import cmp from './main.vue'

cmp.install = Vue => {
  Vue.component(cmp.name, cmp)
}

export default cmp
