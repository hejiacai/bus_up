<template>
	<view class="login_body">
		<view class="login_title">手机登录</view>
		<view class="login_input">
			<input type="number" placeholder="请输入您的手机号码" maxlength="11" v-model="phone"/>
		</view>
		<view class="login_input">
			<input type="text" password placeholder="请输入您的密码"  v-model="pwd"/>
		</view>
		<view class="login_other">
			<text @tap="forget_password">忘记密码</text>
			<text @tap="code_login">验证码登录</text>
		</view>
		<view class="login-button">
			<button @tap="login">登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone:'',
				pwd:''
			};
		},
		methods: {
			login() {
				if(!(/^1[34578]\d{9}$/.test(this.phone))){ 
					uni.showToast({
						icon:'none',
						title: '手机号码输入不正确~'
					});
					return;
				} 
				if(this.pwd.length<6){
					uni.showToast({
						icon:'none',
						title:'密码不能小于六位书'
					});
					return;
				}
				uni.request({
					url: 'http://bus.liebianzhe.com/api/login/phone_login',
					method: 'POST',
					data: {
						phone:this.phone,
						password:this.pwd
					},
					success: res => {
						console.info(res);
						if(res.data.code==2){
							
							uni.showToast({
								icon:'none',
								title: '登录成功~',
							});
							uni.setStorageSync('user_info',res.data.data);
							setTimeout(function(){
								uni.switchTab({
									url:'/pages/index/index'
								})
							},2000);
							
						}else if(res.data.code==1){							
							uni.setStorageSync('user_id',res.data.data.user_id);
							uni.navigateTo({
								url:'../login/code'
							})
// 							uni.showToast({
// 								title: res.data.msg,
// 								icon:'none'
// 							});
						}else if(res.data.code==0){
							uni.showToast({
								title: '登录失败',
								icon:'none'
							});
						}
						
					},
					fail: () => {
						console.info("请求失败~");
					},
				});
			},
			code_login(){
				uni.navigateTo({
					url:'../login/code_login'
				})
			},
			forget_password(){
				uni.navigateTo({
					url:'../login/forget_password'
				})
			}
		},
	}
</script>

<style>
	.login_body{
		padding-top: 330upx;
		/* #ifdef MP */
			padding-top: 280upx;
		/* #endif */
	}
	.login_title{
		font-size: 48upx;
		font-weight: bold;
		margin-bottom: 70upx;
		text-align: center;
	}
	.login_input{
		width: 690upx;
		height: 96upx;
		margin: 0 auto;
		margin-bottom: 46upx;
	}
	.login_input input{
		height: 100%;
		border: 1px solid #E9E9E9;
		border-radius: 5px;
		padding-left: 23upx;
		font-size: 30upx;
	}
	.login_other{
		width: 690upx;
		margin: 0 auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 24upx;
		color: #6E6E6E;
		margin-bottom: 154upx;
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
</style>
