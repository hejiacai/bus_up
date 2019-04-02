<template>
	<view>
		<view class="uni-padding-wrap">
		    <view class="page-section swiper">
		        <view class="page-section-spacing">
		            <swiper class="swiper" :indicator-dots="banner.indicatorDots" :indicator-color="banner.indicatorColor" :indicator-active-color="banner.indicatorActiveColor" 
					:circular="banner.circular" autoplay="true">
		                <swiper-item v-for="(item,index) in datas.carousel" :key="index">
		                    <view class="swiper-item">
								<image :src="item"></image>
							</view>
		                </swiper-item>
		            </swiper>
		        </view>
		    </view>
		</view>
		<view class="goods_info">
			<view class="exchange">
				<view class="exchange_left">
					<text>兑换价：</text>
					<text class="exchange_left_text">{{datas.integral}}积分</text>
				</view>
				<view class="exchange_right">兑换量：{{datas.alnumber}}</view>
			</view>
			<view class="goods_info_title">{{datas.goods_name}}</view>
			<view class="goods_info_desc">{{datas.desc}}</view>
			<view style="margin-top: 40upx;">
				<view class="goods_info_spec" v-for="(item,index) in datas.attribute" :key="index" >
					<text>{{item.attr_name}}：</text>
					<view class="goods_info_spec_content" v-for="(item1,index1) in item.spec_name" :key="index1">{{item1}}</view>
				</view>
			</view>
		</view>
		<view class="comment">
			<view class="comment_content"  v-if="datas.evaluate.length!==0">
				<view class="comment_title">
					<view class="comment_title_left">商品评论({{datas.evaluate.all_count}})</view>
					<view class="comment_title_right">
						<text>查看全部</text>
						<image src="../../../static/goods_back.png"></image>
					</view>
				</view>
				<view class="comment_user_info">
					<image :src="datas.evaluate.headimgurl"></image>
					<text>{{datas.evaluate.nickname}}</text>
				</view>
				<view class="comment_view">{{datas.evaluate.content}}</view>
				<view class="comment_image">
					<image v-for="(item,index) in datas.evaluate.pic" :key="index" :src="item"></image>
				</view>
			</view>
			<view class="comment_content1" v-else>暂无评论</view>
			<view class="goods_detais_title">商品详情</view>
			<view class="goods_detais">
				<rich-text :nodes="datas.detail"></rich-text>
			</view>
		</view>
		<view class="goods_footer">
			<view class="goods_footer_kf">
				<image src="../../../static/goods_kf.png"></image>
				<text>客服</text>
			</view>
			<view class="goods_footer_dh" @tap="popup_active()">立即兑换</view>
		</view>
		<view class="backdrop" @tap="popup_active()" :class="{active_popup:active}"></view>
		<view class="goods_popup" :class="{active_popup:active}">
			<view class="goods_popup_title">
				<view class="goods_popup_title_left">
					<image :src="datas.cover"></image>
					<view class="goods_popup_title_left_info">
						<text class="goods_popup_title_left_info_jf">{{datas.integral}}积分</text>
						<view class="goods_popup_title_left_info_name">{{datas.goods_name}}</view>
					</view>
				</view>
				<view class="goods_popup_title_right">
					<image src="../../../static/goods_close.png" @tap="popup_active()"></image>
				</view>
			</view>
			<view class="goods_popup_spec" v-for="(item,index) in datas.attribute" :key="index">
				<view class="goods_popup_spec_title">选择 {{item.attr_name}}</view>
				<view class="goods_popup_spec_content">
					<view class="goods_popup_spec_content_view" v-for="(item1,index1) in item.spec_name" :key="index1" 
					v-bind:class="[spec_index==index1 ? 'goods_popup_spec_active' :'']" @tap="goods_popup_spec(index1,index)">{{item1}}</view>
				</view>
			</view>
			<view class="goods_popup_num">
				<view class="goods_popup_num_left">购买数量</view>
				<view class="goods_popup_num_right">
					<button class="goods_popup_num_button" @tap="reduce()">-</button>
					<input type="text" class="goods_popup_num_input" v-model="goods_num"/>
					<button class="goods_popup_num_button" @tap="add()">+</button>
				</view>
			</view>
			<view class="goods_popup_sub">
				<button @tap="exchange()">立即兑换</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			var gid='';
			var attribute={};
			return {
				datas:[],
				banner:{
					indicatorColor:'#FFFFFF',
					indicatorActiveColor:'#F6156D',
					circular:true,
					indicatorDots:true 
				},
				active:false,
				spec_index:'',
				goods_num:1
			};
		},
		
		onLoad:function(e){
			var token=(uni.getStorageSync("user_info")).token;
			uni.request({
				url: 'http://bus.liebianzhe.com/api/order/goods_details',
				method: 'POST',
				data: {
					token:token,
					gid:e.id
				},
				success: res => {
					console.info(res.data);
					console.log('好嗨哦');
					if(res.data.code==1){
						this.datas=res.data.data;
						this.gid=res.data.data.id;
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
			popup_active(){
				this.active=!this.active;
			},
			goods_popup_spec(index1,index){
				this.spec_index=index1;
				var attribute={};
				attribute[index]=index1;
				this.attribute=JSON.stringify(attribute);
			},
			reduce(){
				this.goods_num==1?this.goods_num=1:this.goods_num=parseInt(this.goods_num)-1
			},
			add(){
				this.goods_num=parseInt(this.goods_num)+1;
			},
			exchange(){
				var gid=this.gid,
					attribute=this.attribute,
					goods_num=this.goods_num,
					token=(uni.getStorageSync("user_info")).token;;
				if(attribute==null){
					uni.showToast({
						title: '请先选择规格',
						mask: false,
						duration: 1500,
						icon:'none'
					});
				}else{
					uni.request({
						url: 'http://bus.liebianzhe.com/api/order/place_order',
						method: 'POST',
						data: {
							token:token,
							gid:gid,
							num:goods_num,
							attribute:attribute
						},
						success: res => {
							if(res.data.code==1){
								console.info(res.data);
								uni.setStorageSync('oreder_num',res.data.data);
								uni.showToast({
									title: res.data.msg,
									mask: false,
									duration: 1500,
									icon:'none'
								});
								setTimeout(function(){
									uni.navigateTo({
										url: '../confirm-oreder/confirm-oreder?address_type=0'
									});
								},2000)
							}else{
								uni.showToast({
									title: res.data.msg,
									mask: false,
									duration: 1500,
									icon:'none'
								});
							}
						},
						fail: () => {
							console.info("请求失败~")
						},
					});
				}
			}
		}
	}
</script>

<style>
	.goods_popup_sub button{
		width: 605upx;
		height: 100upx;
		border-radius: 30px;
		 background: linear-gradient(to right, #D22F58 ,#F64570);
		 color: #FFFFFF;
		 font-size: 30upx;
		 display: flex;
		 align-items: center;
		 justify-content: center;
	}
	.goods_popup_sub{
		width: 690upx;
		margin-top: 70upx;
		text-align: center;
	}
	.goods_popup_num_input{
		width: 60upx;
		height: 50upx;
		font-size: 30upx;
		background-color: #ECECEC;
		text-align: center;
		margin: 0 5upx;
	}
	.goods_popup_num_button{
		width: 50upx;
		height: 50upx;
		font-size: 36upx;
		background-color: #ECECEC;
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.goods_popup_num_right{
		display: flex;
		align-items: center;
	}
	.goods_popup_num_left{
		font-size: 24upx;
		
	}
	.goods_popup_num{
		width: 690upx;
		margin-top: 50upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		/* padding-right: 30upx; */
	}
	.goods_popup_spec_active{
		color: red;
	}
	.goods_popup_spec_content_view:first-child{
		margin-left: 0;
	}
	.goods_popup_spec_content_view{
		margin-left: 60upx;
	}
	.goods_popup_spec_content{
		display: flex;
		flex-wrap: wrap;
	}
	.goods_popup_spec{
		min-height: 175upx;
		width: 720upx;
		border-bottom: 1px solid #E3DFDF;
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		justify-content: center;
	}
	.goods_popup_title_right image{
		width: 23upx;
		height: 23upx;
	}
	.goods_popup_title_right{
		min-height: 200upx;
		margin-right: 30upx;
	}
	.goods_popup_title_left_info_name{
		width: 330upx;
		overflow-x:hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 28upx;
		font-weight: bold;
	}
	.goods_popup_title_left_info_jf{
		font-size: 30upx;
		color: #F81827;
	}
	.goods_popup_title_left_info{
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		justify-content: center;
	}
	.goods_popup_title_left image{
		width: 174upx;
		height: 138upx;
		margin-right: 60upx;
	}
	.goods_popup_title_left{
		display: flex;
	}
	.goods_popup_title{
		width: 720upx;
		min-height: 200upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #F8F7F7;
	}
	.goods_popup{
		/* width: 100%; */
		height: 680upx;
		background-color: #FFFFFF;
		z-index: 999;
		border-radius: 15px 15px 0 0;
		position: fixed;
		bottom: 0;
		padding-top: 20upx;
		display: none;
		/* padding: 0 30upx; */
		padding-left: 30upx;
	}
	.active_popup{
		display: block !important;
	}
	.backdrop{
		position: fixed;
		z-index: 998;
		background-color: rgba(0,0,0,.3);
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: none;
	}
	.goods_footer_dh{
		width: 574upx;
		height: 100%;
		background-color: #F64671;
		color: #FFFFFF;
		font-size: 30upx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.goods_footer_kf image{
		width: 38upx;
		height: 40upx;
	}
	.goods_footer_kf{
		width: 176upx;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		font-size: 30upx;
		
	}
	.goods_footer{
		height: 100upx;
		position: fixed;
		bottom: 0;
		display: flex;
		background-color: #FFFFFF;
	}
	.goods_detais_title{
		font-size: 30upx;
		color: #2E2E2E;
		margin-top: 20upx;
	}
	.comment_image image{
		width: 24%;
		height: 150upx;
		margin-right: 1%;
	}
	.comment_view{
		font-size: 24upx;
		padding-right: 40upx;
	}
	.comment_user_info image{
		width: 46upx;
		height: 46upx;
		border-radius: 50%;
		margin-right: 15upx;
	}
	.comment_user_info{
		margin-top: 20upx;
		font-size: 24upx;
		color: #5D5D5D;
		display: flex;
		align-items: center;
		
	}
	.comment_title_right image{
		width: 15upx;
		height: 25upx;
		margin-left: 15upx;
	}
	.comment_title_right{
		font-size: 24upx;
		color: #F64570;
		display: flex;
		align-items: center;
	}
	.comment_title{
		display: flex;
		align-items: center;
		justify-content: space-between;
		
	}
	.comment_content1{
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.comment_content,.comment_content1{
		min-height: 240upx;
		background-color: #FFFFFF;
		border-radius: 5px;
		padding: 0 15upx;
		padding-top: 10upx;
	}
	.comment{
		min-height: 350upx;
		background-color: #E7E6EB;
		padding: 20upx 30upx;
		padding-top: 20upx;
		margin-bottom: 100upx;
	}
	.goods_info_spec_content{
		margin-left: 15upx;
		font-size: 24upx;
		color:#333333;
	}
	.goods_info_spec{
		color: #707070;
		font-size: 24upx;
		display: flex;
		/* margin-top: 40upx; */
	}
	.goods_info_desc{
		font-size: 24upx;
		color: #707070;
	}
	.goods_info_title{
		font-size: 30upx;
		/* margin-top: 20upx; */
		font-weight: bold;
	}
	.exchange_right{
		font-size: 24upx;
		color: #5D5D5D;
	}
	.exchange_left_text{
		font-size: 36upx;
		color: #F8021C;
	}
	.exchange_left{
		font-size: 30upx;
		font-weight: bold;
		display: flex;
		align-items: center;
	}
	.exchange{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.goods_info{
		min-height: 290upx;
		padding: 20upx 30upx;
		/* padding-top: 20upx; */
	}
	
	
	.uni-padding-wrap{
		width: 100%;
		height:425upx;
		padding: 0;
	}
	.swiper{
		height: 425upx;
	}
	.swiper-item{
		height: 100%;
		width: 100%;
	}
	.swiper-item image{
		width: 100%;
		height: 100%;
	}
</style>
