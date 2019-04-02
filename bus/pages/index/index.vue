<template>
	<view>
		<!-- #ifndef MP -->
		<!-- 使用非原生导航栏后需要在页面顶部占位 -->
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<!-- #endif -->
		<!-- 固定在顶部的导航栏 -->
		<uni-nav-bar color="#333333" background-color="#FFFFFF" fixed="false" @click-left="showCity" shadow="false">
			<block slot="left">
				<view class="city">
					<text class="cs">{{city}}</text>
					<uni-icon type="arrowdown" color="#333333" size="22"></uni-icon>
				</view>
			</block>
			<view class="input-view">
				<uni-icon type="search" size="22" color="#666666"></uni-icon>
				<input confirm-type="search" @confirm="confirm" class="input" type="text" placeholder="输入搜索关键词" />
			</view>
			<block slot="right">
				<view class="msg" @tap="jump_mes">
					<image src="../../static/index_msg.png" class="msg_img"></image>
					<view class="msg_num" v-if="msg_num!=''">{{msg_num}}</view>
				</view>
			</block>
		</uni-nav-bar>
		<view class="uni-padding-wrap">
            <view class="page-section swiper">
                <view class="page-section-spacing">
                    <swiper class="swiper"  :indicator-dots="bannerDatas.indicatorDots" :autoplay="bannerDatas.autoplay" :interval="bannerDatas.interval" :duration="bannerDatas.duration" 
					:indicator-color="bannerDatas.indicatorColor" :indicator-active-color="bannerDatas.indicatorActivevColor" :previous-margin="bannerDatas.previousMargin"
					 :next-margin="bannerDatas.nextMargin" :circular="bannerDatas.circular" >
                        <swiper-item v-for="(item,index) in banner" :key="index">
                            <view class="swiper-item">
								<image :src="item.cover"></image>
							</view>
                        </swiper-item>
                    </swiper>
                </view>
            </view>
        </view>
		
		<view class="power_num">
			<view class="power_content">
				<view class="power_content_yuan red">{{user.gpower}}</view>
				<text>我的绿色能量值</text>
			</view>
			<view class="power_content">
				<view class="power_content_yuan yellow">{{user.gcoin}}</view>
				<text>我的能源币</text>
			</view>
		</view>
		
		<view class="other_body">
			<view class="card_title">
				<view class="card_title_left">
					<view class="card_title_left_bus">
						<image src="../../static/index_bus.png"></image>
						<text>{{city}}</text>
					</view>
					<text>当前城市可用卡片</text>
				</view>
				<view class="card_title_right">
					<text>查看更多</text>
					<image src="../../static/jiantou_right.png"></image>
				</view>
			</view>
			<view class="card_img" v-for="(item,index) in card" :key='index'>
				<navigator :url="item.link">
					<image :src="item.cover"></image>
				</navigator>
			</view>
			
			<view class="hot_advertisement">
				<text class="hot_advertisement_left">热门广告</text>
				<text class="hot_advertisement_right" @tap="jump_hot">相关规则</text>
			</view>
			<view class=" hot_advertisement_img">
				<image :src="advert.cover"></image>
			</view>
			<view class="hot_advertisement">
				<text class="hot_advertisement_left">同城服务</text>
				<text class="hot_advertisement_right">相关规则</text>
			</view>
			<view class="servise">
				<image :src="tc.cover"></image>
			</view>
			
			<view class="hot_advertisement">
				<text class="hot_advertisement_left">推荐好礼</text>
			</view>
			<view class="recommend">
				<view class="recommend_content" v-for="(item,index) in goods" :key='index' @tap="goods_details(item.id)">
					<view class="recommend_content_left">
						<image :src="item.cover"></image>
					</view>
					<view class="recommend_content_right">
						<text class="recommend_content_right_title">{{item.goods_name}}</text>
						<view class="recommend_content_right_desc">{{item.desc}}</view>
						<text class="recommend_content_right_jf">{{item.integral}}积分</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNavBar from '../../components/uni-nav-bar.vue'
	import uniIcon from '../../components/uni-icon.vue'

	export default {
		components: {
			uniNavBar,
			uniIcon,
		},
		data() {
			return {
				city: '',
				bannerDatas:{
					autoplay:true,
					indicatorDots:true,
					indicatorColor:'#CCCCCC',
					indicatorActivevColor:'#FFFFFF',
					previousMargin:20+'rpx',
					nextMargin:20+'rpx',
					circular:true,
					interval:5000
				},
				banner:[],
				user:{},
				card:[],
				tc:{},
				advert:{},
				goods:[],
				msg_num:''
			}
		},
		onLoad:function(){
			uni.showLoading({
				title: '加载中。。。',
				mask: false
			});
			var token=(uni.getStorageSync("user_info")).token;
			console.log(token);
			uni.request({
				url: 'http://bus.liebianzhe.com/api/user/index',
				method: 'POST',
				data: {
					token:token
				},
				success: res => {
					console.info(res.data);
					if(res.data.code==1){
						this.city=res.data.data.data.city;
						this.banner=res.data.data.data.banner;
						this.user=res.data.data.user_data;
						this.card=res.data.data.data.card;
						this.tc=res.data.data.data.tc;
						this.advert=res.data.data.data.advert;
						this.goods=res.data.data.data.goods;
						this.msg_num=res.data.data.data.new_msg;
						uni.hideLoading();
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
							duration: 1000
						});
					}
				},
				fail: () => {
					console.info("请求失败~");
				}
			});
		},
		methods: {
			jump_mes(){
				uni.navigateTo({
					url:'../messages/messages'
				})
			},		
			onPullDownRefresh() {
				console.log('onPullDownRefresh')
				setTimeout(function() {
					uni.stopPullDownRefresh()
					console.log('stopPullDownRefresh')
				}, 1000)
			},
			jump_hot(){
				uni.navigateTo({
					url:'../index/hot_adver'
				})
			},
			goods_details(id){
				uni.navigateTo({
					url: '../goods/goods-details/goods-details?id='+id,
				});
			}
		}
	}
</script>

<style>
	/* 顶部占位 */
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
	/* end */
	.power_num{
		width: 100%;
		height: 185upx;
		display: flex;
	}
	.power_content{
		width: 50%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 30upx;
		flex-direction: column;
		font-weight: bold;
	}
	.power_content_yuan{
		width: 110upx;
		height: 110upx;
		border-radius: 50%;
		font-size: 30upx;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		justify-content: center;
		
	}
	.red{
		background-color: #F64570;
	}
	.yellow{
		background-color: #FDC655;
	}
	.other_body{
		padding: 0 30upx;
		background-color: #E7E6EB;
		padding-top: 40upx;
		padding-bottom: 40upx;
	}
	.card_title{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.card_title_left{
		display: flex;
		align-items: center;
		font-size: 30upx;
		font-weight: bold;
	}
	.card_title_left_bus{
		display: flex;
		align-items: center;
		font-size: 24upx;
		font-weight: bold;
		margin-right: 35upx;
	}
	.card_title_left_bus image{
		width: 29upx;
		height: 39upx;
		margin-right: 8upx;
	}
	.card_title_right{
		font-size: 24upx;
		color: #5D5D5D;
	}
	.card_title_right image{
		width: 10upx;
		height: 17upx;
		margin-left: 10upx;
	}
	.card_img{
		height: 186upx;
		margin-top: 20upx;
	}
	.card_img image{
		width: 100%;
		height: 186upx;
		border-radius: 5px;
	}
	.hot_advertisement{
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 40upx;
	}
	.hot_advertisement_left{
		font-size: 28upx;
		font-weight: bold;
	}
	.hot_advertisement_right{
		font-size: 24upx;
		color: #5D5D5D;
	}
	.servise{
		height: 249upx;
		margin-top: 20upx;
		/* background-color: #FFFFFF; */
	}
	.servise image{
		width: 100%;
		height: 249upx;
		border-radius: 5px;
	}
	.hot_advertisement_img{
		margin-bottom: 20upx;
	}
	.hot_advertisement_img image{
		width: 690upx;
		height: 110upx;
	}
	.recommend{
		padding: 0 10upx;
		margin-top: 30upx;
	}
	.recommend_content{
		height: 194upx;
		background-color: #FFFFFF;
		border-radius: 5px;
		display: flex;
		align-items: center;
		margin-bottom: 20upx;
		padding-left: 20upx;
	}
	.recommend_content:last-child{
		margin-bottom: 0;
	}
	.recommend_content_left{
		margin-right: 80upx;
	}
	.recommend_content_left image{
		width: 174upx;
		height: 138upx;
	}
	.recommend_content_right{
		height: 138upx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		font-size: 28upx;
		color: #5D5D5D;
	}
	.recommend_content_right_title{
		width: 382upx;
		white-space:nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-weight: bold;
		color: #2E2E2E;
	}
	.recommend_content_right_jf{
		color: #FC021A;
		font-size: 24upx;
	}
	.recommend_content_right_desc{
		width: 382upx;
		white-space:nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
		
	/* 导航栏 */
	.title {
		font-size: 15px;
		line-height: 20px;
		color: #333333;
		padding: 15px;
	}

	.city {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin-left:8px;
	}
	.cs{
		line-height: 44rpx;
	}
	.input-view {
		width: 92%;
		display: flex;
		background-color: #e7e7e7;
		height: 30px;
		border-radius: 15px;
		padding: 0 4%;
		flex-wrap:nowrap;
		margin:7px 0;
		line-height:30px;
	}
	
	.input-view .uni-icon{
		line-height:30px !important;
	}

	.input-view .input {
		height:30px;
		line-height:30px;
		width:94%;
		padding: 0 3%;
	}
	.msg{
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center ;
		justify-content: center;
		position: relative;
	}
	.msg_img{
		width: 37upx;
		height: 43upx;
	}
	.msg_num{
		min-width: 28upx;
		min-height: 28upx;
		position: absolute;
		/* padding: 20upx 20upx; */
		border-radius: 50%;
		color: #FFFFFF;
		font-size: 18upx;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: #E1021E;
		line-height: initial !important;
		margin-left: 15upx;
		margin-top: -18upx;
	}
	/* end */
	/* 轮播图 */
	.uni-padding-wrap{
		width: 100%;
		height: 350upx;
		background-color: #E7E6EB;
		padding: 0;
		padding-top: 15upx;		
	}
	.swiper{
		height: 350upx;
	}
	.swiper-item{
		height: 290upx;
		width: 690upx;
		margin:0 auto;
	}
	.swiper-item image{
		width: 100%;
		height: 100%;
		border-radius: 5px;
	}
	/* end */
</style>
