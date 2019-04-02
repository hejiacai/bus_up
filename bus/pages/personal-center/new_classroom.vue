<template>
	<view class="box">
		<view class="img_o">
			 <image :src="item.videolink" mode="" v-for="(item,index) in imgList" :key="index"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgList:[],
// 				page:1,
// 				pageSize:10
			}
		},
		methods:{
			
		},
		onLoad() {
			var token = (uni.getStorageSync('user_info')).token;
			var page = 1;
			var pageSize = 10;
			console.log(token)
			uni.request({
				url:'http://bus.liebianzhe.com/api/user/np_video',
				data:{
					token:token,
					page:page,
					pageSize:pageSize
				},
				success: (res) => {
					console.log(res)
					if(res.data.code==1){
						this.imgList = res.data.data;
						console.log(this.imgList)
					}
				},
				fail: (res) => {
					uni.showToast({
						title:'网络请求失败'
					})
				}
			})
		}
	}
</script>

<style>
	page{
		background: rgb(234,233,238);
	}
	.img_o{
		width:100%;
		height: 400upx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.img_o image{
		width: 687upx;
		height: 100%;
	}
</style>
