(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/personal-center/my_jifen"],{1239:function(t,e,n){"use strict";n.r(e);var i=n("1449"),a=n.n(i);for(var u in i)"default"!==u&&function(t){n.d(e,t,function(){return i[t]})}(u);e["default"]=a.a},1449:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{dataList:[{title:"公交车"},{title:"公交车"},{title:"公交车"},{title:"公交车"},{title:"公交车"},{title:"公交车"}]}},computed:{Screen_width:function(){return t.getSystemInfoSync().windowWidth},Screen_height:function(){return t.getSystemInfoSync().windowHeight}},methods:{jump_detail:function(e){t.navigateTo({url:"../personal-center/jifen_detail?id="+e})}},onLoad:function(){}};e.default=n}).call(this,n("649d")["default"])},3847:function(t,e,n){"use strict";n.r(e);var i=n("c6aa"),a=n("1239");for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);n("ffbb");var c=n("2877"),s=Object(c["a"])(a["default"],i["a"],i["b"],!1,null,null,null);s.options.__file="my_jifen.vue",e["default"]=s.exports},"6e94":function(t,e,n){"use strict";n("c16c");var i=u(n("b0ce")),a=u(n("3847"));function u(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},bbeb:function(t,e,n){},c6aa:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"box"},[t._m(0),n("view",{staticClass:"jf_list"},t._l(t.dataList,function(e,i){return n("div",{key:i,staticClass:"jf_list_ch",attrs:{eventid:"d2633210-0-"+i},on:{tap:function(e){t.jump_detail(i)}}},[t._v(t._s(e.title))])}))])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"ji_top"},[n("view",{staticClass:"ji_top_title"},[n("view",[t._v("我的订单")]),n("view",[t._v("兑换详情")])]),n("view",{staticClass:"ji_top_content"},[n("view",{staticClass:"qiu"},[t._v("166分")]),n("view",{staticClass:"sp"},[t._v("我的积分")])])])}];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},ffbb:function(t,e,n){"use strict";var i=n("bbeb"),a=n.n(i);a.a}},[["6e94","common/runtime","common/vendor"]]]);