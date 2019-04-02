<template>
	<view class="box">
		<view class="ji_top">
			<view class="ji_top_title">
				<view>我的订单</view><view>兑换详情</view>
			</view>
			<view class="ji_top_content">
				<view class="qiu">166分</view>
				<view class="sp">我的积分</view>
			</view>
		</view>
		<view class="jf_list">
			<div class="jf_list_ch" v-for="(item,index) in dataList" @tap="jump_detail(index)" :key="index">
				{{item.title}}
			</div>
<!-- 			<div class="jf_list_ch">
				公交模型
			</div>
			<div class="jf_list_ch">
				公交模型
			</div>
			<div class="jf_list_ch">
				公交模型
			</div>
			<div class="jf_list_ch">
				公交模型
			</div>
			<div class="jf_list_ch">
				公交模型
			</div> -->
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dataList:[
					{title:'公交车'},
					{title:'公交车'},
					{title:'公交车'},
					{title:'公交车'},
					{title:'公交车'},
					{title:'公交车'},
				]
			}
		},
		computed:{
			Screen_width (){
				return uni.getSystemInfoSync().windowWidth;
				},
			Screen_height(){
				return uni.getSystemInfoSync().windowHeight;
			}
		},
		methods:{
			jump_detail(index){
				uni.navigateTo({
					url:'../personal-center/jifen_detail?id='+index
				})
			}
		},
		onLoad() {
// 			uni.setBackgroundColor({
// 				backgroundColor: "#eae9ee"
// 			});
		}
	}
</script>

<style>
	page{
		background: rgb(234,233,238);
	}
	.jf_list{
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.jf_list_ch{
		width: 218upx;
		height: 249upx;
		background: #FFFFFF;
		border-radius: 10upx;
		margin-bottom: 21upx;
	}	
	.box{
		box-sizing: border-box;
		/* background: rgb(234,233,238); */
		padding: 20upx 29upx 0 29upx;
	}
	
	.ji_top{
		box-sizing: border-box;
		width: 690upx;
		height: 272upx;
		background: #FFFFFF;
		border-radius: 10upx;
		padding: 15upx 10upx 0 10upx;
		margin-bottom: 22upx;
		/* margin: auto; */
		/* margin-top: 20upx; */
	}
	.ji_top_title{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 30upx;
		font-weight: bold;
		margin-bottom: 14upx;
	}
	.ji_top_content{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.qiu{
		width: 100upx;
		height: 100upx;
		line-height: 100upx;
		text-align: center;
		border-radius: 50%;
		background: rgb(50,177,108);
		font-size: 30upx;
		color: #FFFFFF;
		margin-bottom: 24upx;
	}
	.sp{
		color: rgb(51,51,51);
		font-size: 30upx;
		font-weight:bold;
	}
</style>
