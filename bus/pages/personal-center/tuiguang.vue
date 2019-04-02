<template>
	<div class="content" :style="{width:Screen_width+'px',height:Screen_height+'px'}">
		<div class="img"><img src="../../static/出行有优惠分享能赚钱.png" alt="" /></div>
		<div class="but">
			<button @tap="onShareAppMessage" open-type="share">立即分享给好友</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				// key: value
			}
		},
		computed: {
		    Screen_width() {
		        return uni.getSystemInfoSync().windowWidth;
		    },
			Screen_height(){
				return uni.getSystemInfoSync().windowHeight;
			}
		},
		onLoad() {
			wx.showShareMenu({
				withShareTicket: true
			  })
		},
		methods:{
				//转发
				onShareAppMessage: function () {
					let that =this;
					  return {
						title: '简直走别拐弯', // 转发后 所显示的title
						path: '/pages/personal-center/tuiguang', // 相对的路径
						success: (res)=>{    // 成功后要做的事情
						  console.log(res.shareTickets[0])
						  // console.log
						 
						  wx.getShareInfo({
							shareTicket: res.shareTickets[0],
							success: (res)=> { 
// 							  that.setData({
// 								isShow:true
// 							  }) 
// 							  console.log(that.setData.isShow)
							 },
							fail: function (res) { console.log(res) },
							complete: function (res) { console.log(res) }
						  })
						},
						fail: function (res) {
						  // 分享失败
						  console.log(res)
						}
					}
				}
		}
	}
</script>

<style>
	.content{
		background: rgb(234,233,238);
		padding-top: 26upx;
	}
	.img{
	width: 100%;
	height: 329upx;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 547upx;
	margin-top: 34upx;
}
.img img{
	width: 619upx;
	height: 329upx;
}
.but{
	width: 100%;
	height: 103upx;
	text-align: center;
}
.but button{
	width: 610upx;
	height: 103upx;
	border-radius: 200upx;
	background: rgb(249,78,120);
	color: #FFFFFF;
	font-size: 30upx;
	text-align: center;
	line-height: 103upx;
}
</style>
