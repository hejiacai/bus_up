<template>
	<view class="login-body">
		<view class="login-logo">
			<image src="../../static/login_logo.png" mode=""></image>
		</view>
		<view class="login-title">LOGO</view>
		<view class="login-button">
			<button @tap="register">注册</button>
		</view>
		<view class="login-mode">
			<view class="login-mode-content" @tap="phone_login">
				<image src="../../static/logo_phone.png" class="phone" mode=""></image>
				<text>手机登录</text>
			</view>
			<view class="login-mode-content" @tap="getuserinfo()"  open-type="getUserInfo">
				<image src="../../static/login_wx.png" class="wx" mode="" ></image>
				<text>微信登录</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			};
		},
		methods: {
// 			wx_login() {
// 				uni.login({
// 					provider: 'weixin',
// 					success: res => {
// 						console.info(res);
// 					},
// 				});
// 			},
			getuserinfo(){
			   // console.log(res1);
			   //如果只需要opendid 和非加密数据至此登录完成
			   //此处连接数据库利用openid 就可以进行登录环节
			   //免费的视频教程 http://www.hcoder.net/tutorials/info_141.html
			   wx.login({
				success: res2 => {
					console.log(res2.code);
					return;
				 //获取 sessionKey
				 wx.request({
				  url : 'https:///hoa.hcoder.net/xcxencode/?c=sk&appid=wx2dfbe8e3af7ee141&secret=47022a0a227b77ac41fe39136bad1cd4&code='+res2.code+'&grant_type=authorization_code',
				  success: res3 => {
				   console.log(res3);
				   //记录到本地
				   try{
					uni.setStorageSync('sk', res3.data.session_key);
					uni.setStorageSync('openid', res3.data.openid);
				   }catch(e){
					//TODO handle the exception
				   }
				   uni.hideLoading();
				  }
				 })
				}
			   });
			},
			phone_login(){
				uni.navigateTo({
					url: '../login/login-phone',
				});
			},
			register(){
				uni.navigateTo({
					url:'../register/register',
				});
			}
		},
	}
</script>

<style>
	.login-body{
		padding:0 30upx ;
		padding-top: 156upx;
		/* #ifdef MP */
		padding-top: 106upx;
		/* #endif */
		
	}
	.login-logo{
		text-align: center;
	}
	.login-logo image{
		width: 233upx;
		height: 213upx;
	}
	.login-title{
		font-size: 48upx;
		margin-top: 40upx;
		text-align: center;
		color: #F64570;
		margin-bottom: 140upx;
	}
	.login-button{
		text-align: center;
		margin-bottom: 68upx;
	}
	.login-button button{
		width: 608upx;
		height: 100upx;
		border-radius: 60upx;
		font-size: 30upx;
		color: #FFFFFF;
		background: linear-gradient(to right,#D32F58,#F54570);
		line-height: 100upx;
		
	}
	.login-mode{
		display: flex;
	}
	.login-mode-content{
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 30upx;
		font-weight: 600;
	}
	.login-mode-content image{
		margin-right: 30upx;
	}
	.phone{
		width: 36upx;
		height: 52upx;
	}
	.wx{
		width: 65upx;
		height: 53upx;
	}
</style>
