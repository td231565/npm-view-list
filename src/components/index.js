import List from './List.vue'

List.install = function (Vue) {
  Vue.component('mvList', List)
}

// Auto-install when vue is found (eg. in browser via <script> tag)
// let GlobalVue = null
// if (typeof window !== 'undefined') {
// 	GlobalVue = window.Vue
// } else if (typeof global !== 'undefined') {
// 	GlobalVue = global.Vue
// }

let GlobalVue = typeof window !== 'undefined' ? window.Vue : global.Vue
if (GlobalVue) {
	GlobalVue.use(List)
}

export default List