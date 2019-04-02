<template>
    <view>
		<view class="tab">
			<view class="tab_content" v-for="(item,index) in values" :key="index" @tap="tab_change(index)" :class="{tab_active:index===number}">
				{{item}}
			</view>
		</view>
		<view class="box">
			<scroll-view scroll-y="true" class="classic-list">
				<swiper class="swiper" @change="changeSwiper" :current="currentIndex">
					<swiper-item v-for="(item,index) in banner" :key="index">
						<view class="swiper-item">
							<image :src="item.cover"></image>
						</view>
					</swiper-item>
				</swiper>
			</scroll-view>
		</view>
		<view class="master_body" v-show="number===0">
			<view class="master_content" v-for="(item,index) in release_lists" :key="index" v-show="item.status==1">
				<view class="master_content_div">
					<image :src="item.pics" class="master_content_div_left"></image>
					<view class="master_content_div_right">
						<view class="master_content_div_right_title">{{item.title}}</view>
						<view>{{item.wname}}</view>
						<text class="time">{{item.servicetime}}</text>
						<view class="master_content_div_right_address">
							<image src="../../static/city_address.png"></image>
							<view>{{item.city}}{{item.address}}</view>
						</view>
					</view>
				</view>
				<view class="master_content_button">
					<button plain="ture" class="ljck" @tap="junmp_detail">立即查看</button>
					<button class="ljjd" @tap="jump_order">立即接单</button>
				</view>				
			</view>
		</view>
		<view class="master_body" v-show="number===1">
			<view class="master_content1" v-for="(item,index) in release_lists1" :key="index">
				<image :src="item.headimgurl" class="master_content_div_left"></image>
				<view class="master_content_div_right1 master_content_div_right ">
					<view class="master_content_div_right_title1">
						<text>{{item.realname}}</text>
						<view class="call_phone" @tap="call_phone(item.phone)">
							<image src="../../static/city_phone.png" mode=""></image>
							<text>立即联系</text>
						</view>
					</view>
					<view>{{item.wname}}</view>
					<view>工龄:{{item.wyears}}年</view>
					<view class="master_content_div_right_address">
						<image src="../../static/city_address.png"></image>
						<view>{{item.city}}{{item.address}}</view>
					</view>
				</view>
			</view>
			<view class="fabu" @tap="jump_fb">
				<view class="fabu_c">我要发布</view>
			</view>
		</view>
    </view>
</template>

<script>
	export default {
		data() {
			return {
				values:[
					'我是师傅',
					'我找师傅'
				],
				number:0,
				release_lists:[
					{	
						status:1,
						pics:'../../static/city_master.png',
						title:'水龙头出现破了',
						wname:'刘德华',
						servicetime:'2018-02-14',
						city:'重庆市江北区',
						address:'建新东路'
					}
				],
				release_lists1:[
					{
						headimgurl:'../../static/city_master.png',
						realname:'张学友',
						phone:'13696440586',
						wname:'郭富城',
						wyears:'12',
						city:'重庆市江北区',
						address:'建新东路'
					}
				]
			}
		},
		onLoad:function(){
			var token=(uni.getStorageSync("user_info")).token;
// 			uni.request({
// 				url: 'http://bus.liebianzhe.com/api/user/release_lists',
// 				method: 'POST',
// 				data: {
// 					token:token,
// 					type:1
// 				},
// 				success: res => {
// 					console.info(res);
// 					if(res.data.code==1){
// 						this.release_lists=res.data.data;
// 					}else if(res.data.code==10){
// 						uni.removeStorage({
// 							key:'user_info',
// 						})
// 						uni.showToast({
// 							title: res.data.msg,
// 							icon:'none',
// 							mask: false,
// 							duration: 1000
// 						});
// 						setTimeout(function(){
// 							uni.reLaunch({
// 								url:'../login/login'
// 							})
// 						},1500)
// 						
// 					}else{
// 						uni.showToast({
// 							title: res.data.msg,
// 							icon:'none',
// 							mask: false,
// 							duration: 1000
// 						});
// 					}
// 				},
// 				fail: () => {
// 					console.info("请求失败~");
// 				},
// 			});
// 			uni.request({
// 				url: 'http://bus.liebianzhe.com/api/user/release_lists',
// 				method: 'POST',
// 				data: {
// 					token:token,
// 					type:2
// 				},
// 				success: res => {
// 					console.info(res);
// 					if(res.data.code==1){
// 						this.release_lists1=res.data.data;
// 					}else{
// 						uni.showToast({
// 							title: res.data.msg,
// 							icon:'none',
// 							mask: false,
// 							duration: 1000
// 						});
// 					}
// 				},
// 				fail: () => {
// 					console.info("请求失败~");
// 				},
// 			});
		},
		methods: {
			changeSwiper(e){
				this.number = e.detail.current;
			},
			tab_change(index) {
				this.number=index;
			},
			call_phone(phone){
				uni.makePhoneCall({
					phoneNumber:phone
				})
			},
			jump_fb(){
				uni.navigateTo({
					url:'../city-wide/fabu'
				})
			},
			junmp_detail(){
				uni.navigateTo({
					url:'../city-wide/master_detail'
				})
			},
			jump_order(){
				uni.navigateTo({
					url:'../city-wide/liji_order'
				})
			}
		}
	}
</script>

<style>
	.fabu{
		width: 120upx;
		height: 120upx;
		position: fixed;
		bottom: 286upx;
		right: 27upx;
		border-radius: 50%;
		background: #F94E78;
		color: #FFFFFF;
		font-size: 30upx;
		font-weight: bold;
		display: flex;
		padding-top: 21upx;
		box-sizing: border-box;
		justify-content: center;
	}
	.fabu_c{
		width: 60upx;
		height: 60upx;
		word-break: break-word;
	}
	.call_phone image{
		width: 33upx;
		height: 33upx;
		margin-right: 5upx;
	}
	.call_phone{
		display: flex;
		align-items: center;
		font-weight: 400;
	}
	.ljck{
		border-color: #DBDBDB !important;
		color: #5D5D5D;
	}
	.ljjd{
		color: #FFFFFF;
		background: linear-gradient(to right,#D32F58,#F54570);
	}
	.master_content_button button{
		height: 50upx;
		width: 185upx;
		border-radius: 25px;
		font-size: 24upx;
		margin-right: 15upx;
		margin-left: 0;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.master_content_button{
		height: 76upx;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}
	.master_content_div_right_address image{
		width: 20upx;
		height: 26upx;
		margin-right: 10upx;
	}
	.master_content_div_right_address{
		display: flex;
		align-items: center;
	}
	.time{
		font-size: 20upx;
		color: #6A6A6A;
	}
	.master_content_div_right_title1{
		display: flex;
		justify-content: space-between;
	}
	.master_content_div_right_title,.master_content_div_right_title1{
		font-size: 30upx;
		font-weight: bold;
		
	}
	.master_content_div_right view{
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.master_content_div_right1{
		height: 185upx !important;
	}
	.master_content_div_right{
		width: 440upx;
		font-size: 24upx;
		color: #2F2F2F;
		height: 164upx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-left: 90upx;
	}
	.master_content_div_left{
		height: 164upx;
		width: 138upx;
		border-radius: 50%;
	}
	.master_content_div{
		display: flex;
		align-items: center;
		border-bottom: 1px solid #E9E8ED;
		height: 208upx;
		padding-left: 15upx;
	}
	.master_content1{
		height: 220upx;
		display: flex;
		align-items: center;
		padding-left: 15upx;
	}
	.master_content{
		height: 284upx;
	}
	.master_content,.master_content1{
		background-color: #FFFFFF;
		margin-bottom: 20upx;
	}
	.master_body{
		background-color: #E7E6EB;
		padding: 0 25upx;
		padding-bottom: 20upx;
		padding-top: 20upx;
	}
	.tab_active:after{
		content: "";
		height: 2px;
		width:64upx ;
		background-color: #F64570;
		position: absolute;
		bottom: 0;
		left: 50%;
		margin-left: -32upx;
	}
	.tab_content{
		width: 50%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 30upx;
		position: relative;
	}
	.tab{
		height: 96upx;
		background-color: #FFFFFF;
		border-top: 1px solid #F3F2F6;
		display: flex;
	}
	page{
		background-color: #E7E6EB;
	}
</style>
