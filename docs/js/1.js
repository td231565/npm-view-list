(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ViewRow.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ViewRow.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ViewList',\n  props: {\n    config: {\n      type: Object\n    },\n    data: {\n      type: Array\n    },\n    editable: {\n      // 顯示編輯按鈕\n      type: Boolean,\n      default: true\n    },\n    deletable: {\n      // 顯示刪除按鈕\n      type: Boolean,\n      default: true\n    }\n  },\n  data: function data() {\n    return {\n      isShowAction: this.editable || this.deletable\n    };\n  },\n  methods: {\n    /**\r\n     * 自訂action: 回傳 action, 被點擊的物件資料\r\n     * @param {String} action 動作類型\r\n     * @param {Number} index 被點擊的物件在原陣列的index\r\n     */\n    doAction: function doAction(action, index) {\n      this.$emit(\"on-action\", action, index);\n    }\n  },\n  mounted: function mounted() {},\n  created: function created() {}\n});\n\n//# sourceURL=webpack:///./src/components/ViewRow.vue?./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"5e93fdbc-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ViewRow.vue?vue&type=template&id=301f0f16&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"5e93fdbc-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ViewRow.vue?vue&type=template&id=301f0f16& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"c-list--list\" },\n    _vm._l(_vm.data, function(item, idx) {\n      return _c(\n        \"div\",\n        {\n          key: \"item-\" + idx,\n          staticClass: \"c-list__item\",\n          class: { skeleton: item.skeleton },\n          on: {\n            click: function($event) {\n              return _vm.doAction(\"click\", idx)\n            }\n          }\n        },\n        [\n          item.image\n            ? _c(\"div\", {\n                staticClass: \"c-list__item__image\",\n                style: \"background-image: url(\" + item.image.value + \")\"\n              })\n            : _vm._e(),\n          _c(\"div\", { staticClass: \"c-list__item__main ml-4\" }, [\n            _c(\"div\", { staticClass: \"c-list__item__title\" }, [\n              item.title\n                ? _c(\n                    \"h2\",\n                    { style: \"text-align: \" + (item.title.align || \"left\") },\n                    [_vm._v(_vm._s(item.title.value))]\n                  )\n                : _vm._e(),\n              item.content\n                ? _c(\"div\", {\n                    staticClass: \"mt-1\",\n                    domProps: { innerHTML: _vm._s(item.content.value) }\n                  })\n                : _vm._e()\n            ]),\n            item.footer\n              ? _c(\"div\", { staticClass: \"c-list__item__footer mt-1\" }, [\n                  _c(\n                    \"p\",\n                    _vm._l(item.footer, function(footerItem, idx) {\n                      return _c(\"span\", { key: \"foot-\" + idx }, [\n                        _vm._v(\n                          _vm._s(footerItem.name) +\n                            \"：\" +\n                            _vm._s(footerItem.value) +\n                            _vm._s(idx !== item.footer.length - 1 ? \" | \" : \"\")\n                        )\n                      ])\n                    }),\n                    0\n                  ),\n                  _vm.isShowAction\n                    ? _c(\n                        \"div\",\n                        { staticClass: \"c-list__item__action\" },\n                        [\n                          _vm.editable\n                            ? _c(\"fa-icon\", {\n                                staticClass: \"c-list__item__action__icon mr-1\",\n                                attrs: { icon: \"edit\" },\n                                on: {\n                                  click: function($event) {\n                                    return _vm.doAction(\"edit\", idx)\n                                  }\n                                }\n                              })\n                            : _vm._e(),\n                          _vm.deletable\n                            ? _c(\"fa-icon\", {\n                                staticClass: \"c-list__item__action__icon\",\n                                attrs: { icon: \"trash\" },\n                                on: {\n                                  click: function($event) {\n                                    return _vm.doAction(\"delete\", idx)\n                                  }\n                                }\n                              })\n                            : _vm._e()\n                        ],\n                        1\n                      )\n                    : _vm._e()\n                ])\n              : _vm._e()\n          ])\n        ]\n      )\n    }),\n    0\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./src/components/ViewRow.vue?./node_modules/cache-loader/dist/cjs.js?%7B%22cacheDirectory%22:%22node_modules/.cache/vue-loader%22,%22cacheIdentifier%22:%225e93fdbc-vue-loader-template%22%7D!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./src/components/ViewRow.vue":
/*!************************************!*\
  !*** ./src/components/ViewRow.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ViewRow_vue_vue_type_template_id_301f0f16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewRow.vue?vue&type=template&id=301f0f16& */ \"./src/components/ViewRow.vue?vue&type=template&id=301f0f16&\");\n/* harmony import */ var _ViewRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewRow.vue?vue&type=script&lang=js& */ \"./src/components/ViewRow.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _ViewRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _ViewRow_vue_vue_type_template_id_301f0f16___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _ViewRow_vue_vue_type_template_id_301f0f16___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/ViewRow.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./src/components/ViewRow.vue?");

/***/ }),

/***/ "./src/components/ViewRow.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/components/ViewRow.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./ViewRow.vue?vue&type=script&lang=js& */ \"./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ViewRow.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack:///./src/components/ViewRow.vue?");

/***/ }),

/***/ "./src/components/ViewRow.vue?vue&type=template&id=301f0f16&":
/*!*******************************************************************!*\
  !*** ./src/components/ViewRow.vue?vue&type=template&id=301f0f16& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_5e93fdbc_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewRow_vue_vue_type_template_id_301f0f16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"5e93fdbc-vue-loader-template\"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./ViewRow.vue?vue&type=template&id=301f0f16& */ \"./node_modules/cache-loader/dist/cjs.js?{\\\"cacheDirectory\\\":\\\"node_modules/.cache/vue-loader\\\",\\\"cacheIdentifier\\\":\\\"5e93fdbc-vue-loader-template\\\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ViewRow.vue?vue&type=template&id=301f0f16&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_5e93fdbc_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewRow_vue_vue_type_template_id_301f0f16___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_5e93fdbc_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewRow_vue_vue_type_template_id_301f0f16___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack:///./src/components/ViewRow.vue?");

/***/ })

}]);