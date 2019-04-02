<template>
	<!-- <div>我的预约</div> -->
	<div class="sec">
		<div class="box_one">
			<img src="../../static/3_03.png" alt="" class="yh_p"/>
			<div class="box_content">
				<p class="slt">水龙头出现破了</p>
				<p class="sdg">水电工.其他</p>
				<p class="time">2018-12-01</p>
				<p class="sdg"><img src="../../static/4.7.1.png" alt="" />上海市黄浦区北京东路688号</p>
				<div class="p_button">
					<button class="wjd">暂未接单</button>
				</div>
			</div>
		</div>
		<div class="box_one">
			<img src="../../static/3_03.png" alt="" class="yh_p"/>
			<div class="box_content">
				<p class="slt">水龙头出现破了</p>
				<p class="sdg">水电工.其他</p>
				<p class="time">2018-12-01</p>
				<p class="sdg"><img src="../../static/4.7.1.png" alt="" />上海市黄浦区北京东路688号</p>
				<div class="p_button">
					<button>已接单</button>
					<button class="none_order">暂未接单</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			var token = (uni.getStorageSync("user_info")).token;
			console.log(token);
// 			uni.request({
// 				url:'http://bus.liebianzhe.com/login/isflag',
// 				data:{
// 					token:token
// 				},
// 				success: (res) => {
// 					console.log(res)
// 					return
// 				}
// 			})
			uni.request({
				url:'http://bus.liebianzhe.com/api/user/my_release_lists',
				data:{
					token:token
				},
				success: (res) => {
					console.log(res)
				}
			})
		},
		methods:{
			
		}
	}
</script>

<style>
	.box_one{
	width: 700upx;
	/*height: 3rem;*/
	background: #fff;
	margin: auto;
	box-shadow: 0 0 1px 0 #ddd;
	display: flex;
	/* flex-direction: column; */
	padding: 8upx;
	margin-top: 20upx;
}
.yh_p{
	width: 138upx;
	height: 164upx;
	margin-right: 89upx;
}
.box_content{
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	width:450upx ;
	height: 100%;
}
.box_content p{
	margin-bottom: 15upx;
	/*height: 0.29rem;*/
}
.box_content img{
	width: 60upx;
    height: 50upx;
	margin-right: 15upx;
}
.slt{
	font-size: 30upx;
	font-weight: bold;
	color:rgb(51,51,51) ;
	letter-spacing:2upx;
	overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 400upx;
	
}
.box_c{
	display: flex;
	width: 100%;
	border-bottom: 1px solid;
	border-bottom-color: #ddd;
	/*margin-bottom: 0.1rem;*/
}
.sdg{
	/*height: 0.35rem!important;*/
	display: flex;
	font-size: 24upx;
	color:rgb(51,51,51) ;
}
.time{
	font-size: 20upx;
	color: rgb(102,102,102);
}
.p_button{
	/*padding-left: 2.26rem;*/
	display: flex;
	justify-content: flex-end;
	margin-right: 10upx;
    height: 60upx;
    align-items: center;
    margin-top: 8upx;
}
.wjd{
	width: 179upx;
	height: 48upx;
	background:rgb(216,53,96) ;
	color: #fff;
	margin-left: 250upx;
	font-size: 24upx;
	color: #fff;
	border-radius: 20upx;
	margin-top: 10upx;
	line-height: 48upx;
	text-align: center;
	padding: 0;
}
.p_button button{
	width: 179upx;
	height: 48upx;
	font-size: 24upx;
	margin-right:18upx;
	border-radius: 20upx;
	line-height: 48upx;
	background: #fff;
	color: rgb(102,102,102);
	text-align: center;
	padding: 0;
	box-shadow: 0 0 1px 0 #212121;
}
.none_order{
	background: rgb(216,53,96)!important;
	color: #fff!important;
}
</style>
