import button from './button'
import icon from './icon'
import viewWindow from './viewWindow'
import image from './image'
import empty from './empty'

const cmpList = { button, icon, viewWindow, image, empty }

const install = Vue => {
  if (install.installed) return
  for (const cmp of Object.values(cmpList)) {
    Vue.use(cmp)
  }
}
export const clButton = button
export const clIcon = icon
export const clViewWindow = viewWindow
export const clImage = image
export const clEmpty = empty

export default {
  install,
}
