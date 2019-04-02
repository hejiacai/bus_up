<template>
<div class="box">
	<!-- <div class="hd">
	    <img src="../image/2_03_03.png" alt="">申请成为师傅
	</div> -->
	<p class="identity">
		<img src="../../static/1@2x.png" alt="" />
		身份证信息
	</p>
	<div class="identity_detail">
		<div class="inp">
			<span>姓名</span>
			<input type="text" placeholder="请输入您的真实姓名" id='mz'/>			
		</div>
		<div class="inp">
			<span>证件号</span>
			<input type="text" placeholder="请输入证件号(加密处理)" id='mz'/>			
		</div>
		<div class="inp">
			<span>工龄</span>
			<input type="text" placeholder="请输入你的工龄" id='mz'/>			
		</div>
	</div>
	<p class="identity">
		<img src="../../static/1@2x.png" alt="" />
		上传身份证照片
	</p>
	<div class="indent_photo" @tap="up_img">
		<img src="../../static/添加身份证.png" alt="" />
		<p>正面   (带身份证信息)</p>
		<!-- <input type="text" value="" /> -->
	</div>
	<div class="indent_photo" @tap="up_img">
		<img src="../../static/添加身份证.png" alt="" />
		<p>反面   (带国徽照片)</p>
		<!-- <input type="text" value="" /> -->
	</div>
	<p class="identity">
		<img src="../../static/1@2x.png" alt="" />
		请选择服务时间
	</p>
	<div class="service_time">
		<div class="times">
			<div>
				<span class="month">1个月</span>
				<span class="yuan">(6元)</span>
			</div>
			<div>
				<span class="month">3个月</span>
				<span class="yuan">(18元)</span>
			</div>
			<div>
				<span class="month">1年</span>
				<span class="yuan">(72元)</span>
			</div>
		</div>
		<input type="" name="" id="yf" value="" placeholder="请输入月份1个月6元" class="srje"/>
		<div class="choice_type" @click="showSinglePicker">
			<span class="choic_craft">选择工种</span>
			<span>{{pickerText}}</span>
			<img src="../../static/2.png" alt="" id="trigger3"/>
		</div>
	</div>
	<div class="bottom_nav">
		<button>提交认证</button>
	</div>
	<mpvue-picker :themeColor="themeColor" ref="mpvuePicker" :mode="mode" :deepLength="deepLength" :pickerValueDefault="pickerValueDefault"
	 @onConfirm="onConfirm" @onCancel="onCancel" :pickerValueArray="pickerValueArray"></mpvue-picker>
</div>
</template>

<script>
	import mpvuePicker from '../../components/mpvue-picker/mpvuePicker.vue';
	
	export default {
		components:{
			mpvuePicker
		},
		data() {
			return {
				all_num:'',
				first_num:'',
				second_num:'',
				dataList:[],
				// mulLinkageTwoPicker: cityData,
				// cityPickerValueDefault: [0, 0, 1],
				// themeColor: '#007AFF',
				pickerText: '',
				// mode: '',
				deepLength: 1,
				pickerValueDefault: [0],
				pickerValueArray:[],
				pickerSingleArray: [{
						label: '中国',
						value: 1
					},
					{
						label: '俄罗斯',
						value: 2
					},
					{
						label: '美国',
						value: 3
					},
					{
						label: '日本',
						value: 4
					}
				],
				up_url:[]
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
		onLoad:function(){
			var token = (uni.getStorageSync('user_info')).token;
			uni.request({
				url:'http://bus.liebianzhe.com/api/user/my_team_list',
				method:'POST',
				data:{
					token:token
				},
				success: res => {
					// console.log(res);
					// this.dataList = res.data.data;
					console.log(res.data.data);
					this.all_num = res.data.data.all_num;
					this.first_num = res.data.data.first_num;
					this.second_num = res.data.data.second_num;
					this.dataList = res.data.data.data;
					console.log(this.dataList);
				}
			})
		},
		methods:{
			// 单列
			showSinglePicker() {
				this.pickerValueArray = this.pickerSingleArray
				this.mode = 'selector'
				this.deepLength = 1
				this.pickerValueDefault = [0]
				this.$refs.mpvuePicker.show()
			},
			onConfirm(e) {
				// console.log(e.label);
				this.pickerText = e.label
			},
			up_img(){
				var that = this
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function (res) {
						console.log(res.tempFilePaths)
						that.up_url.push(res.tempFilePaths);
						console.log(that.up_url);
// 						const tempFilePaths = res.tempFilePaths;
// 						const uploadTask = uni.uploadFile({
// 						 url : 'http://bus.liebianzhe.com/api/user/upload_voucher',
// 						 filePath: tempFilePaths[0],
// 						 name: 'file',
// 						 formData: {
// 						  // 'user': 'test',
// 						  token:token,
// 						  voucher:voucher
// 						 },
// 						 success: function (uploadFileRes) {
// 						  console.log(uploadFileRes)
// 						  uni.showToast({
// 						  	title:'上传成功'
// 						  })
// 						 }
// 						});
					}
				});
			}
		},
	}
</script>

<style>
page{
	background: #eae9ee;
}
/* .hd{
  width: 100%;
  height: 1.3rem;
  padding: 0.58rem 0 0.23rem 0.3rem;
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
.identity{
	width: 100%;
	height: 90upx;
	font-size:30upx;
	color: #333;
	font-weight: bold;
	padding: 40upx 0 0 0;
	display: flex;
	align-items: center;
}
.identity img{
	width: 14upx;
	height: 45upx;
	margin-right: 20upx;
}
.identity_detail{
	width: 100%;
	height: 330upx;
	background: #fff;
	padding-left:30upx;
}
.inp{
	width: 100%;
	height: 110upx;
	border-bottom: 1px solid;
	border-bottom-color: #ddd;
	display: flex;
	align-items: center;
	/* justify-content: space-between; */
}
.inp span{
	white-space: nowrap;
	font-size: 30upx;
	color: #333;
	font-weight: bold;
	height: 100%;
	line-height: 110upx;
	margin-right: 20upx;
}
.inp input{
	height: 100%;
	width: 100%;
	line-height: 110upx;
/*	display: inline-block;*/
	/*-moz-box-sizing: border-box;
	box-sizing: border-box;*/
	/*margin-bottom: 0.05rem;*/
	padding-left: 100upx;
	font-size: 30upx;
}
#mz::-webkit-input-placeholder{
	font-size: 30upx;
	text-align: right;
}
.indent_photo{
	width: 690upx;
	height: 486upx;
	background: #fff;
	margin: auto;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 60upx;
}
.indent_photo img{
	width: 508upx;
	height: 295upx;
	margin-bottom: 50upx;
}
.indent_photo p{
	font-size: 30upx;
	font-weight: bold;
	color: #333;
	text-align: center;
}
.service_time{
	box-sizing: border-box;
	width: 100%;
	height: 500upx;
	background: #fff;
	padding:38upx 30upx 0 30upx;
}
.times{
	display: flex;
	justify-content: space-between;
	margin-bottom: 35upx;
}
.times div{
	width: 210upx;
	height: 112upx;
	border: 1px solid;
	border-color:#ee4670 ;
	display: flex;
	flex-direction: column;
	border-radius: 10upx;
	
}
.times div span{
	color: #333;
	font-weight: bold;
	display: flex;
	align-items: center;
	justify-content: center;
}
.month{
	font-size: 36upx;
}
.yuan{
	font-size: 30upx;
}
#yf{
	font-size: 30upx;
}
#yf::-webkit-input-placeholder{
	font-size: 30upx;
	color: #eae9ee;
}
.srje{
	width: 100%;
	height: 104upx;
	border: 1px solid;
	border-color: #ddd;
	border-radius: 10upx;
	line-height: 104upx;
	padding-left: 5upx;
}
.choice_type{
	width: 100%;
	height: 118upx;
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.choice_type span{
	font-size: 30upx;
	font-weight: bold;
	color: #333;
}
.choice_type img{
	width: 20upx;
	height: 20upx;
}
.bottom_nav{
	width: 100%;
	height: 100upx;
	position: fixed;
	bottom: 0;
	left: 0;
}
.bottom_nav button{
	width: 100%;
	height: 100%;
	background: #f94f79;
	color: #fff;
	font-size: 30upx;
	font-weight: bold;
	border-radius: 0!important;
	text-align: center;
	line-height: 100upx;
	padding:0 ;
}
</style>
