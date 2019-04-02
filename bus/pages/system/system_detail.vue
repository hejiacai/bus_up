<template>
	<view class="">系统消息详情</view>
	
</template>

<script>
	 export default {
// 		 onLoad: function (option) {
// 			 // var data = JSON.parse(option)
// 			 console.log(option);
// 			 return;
// 		 },
		data() {
			return {
				dataList:{}
			}
		},
		methods: {
			name() {
				
			}
		},
		onLoad(opation) {
			console.log(opation);
			// return;
			var token = (uni.getStorageSync("user_info")).token;
			let type = 3;
			let id = opation.id;			
			uni.request({
				url:'http://bus.liebianzhe.com/api/user/act_msg',
				method:'POST',
				data:{
					token:token,
					type:type,
					id:id
				},				
				success: res => {
					console.log(res);
					if(res.data.code==1){
						
					}else{
						uni.showToast({
							title:res.data.msg,
							icon:'noen'
						})
					}
				},
				fail:function(){
					
				}
			})
		}
	}
</script>

<style>
	
</style>
