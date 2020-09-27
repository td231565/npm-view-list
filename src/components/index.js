// Font-Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEdit, faTrash, faThLarge, faList } from '@fortawesome/free-solid-svg-icons'
import List from './List.vue'

const install = (Vue) => {
  if (install.installed) { return }
  // Use Font-Awesome
  library.add([faEdit, faTrash, faThLarge, faList])
  Vue.component('fa-icon', FontAwesomeIcon)
  Vue.component('mvList', List)
}

List.install = install

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  List.install(window.Vue)
}

// List.install = function (Vue) {
//   // Use Font-Awesome
//   library.add([faEdit, faTrash, faThLarge, faList])
//   Vue.component('fa-icon', FontAwesomeIcon)
//   Vue.component('mvList-style', style)
//   Vue.component('mvList', List)
// }

export default List