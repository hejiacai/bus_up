<template>
	<!-- <view class="">	
	</view> -->
	<view class="box">
		<!-- <view class="status_bar">
			<view class="top_view"></view>
		</view>
		<view class="top">
			<image src="../../static/2_03_03.png" mode=""></image>
			<text>消息列表</text>
		</view> -->
		<view class="sec">
			<view class="system_message" v-for="(message,index) in dataList" :key="index" @tap="jump(message.type)">
				<image :src="message.imgurl" mode=""></image>
				<text class="xtx">{{message.content}}</text>
				<text>></text>
			</view>
		</view>
	</view>
</template>

<script>
	 export default {
			data (){
				return{
					dataList:[
						{
						imgurl:'../../static/消息3.png',
						content:'系统消息',
						type:'message'
						},
						{
						imgurl:'../../static/fensi_inform.png',
						content:'粉丝通知',
						type:'fensi'
						},
						{
						imgurl:'../../static/succeed_friend.png',
						content:'成功好友',
						type:'success'
						},
						{
						imgurl:'../../static/帮助@2x.png',
						content:'帮助好友',
						type:'help'
						},
						{
						imgurl:'../../static/消息3.png',
						content:'消息提醒',
						type:'info'
						}
					]
					
				}
			},
			methods:{
				jump(type){
					if(type=='message'){
						uni.navigateTo({
							url:'../system/system'
						})
					}
					if(type=='fensi'){
						uni.navigateTo({
							url:'../fensi/fensi'
						})
					}
					if(type=='success'){
						uni.navigateTo({
							url:'../success_friend/success_friend'
						})
					}
					if(type=='help'){
						uni.navigateTo({
							url:'../help/help'
						})
					}
					if(type=='info'){
						uni.navigateTo({
							url:'../info/info'
						})
					}
				}
			}
	}
</script>

<style>
	.top{
		    width: 100%;
    height: 120upx;
    padding: 0 0 0 30upx;
    font-size: 36upx;
    color: #a2a2a2;
    font-weight: bold;
    display: flex;
    align-items: center;
    color: #000000;
    background: #fff;
    border-bottom: 1px solid;
    border-bottom-color: #ddd;
    background: #fff;
	}
	.top image{
	margin-right: 210upx;
    width: 40upx;
    height: 40upx;
	}
	.box{
		flex: 1;
        flex-direction: column;
	}
	.status_bar {
	height: var(--status-bar-height);
	width: 100%;
	background-color: #FFFFFF;
	}
	.top_view {
		height: var(--status-bar-height);
		width: 100%;
		position: fixed;
		background-color: #FFFFFF;
		top: 0;
		z-index: 999;
	}
	.sec{
	width: 100%;
	height: 100upx;
	padding-left:30upx ;
	background: #fff;
}
.system_message{
	width: 100%;
	height: 100%;
	border-bottom: 1upx solid;
	border-bottom-color: #ddd;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	
}
.system_message image{
	width: 40upx;
	height: 40upx;
	margin-right: 32upx;
}
.system_message text{
	color: #333;
	font-size: 30upx;
}
.xtx{
	margin-right: 490upx;
}
</style>
