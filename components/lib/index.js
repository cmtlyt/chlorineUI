import button from './button'
import icon from './icon'
import viewWindow from './viewWindow'
import image from './image'
import empty from './empty'
import manu from './manu'
import manuItem from './manuItem'
import submanu from './submanu'
import $switch from './switch'

const cmpList = { button, icon, viewWindow, image, empty, manu, manuItem, submanu, $switch }

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
export const clManu = manu
export const clManuItem = manuItem
export const clSubmanu = submanu
export const clSwitch = $switch

export default {
  install,
}
