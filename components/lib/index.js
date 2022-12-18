import button from './button/main.vue'
import icon from './icon/main.vue'

const cmpList = { button, icon }

const install = Vue => {
  if (install.installed) return
  for (const cmp of Object.values(cmpList)) {
    Vue.use(cmp)
  }
}
export const clButton = button
export const clIcon = icon
export default {
  install,
}
