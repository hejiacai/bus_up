<template>
	<div>
		<div class="pd" v-show="status==1">
			<div class="img">
				<img src="../../static/4.1_03.png" alt=""/>
			</div>
			<p class='fb'>您的发布已经成功</p>
		</div>
		<div class="pd" v-show="status==2">
			<div class="img">
				<img src="../../static/4.2_03.png" alt=""/>
			</div>
			<p class='fb_t'>您的发布失败</p>
			<p class='sby'>失败原因失败原因失败原因失败原因失败原因</p>
		</div>
		<div class="bt">
			<button class='ljck'>立即查看</button>
			<button class='fhsy' @tap="jump_index">返回首页</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				status:2
			}
		},
		methods:{
			jump_index(){
				uni.showToast({
					title:'好还哦'
				})
				uni.reLaunch({
					url:'../index/index'
				})
			}
		}
	}
</script>

<style>

.img{
  margin-top: 83upx;
  margin-bottom: 36upx;
  width: 100%;
  height: 233upx;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img img{
  width: 233upx;
  height: 233upx;
}
.fb{
  font-size: 36upx;
  color: #f94e78;
  text-align: center;
  font-weight: bold;
  margin-bottom: 346upx;
}
.fb_t{
  font-size: 36upx;
  color: #fe9218;
  text-align: center;
  font-weight: bold;
  margin-bottom:26upx;
}
.sby{
  font-size: 26upx;
  color: #b5b5b5;
  text-align: center;
    margin-bottom: 346upx;
}
.bt{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.ljck{
  width: 400upx;
  height: 105upx;
  border-radius: 100upx;
  line-height: 105upx;
  font-size: 30upx;
  margin-bottom: 42upx;
  background: #f74c76;
  color: #fff;
  padding: 0;
  font-weight: bold;
}
.fhsy{
  width: 400upx;
  height: 105upx;
  line-height: 105upx;
  border-radius: 100upx;
  font-size: 30upx;
  background: #fff;
  color: #f74c76;
  padding: 0;
  font-weight: bold;
  box-shadow: 1px 1px 1px 2px #ddd;
}
</style>
