(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/trading-hall/trading-hall"],{4579:function(t,e,a){"use strict";a("c16c");var n=o(a("b0ce")),i=o(a("9bd5"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(i.default))},"555d":function(t,e,a){"use strict";var n=a("83d3"),i=a.n(n);i.a},"59d1":function(t,e,a){"use strict";a.r(e);var n=a("989c"),i=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=i.a},"83d3":function(t,e,a){},"989c":function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{hall_list:[],hall_profit:[]}},onLoad:function(){var e=this,a=t.getStorageSync("user_info").token;t.request({url:"http://bus.liebianzhe.com/api/user/get_user_profit",method:"POST",data:{token:a},success:function(a){console.info(a),1==a.data.code?e.hall_profit=a.data.data:10==a.data.code?(t.removeStorage({key:"user_info"}),t.showToast({title:a.data.msg,icon:"none",mask:!1,duration:1e3}),setTimeout(function(){t.reLaunch({url:"../login/login"})},1500)):t.showToast({title:a.data.msg,icon:"none",mask:!1,duration:1500})},fail:function(){console.info("请求失败~")}}),t.request({url:"http://bus.liebianzhe.com/api/user/tran_lists",method:"POST",data:{token:a},success:function(a){console.info(a),1==a.data.code?e.hall_list=a.data.data:t.showToast({title:a.data.msg,icon:"none",mask:!1,duration:1500})},fail:function(){console.info("请求失败~")}})},methods:{jump_adver:function(){t.navigateTo({url:"../adver_income/adver_income"})},jump_tc:function(){t.navigateTo({url:"../tongcheng_income/tongcheng_income"})},jump_jf:function(){t.navigateTo({url:"../jifen_income/jifen_income"})},jump_tg:function(){t.navigateTo({url:"../tuiguang_income/tuiguang_income"})}}};e.default=a}).call(this,a("649d")["default"])},"9bd5":function(t,e,a){"use strict";a.r(e);var n=a("ce63"),i=a("59d1");for(var o in i)"default"!==o&&function(t){a.d(e,t,function(){return i[t]})}(o);a("555d");var s=a("2877"),l=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,null,null);l.options.__file="trading-hall.vue",e["default"]=l.exports},ce63:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",[a("view",{staticClass:"tab"},[a("view",{staticClass:"tab_body"},[a("view",{staticClass:"tab_content",attrs:{eventid:"39831121-0"},on:{tap:t.jump_tg}},[a("view",{staticClass:"tab_content_yuan blue"},[t._v(t._s(t.hall_profit.tg))]),a("text",[t._v("推广收入")])]),a("view",{staticClass:"tab_content",attrs:{eventid:"39831121-1"},on:{tap:t.jump_jf}},[a("view",{staticClass:"tab_content_yuan yellow"},[t._v(t._s(t.hall_profit.jf))]),a("text",[t._v("积分收入")])]),a("view",{staticClass:"tab_content",attrs:{eventid:"39831121-2"},on:{tap:t.jump_tc}},[a("view",{staticClass:"tab_content_yuan red"},[t._v(t._s(t.hall_profit.tc))]),a("text",[t._v("同城收入")])]),a("view",{staticClass:"tab_content",attrs:{eventid:"39831121-3"},on:{tap:t.jump_adver}},[a("view",{staticClass:"tab_content_yuan green"},[t._v(t._s(t.hall_profit.gg))]),a("text",[t._v("广告收入")])])])]),t._m(0),a("view",{staticClass:"hall_body"},t._l(t.hall_list,function(e,n){return a("view",{key:n,staticClass:"hall_content"},[a("view",{staticClass:"hall_content_left"},[a("image",{attrs:{src:e.headimgurl}})]),a("view",{staticClass:"hall_content_right"},[a("text",{staticClass:"hall_content_right_title"},[t._v(t._s(e.nickname))]),a("view",{staticClass:"hall_content_right_view"},[a("text",{staticClass:"hall_content_right_view_text"},[t._v("出售绿色能源"+t._s(e.num)+"个")]),a("text",[t._v("售价:"+t._s(e.oneprice))])])])])}))])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"hall_title"},[a("view",{staticClass:"hall_title_left"},[a("image",{attrs:{src:"../../static/hall_power.png"}}),a("text",[t._v("能量商城")])]),a("text",[t._v("查看我的出售")])])}];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})}},[["4579","common/runtime","common/vendor"]]]);