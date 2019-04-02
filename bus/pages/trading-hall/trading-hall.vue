<template>
	<view>
		<view class="tab">
			<view class="tab_body">
				<view class="tab_content" @tap="jump_tg"> 
					<view class="tab_content_yuan blue">{{hall_profit.tg}}</view>
					<text>推广收入</text>
				</view>
				<view class="tab_content" @tap="jump_jf">
					<view class="tab_content_yuan yellow">{{hall_profit.jf}}</view>
					<text>积分收入</text>
				</view>
				<view class="tab_content" @tap="jump_tc">
					<view class="tab_content_yuan red">{{hall_profit.tc}}</view>
					<text>同城收入</text>
				</view>
				<view class="tab_content" @tap="jump_adver">
					<view class="tab_content_yuan green">{{hall_profit.gg}}</view>
					<text>广告收入</text>
				</view>
			</view>
		</view>
		<view class="hall_title">
			<view class="hall_title_left">
				<image src="../../static/hall_power.png"></image>
				<text>能量商城</text>
			</view>
				<text>查看我的出售</text>
		</view>
		<view class="hall_body">
			<view class="hall_content" v-for="(item,index) in hall_list" :key="index">
				<view class="hall_content_left">
					<image :src="item.headimgurl"></image>
				</view>
				<view class="hall_content_right">
					<text class="hall_content_right_title">{{item.nickname}}</text>
					<view class="hall_content_right_view">
						<text class="hall_content_right_view_text">出售绿色能源{{item.num}}个</text>
						<text>售价:{{item.oneprice}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hall_list:[],
				hall_profit:[]
			};
		},
		onLoad:function(){
			var token=(uni.getStorageSync("user_info")).token;
			uni.request({
				url: 'http://bus.liebianzhe.com/api/user/get_user_profit',
				method: 'POST',
				data: {
					token:token
				},
				success: res => {
					console.info(res);
					if(res.data.code==1){
						this.hall_profit=res.data.data;
					}else if(res.data.code==10){
						uni.removeStorage({
							key:'user_info',
						})
						uni.showToast({
							title: res.data.msg,
							icon:'none',
							mask: false,
							duration: 1000
						});
						setTimeout(function(){
							uni.reLaunch({
								url:'../login/login'
							})
						},1500)
					}else{
						uni.showToast({
							title: res.data.msg,
							icon:'none',
							mask: false,
							duration: 1500
						});
					}
				},
				fail: () => {
					console.info("请求失败~");
				},
			});
			uni.request({
				url: 'http://bus.liebianzhe.com/api/user/tran_lists',
				method: 'POST',
				data: {
					token:token
				},
				success: res => {
					console.info(res);
					if(res.data.code==1){
						this.hall_list=res.data.data;
					}else{
						uni.showToast({
							title: res.data.msg,
							icon:'none',
							mask: false,
							duration: 1500
						});
					}
				},
				fail: () => {
					console.info("请求失败~");
				},
			});
		},
		methods:{
			jump_adver(){
				uni.navigateTo({
					url:'../adver_income/adver_income'
				})
			},
			jump_tc(){
				uni.navigateTo({
					url:'../tongcheng_income/tongcheng_income'
				})
			},
			jump_jf(){
				uni.navigateTo({
					url:'../jifen_income/jifen_income'
				})
			},
			jump_tg(){
				uni.navigateTo({
					url:'../tuiguang_income/tuiguang_income'
				})
			}
		}
	}
</script>

<style>
	.hall_content_right_view_text{
		color: #727272;
	}
	.hall_content_right_view{
		font-size: 24upx;
		display: flex;
		justify-content: space-between;
	}
	.hall_content_right_title{
		font-size: 30upx;
		font-weight: bold;
	}
	.hall_content_right{
		width: 540upx;
	}
	.hall_content_left image{
		width: 90upx;
		height: 90upx;
		border-radius: 50%;
	}
	.hall_content_left{
		margin-right: 40upx;
		display: flex;
		align-items: center;
		margin-left: 10upx;
	}
	.hall_content{
		height: 150upx;
		background-color: #FFFFFF;
		margin-bottom: 20upx;
		display: flex;
		align-items: center;
	}
	.hall_body{
		padding: 0 25upx;
		margin-top: 36upx;
		margin-bottom: 20upx;
	}
	.hall_title_left image{
		width: 26upx;
		height: 40upx;
		margin-right: 15upx;
	}
	.hall_title_left{
		display: flex;
		align-items: center;
		font-weight: bold;
		font-size: 30upx;
		color: #2E2E2E;
	}
	.hall_title{
		width: 700upx;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 24upx;
		color: #5D5D5D;
		margin-top: 90upx;
	}
	.green{
		background-color: #31A965;
	}
	.red{
		background-color: #E65E99;
	}
	.yellow{
		background-color: #FDC655;
	}
	.blue{
		background-color:#4EA5E2 ;
	}
	.tab_content_yuan{
		width: 110upx;
		height: 110upx;
		border-radius: 50%;
		color: #FFFFFF;
		font-size: 30upx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: 15upx;
	}
	.tab_content text{
		font-weight: bold;
	}
	.tab_content{
		width: 25%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 30upx;
	}
	.tab_body{
		width: 700upx;
		display: flex;
		height: 228upx;
		background-color: #FFFFFF;
		border-radius: 5px;
		margin-top: 30upx;
	}
	.tab{
		height: 200upx;
		background-color: #EA3E69;
		display: flex;
		justify-content: center;
	}
	
	page{
		background-color: #E7E6EB;
	}
</style>
