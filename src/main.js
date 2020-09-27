import Vue from 'vue'
import App from './App.vue'
// Font-Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEdit, faTrash, faThLarge, faList } from '@fortawesome/free-solid-svg-icons'

// Use Font-Awesome
library.add([faEdit, faTrash, faThLarge, faList])
Vue.component('fa-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
