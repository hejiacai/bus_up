<template>
	<view class="content">
		<view class="input-group">
			<view class="input-row border">
				<view class="content-tab">
					<text class="title">电</text>
					<text class="title">话</text>
				</view>
				<input type="text" v-model="account" placeholder="请输入电话号码">
			</view>
			<view class="input-row border">
				<view class="content-tab">
					<text class="title">密</text>
					<text class="title">码</text>
				</view>
				<input type="text" password="true" v-model="pwd" placeholder="请输入密码">
			</view>
			<view class="input-row">
				<text class="title">确认密码</text>
				<input type="text" password="true" v-model="repwd" placeholder="请输入确认密码">
			</view>
		</view>
		<view class="section codes">
			<input class="input num" name="input" v-model="code" placeholder="输入验证码" />
			<view class="number" @click="getCode">获取验证码</view>
		</view>
		<view class="btn-row">
			<button type="primary" class="primary" @tap="bindRegister">注册</button>
		</view>		     
	</view>
</template>

<script>
	// import uniCountdown from "../../components/uni-countdown/uni-countdown.vue";
	export default {
		data() {
// 			var dateObj = new Date();
// 			var currentTime = dateObj.getTime();
// 			var timer1 = this.formatDateTime((currentTime + 1000 * 2000));
// 			var timer2 = this.formatDateTime((currentTime + 1000 * 3000));			
// 			var timer3 = this.formatDateTime((currentTime + 1000 * 5000));
			return {
				account: '',
				pwd: '',
				repwd: '',
				code:'',
				// codeNum:'获取验证码'
			};
		},
		onLoad() {
			// this.getValidationFun()
			
		},
// 		components: {
// 			uniCountdown
// 		},
		methods:{
			getCode(){
				uni.request({
					url:'http://bus.liebianzhe.com/api/login/sendCode',
					method:'POST',
					data:{
						phone:this.account
					},
					success: (res) => {
						console.log(res);
					}
				})
			},
			bindRegister(){
				if(this.account==''){
					uni.showToast({
						title:'请输入手机号',
						icon:'none'
					})
					return;
				}
				if(!(/^1[345678]\d{9}$/.test(this.account))){
					uni.showToast({
						title:'请输入正确的手机号',
						icon:'none'
					})
					return;
				}
				
				if(this.pwd==''){
					uni.showToast({
						title:'请输入密码',
						icon:'none'
					})
					return;
				}
				if(this.repwd==''){
					uni.showToast({
						title:'再次输入密码',
						icon:'none'
					})
					return;
				}
				if(this.code==''){
					uni.showToast({
						title:'请输入验证码',
						icon:'none'
					})
					return;
				}
				if(this.repwd!=this.pwd){
					uni.showToast({
						title:'密码不一致',
						icon:'none'
					})
					return;
				}
				uni.request({
					url:'http://bus.liebianzhe.com/api/login/phone_reg',
					data:{
						code:this.code,
						phone:this.account,
						pass:this.pwd,
						repass:this.repwd
					},
					success: (res) => {
						console.info(res);
						// return;
						if(res.data.code==1){
							uni.request({
								url:'http://bus.liebianzhe.com/api/login/binding_usermsg',
								data:{
									type:1,
									phone:this.account,
									pass:this.pwd,
									repass:this.repwd,
									code:this.code,
								},
								success: (res) => {
									setTimeout(function(){
										uni.navigateTo({
											url:'../login/login'
										})
									},2000)
								}
							})
						}else{
							uni.showToast({
								title:res.data.msg,
								icon:'none'
							})
							setTimeout(function(){
								uni.navigateTo({
									url:'../login/login'
								})
							},2000)
						}
					}
				})
			},
			getValidationFun(){
				var code = '';
				var selectChar = new Array(1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
				for(var i = 0;i < 4;i++){
					var charIndex = Math.floor(Math.random()*61);
					code += selectChar[charIndex];
				}
				if (code.length == 4) {
					this.codeNum = code
					return
				}
			},
			formatDateTime(inputTime) { //时间戳 转 YY-mm-dd HH:ii:ss 
				var date = new Date(inputTime);
				var y = date.getFullYear();
				var m = date.getMonth() + 1;
				m = m < 10 ? ('0' + m) : m;
				var d = date.getDate();
				d = d < 10 ? ('0' + d) : d;
				var h = date.getHours();
				h = h < 10 ? ('0' + h) : h;
				var minute = date.getMinutes();
				var second = date.getSeconds();
				minute = minute < 10 ? ('0' + minute) : minute;
				second = second < 10 ? ('0' + second) : second;
				return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
			}
		}
	}
</script>

<style>
/* 	@import '../../../common/denglu.css'; */
	.section{
		margin: 30upx 0upx;
		
	}
	.codes{
		display: flex;
	}
	.input{
		/* padding-left: 20upx; */
		height: 60upx;
		background: #FFFFFF;
		font-size: 32upx;
		color: #666;
	}
	.num{
		flex: 1;
		margin-right: 30upx;
	}
	.number{
		width: 120upx;
		height: 60upx;
		font-size: 20upx;
		line-height: 60upx;
		background: #ccc;
		text-align: center;
	}
	.content-tab{
		display: flex;
		width: 4em;
		justify-content:space-between;
	}
	.input-row input{
		margin-left: 15upx;
	}
	.content {
		display: flex;
		flex: 1;
		flex-direction: column;
		/* background-color: #efeff4; */
		padding: 20px;
	}
	
	.input-group {
		background-color: #ffffff;
		margin-top: 40upx;
		position: relative;
	}
	
	.input-row.border::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0px;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}
	
	.input-group::after {
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		height: 1px;
		content: '';
		-webkit-transform: scaleY(.5);
		transform: scaleY(.5);
		background-color: #c8c7cc;
	}
	
	.input-row {
		display: flex;
		flex-direction: row;
		position: relative;
	}
	
	.input-row .title,.input-row input{
		height: 70upx;
		padding: 20upx 0;
		line-height: 70upx;
	}	
	
	.action-row {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	
	.action-row navigator {
		color: #09BB07;
		padding: 0 20px;
	}
	
	.btn-row {
		margin: 50px 0;	
	}
	
	button.primary {
		background-color: #09BB07;
	}
</style>
