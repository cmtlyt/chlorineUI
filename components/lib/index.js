import button from './button/main.vue'
import icon from './icon/main.vue'
import viewWindow from './viewWindow/main.vue'

const cmpList = { button, icon, viewWindow }

const install = Vue => {
  if (install.installed) return
  for (const cmp of Object.values(cmpList)) {
    Vue.use(cmp)
  }
}
export const clButton = button
export const clIcon = icon
export const clViewWindow = viewWindow

export default {
  install,
}
