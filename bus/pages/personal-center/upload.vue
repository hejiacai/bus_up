<template>
	<div class="content" :style="{width:Screen_width+'px',height:Screen_height+'px'}">
		<div class="sc_top">
			<img src="../../static/1@2x.png" mode=""></img>
			<p>请上传凭证获得高额补贴</p>
		</div>
		<div class="box">
			<div class="yuan">选择上传</div>
		</div>
		<div class="but">
			<button type="primary" @tap="upload">立即上传</button>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				// imageList: [], //保存图片路径集合
				// imageLength: 3, //限制图片张数
				// sourceTypeIndex: 2, //添加方式限制
				// sizeTypeIndex: 2, //图片尺寸限制
			}
		},
		computed: {
		    Screen_width() {
		        return uni.getSystemInfoSync().windowWidth;
		    },
			Screen_height(){
				return uni.getSystemInfoSync().windowHeight;
			}
		},
		methods:{
			upload : function(){
			   // _self = this;
			   uni.chooseImage({
				   count:6,
				// count: this.imageLength - this.imageList.length,
				// sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				// sourceType: ['album'], //从相册选择
				success: function (res) {
						// this.imageList = this.imageList.concat(res.tempFilePaths);
						var voucher = JSON.stringify(res.tempFilePaths);
						var token=(uni.getStorageSync("user_info")).token;
						 const tempFilePaths = res.tempFilePaths;
						 const uploadTask = uni.uploadFile({
						  url : 'http://bus.liebianzhe.com/api/user/upload_voucher',
						  filePath: tempFilePaths[0],
						  name: 'file',
						  formData: {
						   // 'user': 'test',
						   token:token,
						   voucher:voucher
						  },
						  success: function (uploadFileRes) {
							  console.log(uploadFileRes)
						   uni.showToast({
						   	title:'上传成功'
						   })
						  }
						 });
					},
				})
			},
		}
	}
</script>

<style>
	.but{
		width: 100%;
		height: 103upx;
		text-align: center;		
	}
	.but button{
		width: 610upx;
		height: 100%;
		border-radius: 100upx;
		background:rgb(249,78,120) ;
		color: rgb(255,255,255);
		font-size: 30upx;
		text-align: center;
		line-height: 103upx;
		padding: 0;
	}
	.box{
		width: 690upx;
		height: 481upx;
		background: rgb(255,255,255);
		display: flex;
		align-items: center;
		justify-content: center;
		margin: auto;
		margin-bottom: 395upx;
		margin: auto;
		margin-bottom: 395upx;
	}
	.yuan{
		width: 160upx;
		height: 160upx;
		border-radius: 50%;
		text-align: center;
		line-height: 160upx;
		font-size: 36upx;
		background: rgb(79,124,242);
		color: rgb(255,255,255);
		
	}
	.content{
		background: rgb(234,233,238);
		padding-top: 26upx;
	}
	.sc_top{
		display: flex;
		align-items: center;
		/* margin-top: 26upx; */
		margin-bottom: 34upx;
	}
	.sc_top img{
		width: 18upx;
		height: 26upx;
		margin-right: 30upx;
	}	
	.sc_top p{
		font-size: 30upx;
		color:rgb(51,51,51);
		font-weight: bold;
	}
</style>
