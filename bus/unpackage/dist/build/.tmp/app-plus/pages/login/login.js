(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"149e":function(t,n,e){"use strict";var o=e("6ea3"),i=e.n(o);i.a},"16aa":function(t,n,e){"use strict";e.r(n);var o=e("930d"),i=e("48f5");for(var a in i)"default"!==a&&function(t){e.d(n,t,function(){return i[t]})}(a);e("149e");var s=e("2877"),r=Object(s["a"])(i["default"],o["a"],o["b"],!1,null,null,null);r.options.__file="login.vue",n["default"]=r.exports},"48f5":function(t,n,e){"use strict";e.r(n);var o=e("6a88"),i=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);n["default"]=i.a},6900:function(t,n,e){"use strict";e("c16c");var o=a(e("b0ce")),i=a(e("16aa"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(i.default))},"6a88":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{}},methods:{getuserinfo:function(){wx.login({success:function(t){console.log(t.code)}})},phone_login:function(){t.navigateTo({url:"../login/login-phone"})},register:function(){t.navigateTo({url:"../register/register"})}}};n.default=e}).call(this,e("649d")["default"])},"6ea3":function(t,n,e){},"930d":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view",{staticClass:"login-body"},[t._m(0),e("view",{staticClass:"login-title"},[t._v("LOGO")]),e("view",{staticClass:"login-button"},[e("button",{attrs:{eventid:"2b9687d6-0"},on:{tap:t.register}},[t._v("注册")])],1),e("view",{staticClass:"login-mode"},[e("view",{staticClass:"login-mode-content",attrs:{eventid:"2b9687d6-1"},on:{tap:t.phone_login}},[e("image",{staticClass:"phone",attrs:{src:"../../static/logo_phone.png",mode:""}}),e("text",[t._v("手机登录")])]),e("view",{staticClass:"login-mode-content",attrs:{"open-type":"getUserInfo",eventid:"2b9687d6-2"},on:{tap:function(n){t.getuserinfo()}}},[e("image",{staticClass:"wx",attrs:{src:"../../static/login_wx.png",mode:""}}),e("text",[t._v("微信登录")])])])])},i=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view",{staticClass:"login-logo"},[e("image",{attrs:{src:"../../static/login_logo.png",mode:""}})])}];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i})}},[["6900","common/runtime","common/vendor"]]]);