(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/goods/goods-details/goods-details"],{

/***/ "../../../../../Desktop/bus/main.js?{\"page\":\"pages%2Fgoods%2Fgoods-details%2Fgoods-details\"}":
/*!*************************************************************************************************!*\
  !*** C:/Users/新中融/Desktop/bus/main.js?{"page":"pages%2Fgoods%2Fgoods-details%2Fgoods-details"} ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ "../../../../../Desktop/bus/pages.json");
var _mpvuePageFactory = _interopRequireDefault(__webpack_require__(/*! mpvue-page-factory */ "./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mpvue-page-factory/index.js"));
var _goodsDetails = _interopRequireDefault(__webpack_require__(/*! ./pages/goods/goods-details/goods-details.vue */ "../../../../../Desktop/bus/pages/goods/goods-details/goods-details.vue"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
Page((0, _mpvuePageFactory.default)(_goodsDetails.default));

/***/ }),

/***/ "../../../../../Desktop/bus/pages/goods/goods-details/goods-details.vue":
/*!****************************************************************************!*\
  !*** C:/Users/新中融/Desktop/bus/pages/goods/goods-details/goods-details.vue ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _goods_details_vue_vue_type_template_id_86f271fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goods-details.vue?vue&type=template&id=86f271fa& */ "../../../../../Desktop/bus/pages/goods/goods-details/goods-details.vue?vue&type=template&id=86f271fa&");
/* harmony import */ var _goods_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goods-details.vue?vue&type=script&lang=js& */ "../../../../../Desktop/bus/pages/goods/goods-details/goods-details.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _goods_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _goods_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _goods_details_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goods-details.vue?vue&type=style&index=0&lang=css& */ "../../../../../Desktop/bus/pages/goods/goods-details/goods-details.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../Downloads/HBuilderX.1.7.0.20190314/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _goods_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _goods_details_vue_vue_type_template_id_86f271fa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _goods_details_vue_vue_type_template_id_86f271fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "Desktop/bus/pages/goods/goods-details/goods-details.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "../../../../../Desktop/bus/pages/goods/goods-details/goods-details.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************!*\
  !*** C:/Users/新中融/Desktop/bus/pages/goods/goods-details/goods-details.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX.1.7.0.20190314/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Downloads/HBuilderX.1.7.0.20190314/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../Downloads/HBuilderX.1.7.0.20190314/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!../../../../../Downloads/HBuilderX.1.7.0.20190314/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../Downloads/HBuilderX.1.7.0.20190314/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./goods-details.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../Desktop/bus/pages/goods/goods-details/goods-details.vue?vue&type=script&lang=js&");
/* harmony import */ var _Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_details_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../Desktop/bus/pages/goods/goods-details/goods-details.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************!*\
  !*** C:/Users/新中融/Desktop/bus/pages/goods/goods-details/goods-details.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_details_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX.1.7.0.20190314/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../Downloads/HBuilderX.1.7.0.20190314/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!../../../../../Downloads/HBuilderX.1.7.0.20190314/HBuilderX/plugins/uniapp-cli/node_modules/css-loader??ref--6-oneOf-1-2!../../../../../Downloads/HBuilderX.1.7.0.20190314/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../Downloads/HBuilderX.1.7.0.20190314/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../Downloads/HBuilderX.1.7.0.20190314/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./goods-details.vue?vue&type=style&index=0&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../Desktop/bus/pages/goods/goods-details/goods-details.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_details_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_details_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_details_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_details_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_1_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_6_oneOf_1_2_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_details_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "../../../../../Desktop/bus/pages/goods/goods-details/goods-details.vue?vue&type=template&id=86f271fa&":
/*!***********************************************************************************************************!*\
  !*** C:/Users/新中融/Desktop/bus/pages/goods/goods-details/goods-details.vue?vue&type=template&id=86f271fa& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_details_vue_vue_type_template_id_86f271fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX.1.7.0.20190314/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../Downloads/HBuilderX.1.7.0.20190314/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../Downloads/HBuilderX.1.7.0.20190314/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../Downloads/HBuilderX.1.7.0.20190314/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib??vue-loader-options!./goods-details.vue?vue&type=template&id=86f271fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../Desktop/bus/pages/goods/goods-details/goods-details.vue?vue&type=template&id=86f271fa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_details_vue_vue_type_template_id_86f271fa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Downloads_HBuilderX_1_7_0_20190314_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_goods_details_vue_vue_type_template_id_86f271fa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib/index.js?!../../../../../Desktop/bus/pages/goods/goods-details/goods-details.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/新中融/Desktop/bus/pages/goods/goods-details/goods-details.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default =




































































































{
  data: function data() {
    var gid = '';
    var attribute = {};
    return {
      datas: [],
      banner: {
        indicatorColor: '#FFFFFF',
        indicatorActiveColor: '#F6156D',
        circular: true,
        indicatorDots: true },

      active: false,
      spec_index: '',
      goods_num: 1 };

  },

  onLoad: function onLoad(e) {var _this = this;
    var token = uni.getStorageSync("user_info").token;
    uni.request({
      url: 'http://bus.liebianzhe.com/api/order/goods_details',
      method: 'POST',
      data: {
        token: token,
        gid: e.id },

      success: function success(res) {
        console.info(res.data);
        console.log('好嗨哦');
        if (res.data.code == 1) {
          _this.datas = res.data.data;
          _this.gid = res.data.data.id;
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
    popup_active: function popup_active() {
      this.active = !this.active;
    },
    goods_popup_spec: function goods_popup_spec(index1, index) {
      this.spec_index = index1;
      var attribute = {};
      attribute[index] = index1;
      this.attribute = JSON.stringify(attribute);
    },
    reduce: function reduce() {
      this.goods_num == 1 ? this.goods_num = 1 : this.goods_num = parseInt(this.goods_num) - 1;
    },
    add: function add() {
      this.goods_num = parseInt(this.goods_num) + 1;
    },
    exchange: function exchange() {
      var gid = this.gid,
      attribute = this.attribute,
      goods_num = this.goods_num,
      token = uni.getStorageSync("user_info").token;;
      if (attribute == null) {
        uni.showToast({
          title: '请先选择规格',
          mask: false,
          duration: 1500,
          icon: 'none' });

      } else {
        uni.request({
          url: 'http://bus.liebianzhe.com/api/order/place_order',
          method: 'POST',
          data: {
            token: token,
            gid: gid,
            num: goods_num,
            attribute: attribute },

          success: function success(res) {
            if (res.data.code == 1) {
              console.info(res.data);
              uni.setStorageSync('oreder_num', res.data.data);
              uni.showToast({
                title: res.data.msg,
                mask: false,
                duration: 1500,
                icon: 'none' });

              setTimeout(function () {
                uni.navigateTo({
                  url: '../confirm-oreder/confirm-oreder?address_type=0' });

              }, 2000);
            } else {
              uni.showToast({
                title: res.data.msg,
                mask: false,
                duration: 1500,
                icon: 'none' });

            }
          },
          fail: function fail() {
            console.info("请求失败~");
          } });

      }
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ "./node_modules/@dcloudio/uni-mp-weixin/dist/index.js")["default"]))

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!../../../../../Desktop/bus/pages/goods/goods-details/goods-details.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-1!./node_modules/css-loader??ref--6-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/新中融/Desktop/bus/pages/goods/goods-details/goods-details.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/index.js?!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib/index.js?!../../../../../Desktop/bus/pages/goods/goods-details/goods-details.vue?vue&type=template&id=86f271fa&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!C:/Users/新中融/Desktop/bus/pages/goods/goods-details/goods-details.vue?vue&type=template&id=86f271fa& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    _c("view", { staticClass: "uni-padding-wrap" }, [
      _c("view", { staticClass: "page-section swiper" }, [
        _c(
          "view",
          { staticClass: "page-section-spacing" },
          [
            _c(
              "swiper",
              {
                staticClass: "swiper",
                attrs: {
                  "indicator-dots": _vm.banner.indicatorDots,
                  "indicator-color": _vm.banner.indicatorColor,
                  "indicator-active-color": _vm.banner.indicatorActiveColor,
                  circular: _vm.banner.circular,
                  autoplay: "true"
                }
              },
              _vm._l(_vm.datas.carousel, function(item, index) {
                return _c(
                  "swiper-item",
                  { key: index, attrs: { mpcomid: "3d960a3f-0-" + index } },
                  [
                    _c("view", { staticClass: "swiper-item" }, [
                      _c("image", { attrs: { src: item } })
                    ])
                  ]
                )
              })
            )
          ],
          1
        )
      ])
    ]),
    _c("view", { staticClass: "goods_info" }, [
      _c("view", { staticClass: "exchange" }, [
        _c("view", { staticClass: "exchange_left" }, [
          _c("text", [_vm._v("兑换价：")]),
          _c("text", { staticClass: "exchange_left_text" }, [
            _vm._v(_vm._s(_vm.datas.integral) + "积分")
          ])
        ]),
        _c("view", { staticClass: "exchange_right" }, [
          _vm._v("兑换量：" + _vm._s(_vm.datas.alnumber))
        ])
      ]),
      _c("view", { staticClass: "goods_info_title" }, [
        _vm._v(_vm._s(_vm.datas.goods_name))
      ]),
      _c("view", { staticClass: "goods_info_desc" }, [
        _vm._v(_vm._s(_vm.datas.desc))
      ]),
      _c(
        "view",
        { staticStyle: { "margin-top": "40rpx" } },
        _vm._l(_vm.datas.attribute, function(item, index) {
          return _c(
            "view",
            { key: index, staticClass: "goods_info_spec" },
            [
              _c("text", [_vm._v(_vm._s(item.attr_name) + "：")]),
              _vm._l(item.spec_name, function(item1, index1) {
                return _c(
                  "view",
                  { key: index1, staticClass: "goods_info_spec_content" },
                  [_vm._v(_vm._s(item1))]
                )
              })
            ],
            2
          )
        })
      )
    ]),
    _c("view", { staticClass: "comment" }, [
      _vm.datas.evaluate.length !== 0
        ? _c("view", { staticClass: "comment_content" }, [
            _c("view", { staticClass: "comment_title" }, [
              _c("view", { staticClass: "comment_title_left" }, [
                _vm._v("商品评论(" + _vm._s(_vm.datas.evaluate.all_count) + ")")
              ]),
              _vm._m(0)
            ]),
            _c("view", { staticClass: "comment_user_info" }, [
              _c("image", { attrs: { src: _vm.datas.evaluate.headimgurl } }),
              _c("text", [_vm._v(_vm._s(_vm.datas.evaluate.nickname))])
            ]),
            _c("view", { staticClass: "comment_view" }, [
              _vm._v(_vm._s(_vm.datas.evaluate.content))
            ]),
            _c(
              "view",
              { staticClass: "comment_image" },
              _vm._l(_vm.datas.evaluate.pic, function(item, index) {
                return _c("image", { key: index, attrs: { src: item } })
              })
            )
          ])
        : _c("view", { staticClass: "comment_content1" }, [_vm._v("暂无评论")]),
      _c("view", { staticClass: "goods_detais_title" }, [_vm._v("商品详情")]),
      _c(
        "view",
        { staticClass: "goods_detais" },
        [
          _c("rich-text", {
            attrs: { nodes: _vm.datas.detail, mpcomid: "3d960a3f-1" }
          })
        ],
        1
      )
    ]),
    _c("view", { staticClass: "goods_footer" }, [
      _vm._m(1),
      _c(
        "view",
        {
          staticClass: "goods_footer_dh",
          attrs: { eventid: "3d960a3f-0" },
          on: {
            tap: function($event) {
              _vm.popup_active()
            }
          }
        },
        [_vm._v("立即兑换")]
      )
    ]),
    _c("view", {
      staticClass: "backdrop",
      class: { active_popup: _vm.active },
      attrs: { eventid: "3d960a3f-1" },
      on: {
        tap: function($event) {
          _vm.popup_active()
        }
      }
    }),
    _c(
      "view",
      { staticClass: "goods_popup", class: { active_popup: _vm.active } },
      [
        _c("view", { staticClass: "goods_popup_title" }, [
          _c("view", { staticClass: "goods_popup_title_left" }, [
            _c("image", { attrs: { src: _vm.datas.cover } }),
            _c("view", { staticClass: "goods_popup_title_left_info" }, [
              _c("text", { staticClass: "goods_popup_title_left_info_jf" }, [
                _vm._v(_vm._s(_vm.datas.integral) + "积分")
              ]),
              _c("view", { staticClass: "goods_popup_title_left_info_name" }, [
                _vm._v(_vm._s(_vm.datas.goods_name))
              ])
            ])
          ]),
          _c("view", { staticClass: "goods_popup_title_right" }, [
            _c("image", {
              attrs: {
                src: "../../../static/goods_close.png",
                eventid: "3d960a3f-2"
              },
              on: {
                tap: function($event) {
                  _vm.popup_active()
                }
              }
            })
          ])
        ]),
        _vm._l(_vm.datas.attribute, function(item, index) {
          return _c("view", { key: index, staticClass: "goods_popup_spec" }, [
            _c("view", { staticClass: "goods_popup_spec_title" }, [
              _vm._v("选择 " + _vm._s(item.attr_name))
            ]),
            _c(
              "view",
              { staticClass: "goods_popup_spec_content" },
              _vm._l(item.spec_name, function(item1, index1) {
                return _c(
                  "view",
                  {
                    key: index1,
                    staticClass: "goods_popup_spec_content_view",
                    class: [
                      _vm.spec_index == index1 ? "goods_popup_spec_active" : ""
                    ],
                    attrs: { eventid: "3d960a3f-3-" + index + "-" + index1 },
                    on: {
                      tap: function($event) {
                        _vm.goods_popup_spec(index1, index)
                      }
                    }
                  },
                  [_vm._v(_vm._s(item1))]
                )
              })
            )
          ])
        }),
        _c("view", { staticClass: "goods_popup_num" }, [
          _c("view", { staticClass: "goods_popup_num_left" }, [
            _vm._v("购买数量")
          ]),
          _c(
            "view",
            { staticClass: "goods_popup_num_right" },
            [
              _c(
                "button",
                {
                  staticClass: "goods_popup_num_button",
                  attrs: { eventid: "3d960a3f-4" },
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
                attrs: { type: "text", eventid: "3d960a3f-5" },
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
                  attrs: { eventid: "3d960a3f-6" },
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
        _c(
          "view",
          { staticClass: "goods_popup_sub" },
          [
            _c(
              "button",
              {
                attrs: { eventid: "3d960a3f-7" },
                on: {
                  tap: function($event) {
                    _vm.exchange()
                  }
                }
              },
              [_vm._v("立即兑换")]
            )
          ],
          1
        )
      ],
      2
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "comment_title_right" }, [
      _c("text", [_vm._v("查看全部")]),
      _c("image", { attrs: { src: "../../../static/goods_back.png" } })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("view", { staticClass: "goods_footer_kf" }, [
      _c("image", { attrs: { src: "../../../static/goods_kf.png" } }),
      _c("text", [_vm._v("客服")])
    ])
  }
]
render._withStripped = true



/***/ })

},[["../../../../../Desktop/bus/main.js?{\"page\":\"pages%2Fgoods%2Fgoods-details%2Fgoods-details\"}","common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/goods/goods-details/goods-details.js.map