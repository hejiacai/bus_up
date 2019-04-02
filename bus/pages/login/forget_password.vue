<template>
	<div class="box">
	<div class="sjdl">
      	忘记密码
    </div>
    <div class="ip_sj">
      <input type="number" name="" id="" placeholder="请输入您的手机号码" class="sjh" v-model="phone" maxlength="11">
    </div>
    <div class="ip_s">
      <input type="text" name="" id="" placeholder="请输入验证码" class="sjh" v-model="code">
      <button type="button" name="button" @tap="getCode">
        获取验证码
      </button>
    </div>
    <div class="ip_sj">
      <input type="text" name="" id="" placeholder="请输入6-12位密码" class="sjh" v-model="psw">
    </div>
    <div class="ip_sj wc">
      <input type="text" name="" id="" placeholder="请确定新密码" class="sjh" v-model="repsw">
    </div>
  <div class="dl">
    <button class="dl_b" @tap="order">完成</button>
  </div>
  </div>
</template>

<script>
	export default {
		data() {
			return {
				phone:'',
				code:'',
				psw:'',
				repsw:''
			}
		},
		methods:{
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
			},
			order(){
				if(!/^(1[345678]\d{9}$)/.test(this.phone) || this.phone==''){
					uni.showToast({
						title:'请输入正确手机号'
					})
					return
				}
				if(this.psw=='' || this.repsw==''){
					uni.showToast({
						title:'密码不能为空'
					})
					return
				}
				if(this.psw!=this.repsw){
					uni.showToast({
						title:'密码不一致'
					})
					return
				}
				uni.request({
					url:'http://bus.liebianzhe.com/api/login/forget_pass',
					data:{
						phone:this.phone,
						code:this.code,
						password:this.psw,
						repassword:this.repsw
					},
					success: (res) => {
						if(res.data.code==1){
							console.log('chengg')
						}else{
							uni.showToast({
								title:res.data.msg
							})
						}
					}
				})
			}
		}
	}
</script>

<style>
	body{
  background:#fff;
}
/* .ip_s input{
	font-size: 30upx!important;
} */
.sjdl{
  height: 48upx;
  width: 100%;
  font-size: 48upx ;
  color: #333;
  font-weight: bold;
  margin-bottom: 80upx;
  text-align: center;
  margin-top: 200upx;
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
    color:#ececec;
}
.sjh{
  /* margin-bottom: 50upx ; */
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
  line-height: 100%;
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
}
.ip_s button{
  border-radius: 5upx!important;
    font-size:30upx!important;
    width: 27% ;
    height: 100upx;
    border: 1px solid;
    border-color: #df3a65!important;
    padding: 0;
    line-height: 100upx;
    color: #df3a65!important;
    background: #ffffff;
}
.wc{
	margin-bottom: 65upx;
}
</style>
