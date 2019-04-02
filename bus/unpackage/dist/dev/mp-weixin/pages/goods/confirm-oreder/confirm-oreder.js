(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/goods/confirm-oreder/confirm-oreder"],{

/***/ "../../../../../Desktop/bus/main.js?{\"page\":\"pages%2Fgoods%2Fconfirm-oreder%2Fconfirm-oreder\"}":
/*!***************************************************************************************************!*\
  !*** C:/Users/新中融/Desktop/bus/main.js?{"page":"pages%2Fgoods%2Fconfirm-oreder%2Fconfirm-oreder"} ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../../../../Desktop/bus/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _confirmOreder = _interopRequireDefault(__webpack_require__(/*! ./pages/goods/confirm-oreder/confirm-oreder.vue */ "../../../../../Desktop/bus/pages/goods/confirm-oreder/confirm-oreder.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_confirmOreder.default));

/***/ }),

/***/ "../../../../../Desktop/bus/pages/goods/confirm-oreder/confirm-oreder.vue":
/*!******************************************************************************!*\
  !*** C:/Users/新中融/Desktop/bus/pages/goods/confirm-oreder/confirm-oreder.vue ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _confirm_oreder_vue_vue_type_template_id_43bcadeb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm-oreder.vue?vue&type=template&id=43bcadeb& */ "../../../../../Desktop/bus/pages/goods/confirm-oreder/confirm-oreder.vue?vue&type=template&id=43bcadeb&");
/* harmony import */ var _confirm_oreder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm-oreder.vue?vue&type=script&lang=js& */ "../../../../../Desktop/bus/pages/goods/confirm-oreder/confirm-oreder.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _confirm_oreder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _confirm_oreder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _confirm_oreder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm-oreder.vue?vue&type=style&index=0&lang=css& */ "../../../../../Desktop/bus/pages/goods/confirm-oreder/confirm-oreder.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../Downloads/HBuilderX.1.7.0.20190314/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _confirm_oreder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _confirm_oreder_vue_vue_type_template_id_43bcadeb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _confirm_oreder_vue_vue_type_template_id_43bcadeb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Desktop/bus/pages/goods/confirm-oreder/confirm-oreder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../../Desktop/bus/pages/goods/confirm-oreder/confirm-oreder.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** C:/Users/新中融/Desktop/bus/pages/goods/confirm-oreder/confirm-oreder.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_confirm_oreder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX.1.7.0.20190314/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Downloads/HBuilderX.1.7.0.20190314/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../Downloads/HBuilderX.1.7.0.20190314/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../../Downloads/HBuilderX.1.7.0.20190314/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Downloads/HBuilderX.1.7.0.20190314/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./confirm-oreder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../Desktop/bus/pages/goods/confirm-oreder/confirm-oreder.vue?vue&type=script&lang=js&");
/* harmony import */ var _Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_confirm_oreder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_confirm_oreder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_confirm_oreder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_confirm_oreder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_confirm_oreder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../Desktop/bus/pages/goods/confirm-oreder/confirm-oreder.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************!*\
  !*** C:/Users/新中融/Desktop/bus/pages/goods/confirm-oreder/confirm-oreder.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_confirm_oreder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX.1.7.0.20190314/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../Downloads/HBuilderX.1.7.0.20190314/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../Downloads/HBuilderX.1.7.0.20190314/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../Downloads/HBuilderX.1.7.0.20190314/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Downloads/HBuilderX.1.7.0.20190314/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../Downloads/HBuilderX.1.7.0.20190314/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./confirm-oreder.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../Desktop/bus/pages/goods/confirm-oreder/confirm-oreder.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_confirm_oreder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_confirm_oreder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_confirm_oreder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_confirm_oreder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_confirm_oreder_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../Desktop/bus/pages/goods/confirm-oreder/confirm-oreder.vue?vue&type=template&id=43bcadeb&":
/*!*************************************************************************************************************!*\
  !*** C:/Users/新中融/Desktop/bus/pages/goods/confirm-oreder/confirm-oreder.vue?vue&type=template&id=43bcadeb& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_confirm_oreder_vue_vue_type_template_id_43bcadeb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX.1.7.0.20190314/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Downloads/HBuilderX.1.7.0.20190314/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../Downloads/HBuilderX.1.7.0.20190314/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Downloads/HBuilderX.1.7.0.20190314/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./confirm-oreder.vue?vue&type=template&id=43bcadeb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../Desktop/bus/pages/goods/confirm-oreder/confirm-oreder.vue?vue&type=template&id=43bcadeb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_confirm_oreder_vue_vue_type_template_id_43bcadeb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_confirm_oreder_vue_vue_type_template_id_43bcadeb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../Desktop/bus/pages/goods/confirm-oreder/confirm-oreder.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/新中融/Desktop/bus/pages/goods/confirm-oreder/confirm-oreder.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =























































{
  data: function data() {
    return {
      address: {},
      goods: {},
      goods_num: '',
      ordernum: '',
      transportprice: '' };

  },
  onLoad: function onLoad(e) {var _this = this;
    var token = uni.getStorageSync("user_info").token;
    var oreder_num = uni.getStorageSync("oreder_num");
    uni.request({
      url: 'http://bus.liebianzhe.com/api/order/do_order',
      method: 'POST',
      data: {
        token: token,
        ordernum: oreder_num },

      success: function success(res) {
        if (res.data.code == 1) {
          console.info(res.data);
          _this.goods = res.data.data.goods;
          _this.goods_num = res.data.data.goods_num;
          _this.ordernum = res.data.data.ordernum;
          _this.transportprice = res.data.data.transportprice;
          if (e.address_type == 0) {
            _this.address = res.data.data.address;
          }
        } else if (res.data.code == 10) {
          uni.removeStorage({
            key: 'user_info' });

          uni.showToast({
            title: res.data.msg,
            icon: 'none',
            mask: false,
            duration: 1000 });

          setTimeout(function () {
            uni.reLaunch({
              url: '../../login/login' });

          }, 1500);

        } else {
          uni.showToast({
            title: res.data.msg,
            icon: 'none',
            mask: false,
            duration: 1000 });

        }
      },
      fail: function fail() {
        console.info("请求失败~");
      } });

  },
  methods: {
    reduce: function reduce() {
      this.goods_num == 1 ? this.goods_num = 1 : this.goods_num = parseInt(this.goods_num) - 1;
    },
    add: function add() {
      this.goods_num = parseInt(this.goods_num) + 1;
    },
    my_address: function my_address() {
      uni.navigateTo({
        url: '../my-address/my-address' });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../Desktop/bus/pages/goods/confirm-oreder/confirm-oreder.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/新中融/Desktop/bus/pages/goods/confirm-oreder/confirm-oreder.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../Desktop/bus/pages/goods/confirm-oreder/confirm-oreder.vue?vue&type=template&id=43bcadeb&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/新中融/Desktop/bus/pages/goods/confirm-oreder/confirm-oreder.vue?vue&type=template&id=43bcadeb& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c(
      "view",
      {
        staticClass: "order_address",
        attrs: { eventid: "3542e027-1" },
        on: {
          tap: function($event) {
            _vm.my_address()
          }
        }
      },
      [
        _c("view", { staticClass: "order_address_left" }, [
          _c("view", { staticClass: "addressee" }, [
            _c("text", [_vm._v("收件人:")]),
            _c("view", { staticClass: "addressee_name" }, [
              _vm._v(_vm._s(_vm.address.username))
            ]),
            _c("text", [_vm._v(_vm._s(_vm.address.phone))])
          ]),
          _c("view", { staticClass: "goods_address" }, [
            _c("view", { staticClass: "goods_address_left" }, [
              _c("text", [_vm._v("收件地址:")]),
              _c("view", { staticClass: "goods_address_left_view" }, [
                _vm._v(_vm._s(_vm.address.city) + _vm._s(_vm.address.address))
              ])
            ])
          ])
        ]),
        _c(
          "view",
          {
            staticClass: "goods_address_right",
            attrs: { eventid: "3542e027-0" },
            on: { tap: _vm.my_address }
          },
          [_vm._v(">")]
        )
      ]
    ),
    _c("view", { staticClass: "goods_title" }, [_vm._v("产品信息")]),
    _c("view", { staticClass: "goods_info" }, [
      _c("image", { attrs: { src: _vm.goods.cover } }),
      _c("view", { staticClass: "goods_info_right" }, [
        _c("view", { staticClass: "goods_info_right_name" }, [
          _vm._v(_vm._s(_vm.goods.goods_name))
        ]),
        _c("text", [_vm._v(_vm._s(_vm.goods.attribute))]),
        _c("text", { staticClass: "goods_info_right_jf" }, [
          _vm._v(_vm._s(_vm.goods.integral) + "积分")
        ])
      ])
    ]),
    _c("view", { staticClass: "confirm_order" }, [
      _c("text", [_vm._v("购买数量")]),
      _c(
        "view",
        { staticClass: "confirm_order_right" },
        [
          _c(
            "button",
            {
              staticClass: "goods_popup_num_button",
              attrs: { eventid: "3542e027-2" },
              on: {
                tap: function($event) {
                  _vm.reduce()
                }
              }
            },
            [_vm._v("-")]
          ),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.goods_num,
                expression: "goods_num"
              }
            ],
            staticClass: "goods_popup_num_input",
            attrs: { type: "text", eventid: "3542e027-3" },
            domProps: { value: _vm.goods_num },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.goods_num = $event.target.value
              }
            }
          }),
          _c(
            "button",
            {
              staticClass: "goods_popup_num_button",
              attrs: { eventid: "3542e027-4" },
              on: {
                tap: function($event) {
                  _vm.add()
                }
              }
            },
            [_vm._v("+")]
          )
        ],
        1
      )
    ]),
    _c("view", { staticClass: "confirm_order" }, [
      _c("text", [_vm._v("运费")]),
      _c("text", [_vm._v(_vm._s(_vm.transportprice) + "元")])
    ]),
    _vm._m(0),
    _c("view", { staticClass: "order_footer" }, [
      _c("view", { staticClass: "order_footer_left" }, [
        _c("text", [_vm._v("实付积分:")]),
        _c("view", { staticClass: "order_footer_left_jf" }, [
          _vm._v(
            _vm._s(_vm.goods.integral * _vm.goods_num + _vm.transportprice)
          )
        ]),
        _c("text", { staticClass: "order_footer_left_yf" }, [
          _vm._v("(含运费)")
        ])
      ]),
      _c("view", { staticClass: "order_footer_right" }, [_vm._v("提交订单")])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "confirm_order" }, [
      _c("text", [_vm._v("买家留言")]),
      _c("input", {
        staticClass: "confirm_order_input",
        attrs: { type: "text", placeholder: "请输入留言" }
      })
    ])
  }
]
render._withStripped = true



/***/ })

},[["../../../../../Desktop/bus/main.js?{\"page\":\"pages%2Fgoods%2Fconfirm-oreder%2Fconfirm-oreder\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/goods/confirm-oreder/confirm-oreder.js.map