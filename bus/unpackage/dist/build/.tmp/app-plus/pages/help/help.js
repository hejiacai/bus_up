(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/help/help"],{1485:function(t,e,s){"use strict";s.r(e);var i=s("55c2"),n=s("dec6");for(var a in n)"default"!==a&&function(t){s.d(e,t,function(){return n[t]})}(a);s("2cae");var o=s("2877"),c=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,null,null);c.options.__file="help.vue",e["default"]=c.exports},"2cae":function(t,e,s){"use strict";var i=s("7d0b"),n=s.n(i);n.a},"537b":function(t,e,s){"use strict";s("c16c");var i=a(s("b0ce")),n=a(s("1485"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(n.default))},"55c2":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"content"},t._l(t.NowMessageList,function(e,i){return s("view",{key:i,staticClass:"container_of_slide"},[s("view",{staticClass:"slide_list",style:{transform:"translate3d("+e.slide_x+"px, 0, 0)"},attrs:{eventid:"2cad6ebe-1-"+i},on:{touchstart:function(e){t.touchStart(e,i)},touchend:function(e){t.touchEnd(e,i)},touchmove:function(e){t.touchMove(e,i)},tap:function(e){t.recover(i)}}},[s("view",{staticClass:"now-message-info"},[s("view",{staticClass:"imgInfo",attrs:{eventid:"2cad6ebe-0-"+i},on:{tap:function(e){t.recover(i)}}},[s("image",{attrs:{src:e.img}})]),s("view",{staticClass:"centerInfo"},[s("view",{staticClass:"name"},[s("view",{staticClass:"name_ti"},[t._v(t._s(e.name))]),s("div",{staticClass:"but"},[s("button",[t._v("确认帮助")])],1)]),s("view",{staticClass:"message"},[t._v(t._s(e.message))])])])])])}))},n=[];s.d(e,"a",function(){return i}),s.d(e,"b",function(){return n})},"7cbf":function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={name:"slide-list",computed:{Screen_width:function(){return t.getSystemInfoSync().windowWidth}},data:function(){return{start_slide_x:0,btnWidth:0,startX:0,LastX:0,startTime:0,NowMessageList:[{img:"../../static/1.jpg",name:"狐狸叔叔",message:"今晚去吃饭吗?",time:"19:08",top:0,slide_x:0},{img:"../../static/2.jpg",name:"老虎爸爸",message:"黑发不知勤学早，白首方悔读书迟。 —— 颜真卿《劝学诗》",time:"02:08",top:0,slide_x:0},{img:"../../static/3.jpg",name:"偶遇妹子",message:"忽如一夜春风来，千树万树梨花开。 —— 岑参《白雪歌送武判官归京》",time:"02:08",top:0,slide_x:0},{img:"../../static/4.jpg",name:"男神",message:"寂寞空庭春欲晚，梨花满地不开门。 —— 刘方平《春怨》",time:"23:08",top:0,slide_x:0},{img:"../../static/5.jpg",name:"妹妹",message:"人生若只如初见，何事秋风悲画扇。 —— 纳兰性德《木兰词·拟古决绝词柬友》",time:"02:08",top:0,slide_x:0}]}},onLoad:function(){this.getList()},methods:{getList:function(){var e=1,s=t.getStorageSync("user_info").token;console.log(s),t.request({url:"http://bus.liebianzhe.com/api/user/person_msg",method:"POST",data:{token:s,type:e},success:function(t){console.log(t)}})},touchStart:function(e,s){var i=this;this.startTime=e.timeStamp,this.start_slide_x=this.NowMessageList[s].slide_x,t.createSelectorQuery().selectAll(".group-btn").boundingClientRect().exec(function(t){null!=t[0]&&(i.btnWidth=-1*t[0][s].width)}),this.startX=e.touches[0].pageX,this.lastX=this.startX,this.NowMessageList.forEach(function(t,e){e!==s&&(t.slide_x=0)})},touchMove:function(t,e){var s=t.touches[0].pageX,i=s-this.lastX,n=this.NowMessageList[e].slide_x+i;n<=0&&n>=this.btnWidth&&(this.NowMessageList[e].slide_x=n),this.lastX=s},touchEnd:function(t,e){var s=10,i=t.timeStamp,n=this.startX-this.lastX;Math.abs(i-this.startTime)>200&&(s=this.btnWidth/-2),this.NowMessageList[e].slide_x=n>s?this.btnWidth:n<-1*s?0:this.start_slide_x},recover:function(t){this.NowMessageList[t].slide_x=0},top:function(t){this.NowMessageList[t].slide_x=0},removeM:function(e,s){var i=1,n=t.getStorageSync("user_info").token;this.NowMessageList.splice(e,1),t.request({url:"",method:"POST",data:{type:i,token:n,id:s}})}}};e.default=s}).call(this,s("649d")["default"])},"7d0b":function(t,e,s){},dec6:function(t,e,s){"use strict";s.r(e);var i=s("7cbf"),n=s.n(i);for(var a in i)"default"!==a&&function(t){s.d(e,t,function(){return i[t]})}(a);e["default"]=n.a}},[["537b","common/runtime","common/vendor"]]]);