// Font-Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEdit, faTrash, faThLarge, faList } from '@fortawesome/free-solid-svg-icons'
import List from './List.vue'
import CardList from './ViewCard.vue'
import RowList from './ViewRow.vue'

const install = (Vue) => {
  if (install.installed) { return }
  // Use Font-Awesome
  library.add([faEdit, faTrash, faThLarge, faList])
  Vue.component('fa-icon', FontAwesomeIcon)
  Vue.component('MvList', List)
  Vue.component('CardList', CardList)
  Vue.component('RowList', RowList)
}

List.install = install

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  List.install(window.Vue)
}

export default List