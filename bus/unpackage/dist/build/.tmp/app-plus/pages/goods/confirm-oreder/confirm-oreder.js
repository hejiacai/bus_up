(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/confirm-oreder/confirm-oreder"],{"192e":function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{address:{},goods:{},goods_num:"",ordernum:"",transportprice:""}},onLoad:function(e){var s=this,o=t.getStorageSync("user_info").token,a=t.getStorageSync("oreder_num");t.request({url:"http://bus.liebianzhe.com/api/order/do_order",method:"POST",data:{token:o,ordernum:a},success:function(o){1==o.data.code?(console.info(o.data),s.goods=o.data.data.goods,s.goods_num=o.data.data.goods_num,s.ordernum=o.data.data.ordernum,s.transportprice=o.data.data.transportprice,0==e.address_type&&(s.address=o.data.data.address)):10==o.data.code?(t.removeStorage({key:"user_info"}),t.showToast({title:o.data.msg,icon:"none",mask:!1,duration:1e3}),setTimeout(function(){t.reLaunch({url:"../../login/login"})},1500)):t.showToast({title:o.data.msg,icon:"none",mask:!1,duration:1e3})},fail:function(){console.info("请求失败~")}})},methods:{reduce:function(){1==this.goods_num?this.goods_num=1:this.goods_num=parseInt(this.goods_num)-1},add:function(){this.goods_num=parseInt(this.goods_num)+1},my_address:function(){t.navigateTo({url:"../my-address/my-address"})}}};e.default=s}).call(this,s("649d")["default"])},"2f43":function(t,e,s){"use strict";s.r(e);var o=s("192e"),a=s.n(o);for(var r in o)"default"!==r&&function(t){s.d(e,t,function(){return o[t]})}(r);e["default"]=a.a},"38ce":function(t,e,s){},5890:function(t,e,s){"use strict";s("c16c");var o=r(s("b0ce")),a=r(s("f7f7"));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(a.default))},ed56:function(t,e,s){"use strict";var o=s("38ce"),a=s.n(o);a.a},f7f7:function(t,e,s){"use strict";s.r(e);var o=s("fe3c"),a=s("2f43");for(var r in a)"default"!==r&&function(t){s.d(e,t,function(){return a[t]})}(r);s("ed56");var n=s("2877"),d=Object(n["a"])(a["default"],o["a"],o["b"],!1,null,null,null);d.options.__file="confirm-oreder.vue",e["default"]=d.exports},fe3c:function(t,e,s){"use strict";var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",[s("view",{staticClass:"order_address",attrs:{eventid:"8a752b70-1"},on:{tap:function(e){t.my_address()}}},[s("view",{staticClass:"order_address_left"},[s("view",{staticClass:"addressee"},[s("text",[t._v("收件人:")]),s("view",{staticClass:"addressee_name"},[t._v(t._s(t.address.username))]),s("text",[t._v(t._s(t.address.phone))])]),s("view",{staticClass:"goods_address"},[s("view",{staticClass:"goods_address_left"},[s("text",[t._v("收件地址:")]),s("view",{staticClass:"goods_address_left_view"},[t._v(t._s(t.address.city)+t._s(t.address.address))])])])]),s("view",{staticClass:"goods_address_right",attrs:{eventid:"8a752b70-0"},on:{tap:t.my_address}},[t._v(">")])]),s("view",{staticClass:"goods_title"},[t._v("产品信息")]),s("view",{staticClass:"goods_info"},[s("image",{attrs:{src:t.goods.cover}}),s("view",{staticClass:"goods_info_right"},[s("view",{staticClass:"goods_info_right_name"},[t._v(t._s(t.goods.goods_name))]),s("text",[t._v(t._s(t.goods.attribute))]),s("text",{staticClass:"goods_info_right_jf"},[t._v(t._s(t.goods.integral)+"积分")])])]),s("view",{staticClass:"confirm_order"},[s("text",[t._v("购买数量")]),s("view",{staticClass:"confirm_order_right"},[s("button",{staticClass:"goods_popup_num_button",attrs:{eventid:"8a752b70-2"},on:{tap:function(e){t.reduce()}}},[t._v("-")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.goods_num,expression:"goods_num"}],staticClass:"goods_popup_num_input",attrs:{type:"text",eventid:"8a752b70-3"},domProps:{value:t.goods_num},on:{input:function(e){e.target.composing||(t.goods_num=e.target.value)}}}),s("button",{staticClass:"goods_popup_num_button",attrs:{eventid:"8a752b70-4"},on:{tap:function(e){t.add()}}},[t._v("+")])],1)]),s("view",{staticClass:"confirm_order"},[s("text",[t._v("运费")]),s("text",[t._v(t._s(t.transportprice)+"元")])]),t._m(0),s("view",{staticClass:"order_footer"},[s("view",{staticClass:"order_footer_left"},[s("text",[t._v("实付积分:")]),s("view",{staticClass:"order_footer_left_jf"},[t._v(t._s(t.goods.integral*t.goods_num+t.transportprice))]),s("text",{staticClass:"order_footer_left_yf"},[t._v("(含运费)")])]),s("view",{staticClass:"order_footer_right"},[t._v("提交订单")])])])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"confirm_order"},[s("text",[t._v("买家留言")]),s("input",{staticClass:"confirm_order_input",attrs:{type:"text",placeholder:"请输入留言"}})])}];s.d(e,"a",function(){return o}),s.d(e,"b",function(){return a})}},[["5890","common/runtime","common/vendor"]]]);