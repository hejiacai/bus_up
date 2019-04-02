<template>
    <div class="box">
		<div class="section">
			<div class="modification_head">
				<img src="../../static/头像.png" alt="" />
				<a href="">修改头像  ></a>
			</div>
			<div class="nickname" @tap="jump_name">
				<span>昵称</span>
				<a href="">DF  JH  ></a>
			</div>
			<div class="nickname">
				<span>微信绑定</span>
				<span>微信号123</span>
			</div>
			<div class="nickname">
				<span>支付宝绑定</span>
				<a href="">未绑定  ></a>
			</div>
			<div class="nickname" @tap="jump_phone">
				<span>手机号码</span>
				<a href="">18017360909  ></a>
			</div>
			<div class="ipt" @tap="jump_ch_password">
				<span>修改密码</span>
				<a href="">></a>
			</div>
			<div class="ipt" @tap="jump_info">
				<span>消息提醒</span>
				<a href="">></a>
			</div>
			<div class="ipt" @tap='clear_stor'>
				<span>清除缓存</span>
				<a href="">></a>
			</div>
			<div class="ipt" @tap="jump_pay">
				<span>修改支付密码</span>
				<a href="">></a>
			</div>
		</div>
		<uni-popup :show="showPopupMiddle" :type="popType" v-on:hidePopup="hidePopup">		
			<view class="pop_content">
				确定要退出用户吗
			</view>
			<view class="comf_but">
				<view class="qx" @tap="quexiao">取消</view>
				<view class="qd" @tap="queing">确定</view>
			</view>
		</uni-popup>
		<div class="button" @click="showMiddlePopup">
			<button>退出当前用户</button>
		</div>
	</div>
</template>

<script>
	import uniPopup from '../../components/uni-popup.vue';
	export default {
		data() {
			return {
				popType: 'middle',
				title: '确定要退出当前用户吗',
				showPopupMiddle: false,
			}
		},
		onLoad() {
			var token =(uni.getStorageSync('user_info')).token;
			console.log(token)
			uni.request({
				url:'http://bus.liebianzhe.com/api/user/get_user_data',
				data:{
					token:token
				},
				success: (res) => {
					console.log(res)
				}
			})
		},
		methods:{
			hidePopup: function() {
				this.showPopupMiddle = false;
			},
			quexiao(){
				this.showPopupMiddle = false;
			},
			clear_stor(){
				try {
					uni.clearStorageSync();
					uni.showToast({
						title:'已清空缓存'
					})
				} catch (e) {
					error
				}
			},
			queing(){
				var token =(uni.getStorageSync('user_info')).token;
				
				uni.request({
					url:'http://bus.liebianzhe.com/api/login/logout',
					data:{
						token:token
					},
					success: (res) => {
						console.log(res)
						if(res.data.code==1){
							uni.navigateTo({
								url:'../login/login'
							})
						}else{
							uni.showToast({
								title:'退出失败'
							})
						}
					}
				})
			},
			showMiddlePopup: function() {
				this.hidePopup();
				this.popType = 'middle';
				this.showPopupMiddle = true;
			},
			jump_phone(){
				uni.navigateTo({
					url:'../shezhi/change_phone'
				})
			},
			jump_ch_password(){
				uni.navigateTo({
					url:'../shezhi/modifer_password'
				})
			},
			jump_pay(){
				uni.navigateTo({
					url:'../shezhi/modifer_pay'
				})
			},
			jump_name(){
				uni.navigateTo({
					url:'../shezhi/modifer_name'
				})
			},
			jump_info(){
				uni.navigateTo({
					url:'../info/info'
				})
			},
			login_out(){
				uni.reLaunch({
					url:'../login/login'
				})
			}
		},
		components: {
			uniPopup
		}
	}
</script>

<style>
/* 	.hd{
  width: 100%;
  height: 1.2rem;
  padding: 0 0 0 0.3rem;
  font-size: 0.36rem;
  color: #a2a2a2;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: #000000;
  background: #fff;
  border-bottom: 1px solid;
  border-bottom-color: #ddd;
  background: #fff;
}
.hd img{
  margin-right: 2.1rem;
  width: 0.4rem;
  height: 0.4rem;
} */
.pop_content{
	width:100%;
	height: 161upx;
	border-bottom: 1px solid #EEEEEE;
	font-size: 30upx;
	color: #000000;
	text-align: center;
	line-height: 161upx;
}
.uni-popup-middle{
	width: 451upx;
	height: 244upx;
	padding: 0;
}
.qx{
	color: #333333;
	width: 50%;
	height: 100%;
	text-align: center;
	line-height: 83upx;
}
.qd{
	height: 100%;
	color: #F94E78;
	text-align: center;
	width: 50%;
	line-height: 83upx;
	border-left: 1px solid #EEEEEE;
}
.comf_but{
	display: flex;
	width: 100%;
	height: 100%;
	padding: 0;
	box-sizing: border-box;
	align-items: center;
	justify-content: space-between;
}
.comf_but button{
	width: 50%;
	height: 30upx;
	font-size: 30upx;
}
.section{
	padding-left: 30upx;
	margin-bottom: 65upx;
}
.modification_head{
	border-bottom: 1px solid;
	border-bottom-color: #ddd;
	height: 188upx;
	width: 100%;
	display: flex;
	align-items: center;
}
.modification_head img{
	width: 126upx;
	height: 126upx;
	margin-right: 376upx;
}
.modification_head a{
	font-size: 30upx;
	font-weight: bold;
	color: rgb(51,51,51)!important;
}
.nickname{
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid;
	border-bottom-color: #ddd;
	height: 100upx;
	width: 100%;
	align-items: center;
}
.nickname a{
	color: rgb(152,152,154)!important;
	margin-right: 30upx;
	font-size: 30upx;
}
.nickname span{
	font-size: 30upx;
	font-weight: bold;
	margin-right: 30upx;
}
.ipt{
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid;
	border-bottom-color: #ddd;
	height: 100upx;
	width: 100%;
	align-items: center;
}
.ipt span{
	font-size: 30upx;
	font-weight: bold;
	margin-right: 30upx;
}
.ipt a{
	color: rgb(152,152,154)!important;
	margin-right: 30upx;
}
.button{
	width: 100%;	
	height: 103upx;
	text-align: center;
}
.button button{
	width: 610upx;
	height: 100%;
	text-align: center;
	line-height: 103upx;
	background: rgb(249,78,120);
	color: #fff;
	border-radius: 200upx;
	font-size:30upx;
}
</style>
