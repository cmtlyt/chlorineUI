import '../style/index.scss'

import Button from './button'

const cmpList = [Button]

const install = Vue => {
  if (install.installed) return
  for (const cmp of cmpList) {
    Vue.component(cmp.name, cmp)
  }
}

export const clButton = Button

export default {
  install,
}
