<template>
	<div class="box">
	<div class="yqxx">
      <input type="text" name="" value="" placeholder="请输入邀请信息" id='yqx' v-model="invite_code">
    </div>
    <div class="rwtp">
      <image :src="headimg" mode=""></image>
      <span>{{name}}</span>
    </div>
    <div class="dl">
      <button class="dl_b" @tap="next">下一步</button>
    </div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				invite_code:'',
				name:'',
				headimg:''
			}
		},
		methods:{
			next(){				
// 					uni.request({
// 						url:'http://bus.liebianzhe.com/api/login/search_parent',
// 						data:{
// 							invite_code:this.invite_code,						
// 						},
// 						success: (res) => {
// 							if(res.data.code==1){
// 								console.log(res);
// 								// return;
// 								this.name = res.data.data.nickname;
// 								this.headimg = res.data.data.headimgurl
// 							}else{
// 								uni.showToast({
// 									title:res.data.msg
// 								})
// 							}
// 						}
// 					})
				var user_id=uni.getStorageSync("user_id");
				console.log(user_id);
				uni.request({
					url:'http://bus.liebianzhe.com/api/login/binding_usermsg',
					data:{
						type:2,
						user_id:user_id,						
						invite_code:this.invite_code,						
					},
					success: (res) => {
						console.log(res);
						if(res.data.code==1){							
							// return;
							this.name = res.data.data.nickname;
							this.headimg = res.data.data.headimgurl
						}else{
							uni.showToast({
								title:res.data.msg
							})
						}
					}
				})
			}
		},
		onLoad() {
			
		}
	}
</script>

<style>
	
body{
  box-sizing: border-box;
  padding-top:262upx;	
}
.yqxx{
  width: 606upx;
  height: 100upx;
  margin: auto;
}
.yqxx input{
	box-sizing: border-box;
  width: 100%;
  height: 100%;
  font-size:30upx!important;
  border: 1px solid;
  border-color: #eee;
  padding-left: 23upx;
  color:#666666;
  padding-left: 150upx;
  border-radius: 5upx;
}
.rwtp{
  width: 606upx;
  height: 461upx;
  background: #ddd;
  margin: auto;
  margin-bottom: 108upx;
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
.rwtp{
	width: 606upx;
	height: 461upx;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: #fff;
}
.rwtp image{
	width: 150upx;
	height: 150upx;
	margin-bottom: 24upx;
}
</style>
