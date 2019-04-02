<template>
	<view>
		<view class="order_address"  @tap="my_address()">
			<view class="order_address_left">
				<view class="addressee">
					<text>收件人:</text>
					<view class="addressee_name">{{address.username}}</view>
					<text>{{address.phone}}</text>
				</view>
				<view class="goods_address">
					<view class="goods_address_left">
						<text>收件地址:</text>
						<view class="goods_address_left_view">{{address.city}}{{address.address}}</view>
					</view>					
				</view>
			</view>
			<view class="goods_address_right" @tap="my_address">></view>
			<!-- <image src="../../../static/order_right.png"></image> -->
		</view>
		<view class="goods_title">产品信息</view>
		<view class="goods_info">
			<image :src="goods.cover"></image>
			<view class="goods_info_right">
				<view class="goods_info_right_name">{{goods.goods_name}}</view>
				<text>{{goods.attribute}}</text>
				<text class="goods_info_right_jf">{{goods.integral}}积分</text>
			</view>
		</view>
		<view class="confirm_order">
			<text>购买数量</text>
			<view class="confirm_order_right">
				<button class="goods_popup_num_button" @tap="reduce()">-</button>
				<input type="text" class="goods_popup_num_input" v-model="goods_num"/>
				<button class="goods_popup_num_button" @tap="add()">+</button>
			</view>
		</view>
		<view class="confirm_order">
			<text>运费</text>
			<text>{{transportprice}}元</text>
		</view>
		<view class="confirm_order">
			<text>买家留言</text>
			<input type="text" class="confirm_order_input" placeholder="请输入留言"/>
		</view>
		<view class="order_footer">
			<view class="order_footer_left">
				<text>实付积分:</text>
				<view class="order_footer_left_jf">{{goods.integral*goods_num+transportprice}}</view>
				<text class="order_footer_left_yf">(含运费)</text>
			</view>
			<view class="order_footer_right">提交订单</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				address:{},
				goods:{},
				goods_num:'',
				ordernum:'',
				transportprice:''
			};
		},
		onLoad:function(e){
			var token=(uni.getStorageSync("user_info")).token;
			var oreder_num=uni.getStorageSync("oreder_num");
			uni.request({
				url: 'http://bus.liebianzhe.com/api/order/do_order',
				method: 'POST',
				data: {
					token:token,
					ordernum:oreder_num
				},
				success: res => {
					if(res.data.code==1){
						console.info(res.data);
						this.goods=res.data.data.goods;
						this.goods_num=res.data.data.goods_num;
						this.ordernum=res.data.data.ordernum;
						this.transportprice=res.data.data.transportprice;
						if(e.address_type==0){
							this.address=res.data.data.address
						}
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
								url:'../../login/login'
							})
						},1500)
						
					}else{
						uni.showToast({
							title: res.data.msg,
							icon:'none',
							mask: false,
							duration: 1000
						});
					}
				},
				fail: () => {
					console.info("请求失败~");
				},
			});
		},
		methods:{
			reduce(){
				this.goods_num==1?this.goods_num=1:this.goods_num=parseInt(this.goods_num)-1
			},
			add(){
				this.goods_num=parseInt(this.goods_num)+1;
			},
			my_address(){
				uni.navigateTo({
					url: '../my-address/my-address',
				});
			}
		}
	}
</script>

<style>
	.order_footer_right{width: 295upx;display: flex;align-items: center;justify-content: center;background-color: #F64570;color: #FFFFFF;font-size: 36upx;}
	.order_footer_left_yf{font-size: 24upx;color: #919191;font-weight: 500;}
	.order_footer_left_jf{color: #F5021C;margin: 0 10upx;}
	.order_footer_left{width: 455upx;height: 100%;display: flex;align-items: center;padding-left:30upx;font-size: 30upx;font-weight: bold;}
	.order_footer{height: 100upx;display: flex;position: fixed;bottom: 0;background-color: #FFFFFF;}
	.confirm_order_input{width: 550upx;font-size: 30upx;border: none;}
	.goods_popup_num_button{width: 50upx;height: 50upx;font-size: 36upx;background-color: #ECECEC;padding: 0;margin: 0;display: flex;justify-content: center;align-items: center;}
	.goods_popup_num_input{width: 60upx;height: 50upx;font-size: 30upx;background-color: #ECECEC;text-align: center;margin: 0 5upx;}
	.confirm_order_right{display: flex;align-items: center;}
	.confirm_order:last-child{border-bottom: none;}
	.confirm_order{height: 116upx;background-color: #FFFFFF;padding: 0 30upx;display: flex;justify-content: space-between;align-items: center;font-size: 30upx;border-bottom: 1px solid #E8E5E5;}
	.goods_info_right_jf{font-size: 30upx;color: #F9021E;}
	.goods_info_right_name{font-size: 28upx;font-weight: bold;color: #2E2E2E;width: 400upx;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;}
	.goods_info_right{display: flex;flex-direction: column;font-size: 20upx;color: #5D5D5D;}
	.goods_info image{width: 174upx;height: 138upx;margin-right: 60upx;}
	.goods_info{height: 185upx;padding: 0 30upx;display: flex;align-items: center;}
	.goods_title{font-size: 30upx;color: #5D5D5D;padding: 0 30upx;display: flex;align-items: center;height: 90upx;background-color: #FFFFFF;margin-top: 10upx;font-weight: bold;}
	.goods_address_left_view{font-size: 30upx;margin-left: 20upx;width: 470upx;word-wrap:break-word}
	.goods_address_left{font-size: 30upx;display: flex;}
	.order_address image{width: 15upx;height: 25upx;}
	.goods_address{display: flex;align-items: center;}
	.addressee_name{margin: 0 45upx;font-size: 30upx;}
	.addressee{display: flex;font-size: 30upx;}
	.order_address_left{display: flex;flex-direction: column;justify-content: center;}
	.order_address{height: 200upx;padding: 0 30upx;display: flex;justify-content: space-between;background-color: #FFFFFF;align-items: center;
		/* #ifndef MP */
			margin-top: 1px;
		/* #endif */}
	page{background-color: #E7E6EB;}
</style>
