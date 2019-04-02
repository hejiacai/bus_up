<template>
	<div class="box">
		<div class="sjdl">
		验证码登录
		</div>
		<div class="ip_sj">
		  <!-- <input type="text" name="" id="" v-model="phone" placeholder="请输入您的手机号码" class="sjh"> -->
		  <input type="number" placeholder="请输入您的手机号码" maxlength="11" v-model="phone" class="sjh"/>
		</div>
		<div class="ip_s">
		  <input type="text" name="" id="" v-model="code" placeholder="请输入验证码" class="sjh">
		  <button type="button" name="button" @tap="getCode">
			获取验证码
		  </button>
		</div>
	  <div class="dl">
		<button class="dl_b" @tap="login">登录</button>
	  </div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				phone:'',
				code:''
			};
		},
		methods:{
			login(){
				if(this.phone==''){
					uni.showToast({
						title:'请输入手机号'
					})
					return
				}
				if(this.code==''){
					uni.showToast({
						title:'请输入验证码'
					})
					return
				}
				uni.request({
					url:'http://bus.liebianzhe.com/api/login/code_login',
					data:{
						phone:this.phone,
						code:this.code
					},
					success: (res) => {
						console.log(res);
						if(res.data.code==1){
							uni.showToast({
								title:res.data.msg
							})
						}
						else if(res.data.code==2){
							console.log(res)
						}
						else if(res.data.code==0){
							uni.showToast({
								title:'登陆失败'
							})
						}
					}
				})
			},
			getCode(){
				uni.request({
					url:'http://bus.liebianzhe.com/api/login/sendCode',
					data:{
						phone:this.phone
					},
					success: (res) => {
						console.log(res)
					}
				})
			}
		},
		onLoad() {			
		}
	}
</script>

<style>
page{
  background:#fff;
  /*with:7.5rem;*/
  padding-top: 330upx;
}
.sjdl{
  height: 48upx;
  width: 100%;
  font-size: 48upx ;
  color: #333;
  font-weight: bold;
  margin-bottom: 80upx;
  text-align: center;
}
.ip_sj{
	box-sizing: border-box;
    width: 100%;
    height:100upx;
    padding: 0 30upx;
    margin-bottom: 50upx;
}
.ip_sj input{
	box-sizing: border-box;
    width: 100%;
    height: 100%;
    font-size:30upx!important;
    border: 1px solid;
    border-color: #eee;
    padding-left: 23upx;
    /* color:#ececec; */
}
.sjh{
  margin-bottom: 50upx;
}
.ip_mm{
box-sizing: border-box;
  width: 100%;
  height:100upx;
  padding: 0 30upx;
  margin-bottom: 48upx;
}
.ip_mm input{
	box-sizing: border-box;
    width: 100%;
    height: 100%;
    font-size:30upx!important;
    border: 1px solid;
    border-color: #eee;
    padding-left: 23upx;
    color:#9f9f9f;
}
.yzm{
	box-sizing: border-box;
  width: 100%;
  height: 94upx;
  padding: 34upx 30upx 34upx 53upx;
  display: flex;
  justify-content: space-between;
  margin-bottom: 122upx;
}
.yzm span{
  font-size: 24upx;
  color: #c9c9c9!important;
}
.dl{
  width: 606upx;
  height: 100upx;
  margin: auto;
}
.dl_b{
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 0;
  line-height: 100upx;
  border-radius: 50upx;
  background: #f34a74;
  font-size: 30upx;
  color: #fff;
}
.ip_s{
	box-sizing: border-box;
  width: 100%;
  height:100upx;
  padding: 0 30upx;
  margin-bottom: 50upx;
  display: flex;
  align-items: center;
}
.ip_s input{
	box-sizing: border-box;
    width: 70%;
    height: 100%;
    font-size:30upx!important;
    border: 1px solid;
    border-color: #eee;
    padding-left: 23upx;
    color:#666666;
    margin: 10upx;
}
.ip_s button{
  border-radius: 5upx!important;
    font-size:30upx!important;
    width: 27% ;
    height: 100%;
    border: 1px solid;
    border-color: #df3a65!important;
    padding: 0;
    line-height: 100upx;
    color: #df3a65!important;
    background: #ffffff;
}

</style>
