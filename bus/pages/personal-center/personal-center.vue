<template>
	<view>
		<view class="status_bar">
			<view class="top_view"></view>
		</view>
		<view class="te_top"></view>
		<view class="head">
			<view class="left">个人中心</view>
			<view class="right">
				<view class="yuan">8</view>
				<image src="../../static/index_msg.png" mode="" class="" @tap="jump_message"></image>
				<image src="../../static/shezhi_03.png" mode="" class="img_t" @tap="jump_shezhi"></image>
			</view>
		</view>
		<view class="tab">
			<view class="tab_body">
				<view class="tab_title">
					<view class="tab_title_headimg">
						<image :src="personal_datas.headimgurl"></image>
					</view>
					<view class="tab_title_user">
						<text class="tab_title_user_text">{{personal_datas.nickname}}</text>
						<text>邀请码:{{personal_datas.invite_code}}</text>
					</view>
					<button plain="ture" class="headimg_button">更换头像装饰</button>
				</view>
				
				<view class="tab_content">
					<view class="tab_content_tj">
						<text>推荐人</text>
						<text>{{personal_datas.alipay_name}}</text>
						<image src="../../static/personal_headimg.png"></image>
					</view>
					<button plain="ture" class="tab_content_button">充值中心</button>
				</view>
				
			</view>
		</view>
		<view class="personal_gg">
			<image src="../../static/personal_gg.png"></image>
		</view>
		<view class="personal_integral">
			<view class="personal_integral_content" @tap="jump_energy">
				<view class="personal_integral_content_yuan blue">{{personal_datas.gpower}}</view>
				绿色能量
			</view>
			<view class="personal_integral_content" @tap="jump_currency">
				<view class="personal_integral_content_yuan yellow">{{personal_datas.gcoin}}</view>
				绿能币
			</view>
			<view class="personal_integral_content" @tap="jump_income">
				<view class="personal_integral_content_yuan pink">{{personal_datas.dayprice}}</view>
				每日收益
			</view>
			<view class="personal_integral_content" @tap="jump_change">
				<view class="personal_integral_content_yuan red">{{personal_datas.balance}}</view>
				交易金额
			</view>
			<view class="personal_integral_content" @tap="jump_jifen">
				<view class="personal_integral_content_yuan green">{{personal_datas.integral}}</view>
				我的积分
			</view>
			<view class="personal_integral_content" @tap="jump_fenhong">
				<view class="personal_integral_content_yuan khaki">{{166}}</view>
				每月分红
			</view>
		</view>
		<view class="personal_function">
			<view class="personal_function_content" @tap="jump_deal">
				<image src="../../static/personal_mm.png" class="mm"></image>
				<text>我的买卖</text>
			</view>
			<view class="personal_function_content" @tap="jump_tui">
				<image src="../../static/personal_ewm.png" class="ewm"></image>
				<text>我的推广码</text>
			</view>
			<view class="personal_function_content" @tap="upload">
				<image src="../../static/personal_pz.png" class="pz"></image>
				<text>上传凭证</text>
			</view>
			<view class="personal_function_content" @tap="jump_team">
				<image src="../../static/personal_td.png" class="td"></image>
				<text>我的团队</text>
			</view>
			<view class="personal_function_content" @tap="jump_master">
				<image src="../../static/personal_rz.png" class="rz"></image>
				<text>师傅认证</text>
			</view>
			<view class="personal_function_content" @tap="jump_order">
				<image src="../../static/personal_yy.png" class="yy"></image>
				<text>我的预约</text>
			</view>
			<view class="personal_function_content" @tap="jump_service">
				<image src="../../static/personal_kf.png" class="kf"></image>
				<text>客服中心</text>
			</view>
			<view class="personal_function_content" @tap="jump_classroom">
				<image src="../../static/personal_kt.png" class="kt"></image>
				<text>新人课堂</text>
			</view>
			<view class="personal_function_content" @tap="jump_adver">
				<image src="../../static/personal_ggz.png" class="ggz"></image>
				<text>广告主</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				personal_datas:[]
			};
		},
		onLoad:function(){
			var token=(uni.getStorageSync("user_info")).token;
			console.info(token);
			uni.request({
				url: 'http://bus.liebianzhe.com/api/user/get_user_data',
				method: 'POST',
				data: {
					token:token
				},
				success: res => {
					console.info(res);
					if(res.data.code==1){
						this.personal_datas=res.data.data;
						console.info(this.personal_datas);
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
		},
		methods:{
			upload(){
				uni.navigateTo({
					url:'../personal-center/upload'
				})
			},
			jump_shezhi(){
				uni.navigateTo({
					url:'../shezhi/shezhi'
				})
			},
			jump_message(){
				uni.navigateTo({
					url:'../messages/messages'
				})
			},
			jump_tui(){
				uni.navigateTo({
					url:'../personal-center/tuiguang'
				})
			},
			jump_team(){
				uni.navigateTo({
					url:'../personal-center/my_team'
				})
			},
			jump_deal(){
				uni.navigateTo({
					url:'../personal-center/my_deal'
				})
			},
			jump_order(){
				uni.navigateTo({
					url:'../personal-center/my_yuyue'
				})
			},
			jump_fenhong(){
				uni.navigateTo({
					url:'../personal-center/fenhong'
				})
			},
			jump_jifen(){
				uni.navigateTo({
					url:'../personal-center/my_jifen'
				});
			},
			jump_change(){
				uni.navigateTo({
					url:'../personal-center/transaction_amount'
				})
			},
			jump_income(){
				uni.navigateTo({
					url:'../personal-center/per_incom'
				})
			},
			jump_currency(){
				uni.navigateTo({
					url:'../personal-center/green_currency'
				})
			},
			jump_energy(){
				uni.navigateTo({
					url:'../personal-center/green_energy'
				})
			},
			jump_master(){
				uni.navigateTo({
					url:'../personal-center/apply_master'
				})
			},
			jump_service(){
				uni.navigateTo({
					url:'../personal-center/service'
				})
			},
			jump_classroom(){
				uni.navigateTo({
					url:'../personal-center/new_classroom'
				})
			},
			jump_adver(){
				uni.navigateTo({
					url:'../personal-center/advertiser'
				})
			}
		}
	}
	
</script>

<style>
	.img_t{
		width: 62upx!important;
		height: 56upx!important;
	}
	.status_bar{
		width: 100%;
		height: var(--status-bar-height);
		background-color:#ec446e;
	}
	.top_view{
		width: 100%;
		height: var(--status-bar-height);
		position: fixed;
		top: 0;
		z-index: 999;
		background-color:#ec446e;
	}
	.te_top{
		width: 100%;
		height: 92upx;
		background-color:#ec446e;
		position: fixed;
		z-index: 999;
	}
	.head{
		width: 100%;
		height: 70upx;
		box-sizing: border-box;
		padding: 0 27upx 0 304upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #ec446e;
		position: fixed;
		top: 150upx;
		z-index: 999;
	}
	.left{
		font-size: 36upx;
		font-weight: bold;
		color: #FFFFFF;
		white-space: nowrap;
	}
	.right{
		display: flex;
		align-items: center;
		position: relative;
	}
	.right image{
		width: 44upx;
		height: 44upx;
		margin-right: 8upx;
	}
	.yuan{
		position: absolute;
		/* margin-left: 15upx;
		margin-top: -18upx; */
		min-width: 28upx;
		min-height: 28upx;
		text-align: center;
		line-height: initial!important;
		border-radius: 50%;
		color: #FFFFFF;
		font-size: 18upx;
		background-color: #E1021E;
		top:-3rpx;
		left:28rpx;
	}
	.ggz{
		width: 52upx;
		height: 53upx;
	}
	.kt{
		width: 60upx;
		height: 54upx;
	}
	.kf{
		width: 53upx;
		height: 55upx;
	}
	.rz,.yy{
		width: 55upx;
		height: 55upx;
	}
	.td{
		width: 50upx;
		height: 54upx;
	}
	.pz{
		width: 51upx;
		height: 51upx;
	}
	.ewm{
		width: 53upx;
		height: 53upx;
	}
	.mm{
		width: 60upx;
		height: 48upx;
	}
	.personal_function_content image{
		margin-bottom: 20upx;
	}
	.personal_function_content{
		width: 33%;
		height: 155upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 28upx;
		/* padding-top: 5upx; */
	}
	.personal_function{
		width: 690upx;
		height: 466upx;
		border-radius: 5px;
		background-color: #FFFFFF;
		margin: 30upx auto;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.khaki{
		background-color: #FC8528;
	}
	.green{
		 background-color: #31A965;
	}
	.red{
		background-color: #FD021A;
	}
	.pink{
		background-color: #E65E99;
	}
	.yellow{
		background-color: #FDC655;
	}
	.blue{
		background-color: #4EA5E2;
	}
	.personal_integral_content_yuan{
		width: 110upx;
		height: 110upx;
		border-radius: 50%;
		color: #FFFFFF;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 400;
	}
	.personal_integral_content{
		width: 33%;
		height: 190upx;
		display: flex;
		flex-direction: column;
		font-size: 30upx;
		align-items: center;
		justify-content: space-around;
		font-weight: bold;
	}
	.personal_integral{
		width: 690upx;
		height: 380upx;
		border-radius: 5px;
		background-color: #FFFFFF;
		margin: 0 auto;
		margin-top: 30upx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.personal_gg image{
		width: 700upx;
		height: 152upx;
	}
	.personal_gg{
		text-align: center;
		margin-top: 160upx;
	}
	.tab_content_button{
		font-size: 30upx;
		width: 154upx;
		height: 46upx;
		padding: 0;
		line-height: 46upx;
		margin: 0;
		border-color: #D2D2D2;
	}
	.tab_content_tj image{
		width: 86upx;
		height: 86upx;
		border-radius: 50%;
	}
	.tab_content_tj{
		width: 380upx;
		height: 76upx;
		border-radius: 25px;
		display: flex;
		align-items: center;
		justify-content: space-around;
		background-color: #F985A2;
		font-size: 30upx;
		color: #FFFFFF;
		padding-right: 40upx;
	}
	.tab_content{
		margin-top: 50upx;
		padding: 0 15upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.headimg_button{
		border-color: #B7B7B7;
		width: 170upx;
		height: 56upx;
		font-size: 24upx;
		padding: 0;
		line-height: 56upx;
		margin: 0;
		margin-left: auto;
	}
	.tab_title_user_text{
		font-size: 36upx;
		line-height: initial;
	}
	.tab_title_user{
		display: flex;
		flex-direction: column;
		font-size: 24upx;
		margin-left: 57upx;
	}
	.tab_title_headimg image{
		width: 138upx;
		height: 138upx;
		border-radius: 50%;
	}
	.tab_title_headimg{
		margin-top: -50upx;
	}
	.tab_title{
		position: relative;
		display: flex;
		padding-left: 25upx;
		align-items: center;
		padding-right: 15upx;
		justify-content: space-between;
	}
	.tab_body{
		width: 690upx;
		height: 275upx;
		border-radius: 5px;
		background-color: #FFFFFF;
		margin-top: 60upx;
		position: relative;
	}
	.tab{
		height: 200upx;
		background-color: #EA3E69;
		display: flex;
		justify-content: center;
		margin-top: 160upx;
	}
	
	page{
		background-color: #E7E6EB;
	}
</style>
