<template>
	<div class='box'>
    <div class="mx">
        <div class="srbt">
			<span>请输入标题</span>
			<input type="text" name="" id="ipt" placeholder="请输入" placeholder-style="text-align:right;">
        </div>
        <div class="srbt">
			<span>服务时间</span>
			<!-- <input type="text" name="" id="ipt" placeholder="时间" placeholder-style="text-align:right;"> -->
			<span>
				{{date.year<10?('0'+date.year):date.year}}年
				{{date.month<10?('0'+date.month):date.month}}月
				{{date.date<10?('0'+date.date):date.date}}日
			</span>
			<span @tap='show_choice'>选择时间</span>
        </div>
        <div class="srbt" @click="showSinglePicker">
          <span>选择工种</span>
		  <span id='result'>{{pickerText}}</span>
          <img src="../../static/1_03.png" alt="" id="">
        </div>
        <p class="sctp" data-index="2" data-haha="你好">上传图片</p>
        <form action="">
			<div class="img_box">
				<div class="img" @tap="chooseImage">
				  <input type="file" name="" id="up" value="" multiple="multiple" capture="camera" accept="image/*"/>
				</div>
				<div class="img_list">
					<div class="img_list_c" v-for="(item,index) in imageList">
						<image :src="item" mode=""></image>
					</div>
				</div>
			</div>
	        <p class="wtms">请输入问题描述</p>
	        <textarea name="" rows="" cols="" class="xxms">
	        	
	        </textarea>
        </form>
    </div>
      <div class="btb">
		<button type="button" name="button" class="bt" @tap="li_fb">立即发布</button>
      </div>
	  
	  <view v-if='isShow'>
	  	<view class="mx-mask">
	  		<view class="mx-modal">
	  			<view v-if="type!='time'" class="mx-modal-header">
	  				<text style="padding: 0 15px;" @click="onPrevMonth"><text class="icon icon-left"></text></text>
	  				<text>{{date.year}}年 - {{date.month}}月</text>
	  				<text style="padding: 0 15px;" @click="onNextMonth"><text class="icon icon-right"></text></text>
	  				<view class="mx-modal-header-colse" @click="onClose"><text class="icon icon-close"></text></view>
	  			</view>
	  			<view v-else class="mx-modal-header">
	  				<text>选择时间</text>
	  				<view class="mx-modal-header-colse" @click="onClose"><text class="icon icon-close"></text></view>
	  			</view>
	  			<view class="mx-modal-body">
	  				<!-- 日期选择 -->
	  				<view v-if="type!='time'" class="mx-date">
	  					<view class="mx-date-header">
	  						<view v-for="(header,index) in ['一','二','三','四','五','六','日']" :key="index">{{header}}</view>
	  					</view>
	  					<view class="mx-date-body">
	  						<view v-for="(item,index) in dateList" :key="index" :id="index" @click="onSelectDate" :class="{'active': item.selected,'gray': item.is_gray}">{{item.date}}</view>
	  					</view>
	  				</view>
	  				<!-- 时间选择 -->
	  				<!-- <view v-if="type=='datetime' || type=='time'">
	  					<view v-if="type!='time'" class="line-title" style="padding: 10px 0;">选择时间</view>
	  					<picker-view class="mx-time" indicator-style="height: 22px;" :value="time" @change="onTimeChange">
	  						<picker-view-column>
	  							<view v-for="value in 24" :key="value">{{value<10?'0'+value:value}}时</view>
	  						</picker-view-column>
	  						<picker-view-column>
	  							<view v-for="value in 60" :key="value">{{value<10?'0'+value:value}}分</view>
	  						</picker-view-column>
	  						<picker-view-column>
	  							<view v-for="value in 60" :key="value">{{value<10?'0'+value:value}}秒</view>
	  						</picker-view-column>
	  					</picker-view>
	  				</view> -->
	  			</view>
	  			<!-- <view style="color: #666;font-size: 14px;padding: 10px 0;">
	  				已选择:
	  				<text v-if="type!='time'">
	  					{{date.year<10?('0'+date.year):date.year}}年
	  					{{date.month<10?('0'+date.month):date.month}}月
	  					{{date.date<10?('0'+date.date):date.date}}日
	  				</text>
	  				<text v-if="type=='datetime' || type=='time'">
	  					{{time[0]<10?('0'+time[0]):time[0]}}:
	  					{{time[1]<10?('0'+time[1]):time[1]}}:
	  					{{time[2]<10?('0'+time[2]):time[2]}}
	  				</text>
	  			</view> -->
	  			<view>
	  				<view class="mx-btn" @click="onConfirm_t">确定</view>
	  			</view>
	  		</view>
	  	</view>
	  </view>
	  
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
		props: {
			value: {
				type: Boolean,
				default: false
			},
			init: {
				type: String,
				default () {
					let d = new Date();
					return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() +
						':' + d.getSeconds();
				}
			},
			type: {
				type: String,
				default: 'datetime'
			}
		},
		data() {
			return {
				date: {
					year: 2019,
					month: 3,
					date: 1,
					hour: 0,
					minute: 0,
					second: 0
				},
				dateIndex: 0,
				dateList: [],
				isShow: false,
				time: [0, 0, 0],
				cls: {
					mask: true,
					fadeIn: false,
					fadeOut: false
				},
				all_num:'',
				first_num:'',
				second_num:'',
				imageLength:3,
				dataList:[],
				imageList:[],
				pickerText: '',
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
		methods:{
			li_fb(){
				uni.navigateTo({
					url:'../city-wide/fabu_success'
				})
			},
			show_choice(){
				this.isShow = true;
			},
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
			chooseImage(){
				var that = this
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: function (res) {
						console.log(res.tempFilePaths)
						// that.up_url.push(res.tempFilePaths);
						that.imageList = that.imageList.concat(res.tempFilePaths);
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
			},
			//关闭
			onClose() {
				this.isShow = false;
				this.$emit('input', this.isShow);
			},
			//确定
			onConfirm_t() {
				let date = JSON.parse(JSON.stringify(this.date));
				if (this.type == 'date') {
					date.value = date.year + '-' + date.month + '-' + date.date;
				} else if (this.type == 'datetime') {
					date.value = date.year + '-' + date.month + '-' + date.date + ' ' + date.hour + ':' + date.minute + ':' + date.second;
				} else {
					date.value = date.hour + ':' + date.minute + ':' + date.second;
				}
				this.onClose();
				this.$emit('selected', date);
			},
			//时间变更
			onTimeChange(event) {
				this.time = event.detail.value;
				[this.date.hour, this.date.minute, this.date.second] = this.time;
			},
			//上一月
			onPrevMonth() {
				this.date.month--;
				if (this.date.month <= 0) {
					this.date.year--;
					this.date.month = 12;
				}
				this.dateList = this.getDateList(this.date);
			},
			//下一月
			onNextMonth() {
				this.date.month++;
				if (this.date.month > 12) {
					this.date.year++;
					this.date.month = 1;
				}
				this.dateList = this.getDateList(this.date);
			},
			//选择日期
			onSelectDate(event) {
				let index = event.target.id;
				if (this.dateList[index].is_gray) return; //不能选择非本月日期
				for (let i = 0, len = this.dateList.length; i < len; i++) this.dateList[i].selected = false;
				this.dateList[index].selected = true;
				this.date.date = this.dateList[index].date;
			},
			//转换日期对象
			getDateInfo(date) {
				let weeks = ["日", "一", "二", "三", "四", "五", "六"];
				let data = {
					year: date.getFullYear(),
					month: date.getMonth() + 1,
					date: date.getDate(),
					week: weeks[date.getDay()],
					selected: false, //是否选中
					is_gray: false //是否显示灰色
				};
				return data;
			},
			//获取日期列表
			getDateList(option = {}) {
				let nowDate = new Date();
				let year = option.year || nowDate.getFullYear();
				let month = option.month ? option.month - 1 : nowDate.getMonth();
				let date = option.date || nowDate.getDate();
				let pointerDate = new Date();
				pointerDate.setFullYear(year);
				pointerDate.setMonth(month);
				pointerDate.setDate(1);
				let oneWeek = pointerDate.getDay() == 0 ? 7 : pointerDate.getDay(); //这月1号是周几
				pointerDate.setDate(pointerDate.getDate() - (oneWeek - 1));
				let dateList = [],
					is_selected = false;
				for (let i = 0; i < 42; i++) {
					let tmp = this.getDateInfo(pointerDate);
					tmp.is_gray = pointerDate.getMonth() < month || pointerDate.getMonth() > month; //设置非本月日期
					dateList.push(tmp);
					pointerDate.setDate(pointerDate.getDate() + 1);
				}
				return dateList;
			}
		},
		mounted() {
			let initValue = this.type == 'time' ? '1970-0-0 ' + this.init : this.init;
			let date = new Date(initValue.replace(/^(\d{4})-(\d{1,2})-(\d{1,2})$/, "$1/$2/$3")); //转换 年-月-日 =>年/月/日
			this.date.year = date.getFullYear();
			this.date.month = date.getMonth() + 1;
			this.date.date = date.getDate();
			this.date.minute = date.getMinutes();
			this.date.second = date.getSeconds();
			this.date.hour = date.getHours();
			this.date.minute = date.getMinutes();
			this.date.second = date.getSeconds();
			this.time = [this.date.hour, this.date.minute, this.date.second];
			if (this.type.indexOf('date') >= 0) {
				this.dateList = this.getDateList(this.date);
				this.dateList.forEach((item) => {
					if (item.year == this.date.year && item.month == this.date.month && item.date == this.date.date) {
						item.selected = true;
					}
				});
			}
		},
	}
</script>

<style>
page{
  background: #e83e67;
}
.box{
	box-sizing: border-box;
	padding-top: 20upx;
}
.img_box{
	display: flex;
	align-items: center;
}
.img_list{
	display: flex;
	align-items: center;
	margin-left:10upx;
}
.img_list_c{
	width: 100upx;
	height: 100upx;
	margin-right: 10upx;
	border-radius: 10upx;
}
.img_list image{
	width: 100%;
	height: 100%;
}
/* #ipt::-webkit-input-placeholder{
	text-align: right;
	color: #666666;
	font-size: 24upx;
} */
#ipt::-webkit-input-placeholder{
	text-align: right;
	color: #666666;
	font-size: 24upx;
	}    /* 使用webkit内核的浏览器 */
#ipt:-moz-placeholder{
	text-align: right;
	color: #666666;
	font-size: 24upx;
	}                  /* Firefox版本4-18 */
#ipt::-moz-placeholder{
	text-align: right;
	color: #666666;
	font-size: 24upx;
	}                  /* Firefox版本19+ */
#ipt:-ms-input-placeholder{
	text-align: right;
	color: #666666;
	font-size: 24upx;
	} 
.mx{
  width: 700upx;
  height: 950upx;
  padding-left: 15upx;
  padding-right: 15upx;
  background:#fff;
  border-radius: 20upx;
    margin: auto;
    margin-bottom: 50upx;
}
.srbt{
  width: 660upx;
  height: 100upx;
  border-bottom: 1px solid;
  border-bottom-color: #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 30upx;
  color: #333333;
  font-weight: bold;
}
.srbt input{
  height: 100%;
  width: 100%;
  font-size: 30upx;
  color: #333333;
  padding-left: 40upx;
}
.srbt span{
    height: 100%;
    text-align: center;
    color: #828282;
    font-size: 26upx;
    white-space: nowrap;
	width:-webkit-fit-content;
	line-height: 100upx;
	margin-right: 10upx;
}
.srbt img{
  width: 50upx;
  height: 50upx;
}
.sctp{
  width: 100%;
  height: 90upx;
  font-size: 30upx;
  display: flex;
  align-items: center;
  margin-bottom: 10upx;
}
.img{
   width: 156upx;
   height: 176upx;
   /* margin-bottom: 52upx; */
   position: relative;
   background: url(../../static/4_04.png) no-repeat;
   background-size:156upx 176upx;
   margin-right: 20upx;
}
/* .img img{
  height: 100%;
} */
.wtms{
    font-size: 30upx;
    width: 100%;
    height: 90upx;
    display: flex;
    align-items: center;
}
.xxms{
  background: #fafaf9;
  padding: 17upx 0 0 15upx;
  color: #939392;
  width: 660upx;
  height: 205upx;
  font-size: 26upx;
}
.bt{
  display:inline-block;
  width: 605upx;
  height: 100upx;
  border-radius: 70upx;
  background: #fff;
  color: #f9486d;
  font-size: 36upx;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  line-height: 100upx;
  margin-bottom: 20upx;
}
.btb{
  margin-bottom: 20upx;
}
input[type="file"]{
    opacity: 0;
    position:absolute;
    width:100%; 
    height: 100%;
    border:none
}





/* 时间插件 */
@keyframes fadeIn {
		from {
			opacity: 0;
			transform: scale(.8);
		}

		to {
			opacity: 1;
			transform: scale(1);
		}
	}

	.mx-mask {
		position: fixed;
		left:0;
		top:0;
		width:100%;
		height:100%;
		background: rgba(0, 0, 0, 0);
		/* font-size: 16px; */
		z-index: 1000;
		animation: fadeIn .2s 1;
	}

	.mx-modal {
		background: #fff;
		position: absolute;
		left: 5%;
		right: 5%;
		top: 50%;
		transform: translateY(-50%);
		color: #606266;
		border-radius: 6px;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
		padding: 0 10px 10px 10px;
		box-sizing: border-box;
		text-align: center;
		font-size: 44upx!important;
		height:88%;
	}

	.mx-modal-header {
		position: relative;
		padding: 10px 0;
		border-bottom: 1px solid #eee;
	}

	.mx-modal-header-colse {
		position: absolute;
		right: 10px;
		top: 50%;
		transform: translateY(-50%);
	}

	.mx-modal-body {
		padding: 10px 0;
		margin-bottom: 80upx;
		/* font-size: 30upx!important; */
	}

	/*日期*/
	/* .mx-date{
		font-size: 31upx;
	} */
	.mx-date-header,
	.mx-date-body {
		position: relative;
		display: flex;
		justify-content: space-between;
	}

	.mx-date-header view,
	.mx-date-body view {
		width: 14.28%;
		transition: .2s;
		border-radius: 6px;
	}

	.mx-date-header {
		padding: 5px 0;
	}

	.mx-date-body view {
		padding: 2px 0;
	}

	.mx-date-body {
		flex-wrap: wrap;
	}

	.mx-date-body view.active {
		background: #409eff;
		color: #fff;
	}

	.mx-date-body view.gray {
		background: none;
		color: #c0c4cc;
	}

	/*时间*/
	.mx-time {
		width: 100%;
		height: 66px;
	}

	/*带线的标题*/
	.line-title {
		position: relative;
		font-size: 14px;
		width: 100%;
		text-align: center;
		color: #666;
	}

	.line-title::before,
	.line-title::after {
		content: "";
		display: inline-block;
		width: 30px;
		height: 1px;
		background: #eee;
		position: relative;
		top: -4px;
	}

	.line-title::before {
		right: 6px;
	}

	.line-title::after {
		right: -6px;
	}

	@font-face {
		font-family: "icondt";
		src: url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAL8AAsAAAAAB0QAAAKtAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDFAqBfIFcATYCJAMQCwoABCAFhG0HUxtRBsiusCnDvUiJtoUQcQPnvVtvMMCnT/Hw/drrue/d3SConygCFR0eHy6CqjJVZVtlO74ZX0ugo/dyqp/OAdgfz4ZBXQtNLtsvRV7vk14dExXgwABohHp8A9bwLjsU6HnCWeSN0hVuWvowzYJJTfFg9rm/gkTApixA7f9/7/T/2tzJ57Vvua01aSx71Akw7AQU0FibIiuRgDyF2kUclLDyr44TGDSvqXF0cHYJCxIZF4gX1ihY6ISlDHL9QjuxNMVrjf7yslwBr/T3479+LFA0FZl6/Hw/ga1f/XqljtyVGMl5TgSrqNgAkng4mb5tWgSsaYP9Z2wBrRTKWcGuQ5OIc2370j9eUYkWKRwG23am8itOEPxCUPj1AhV+hra/m90BzlxqTxW0a29i05sRr6YTLTiDDCWc2Z2hFputH4mOOA8URaL5Hv51fMCPmzFRoiEZxKAG/j/UgibTxguO47b+ygEf64gwbJKoJTEjytLsBxVAd/1cTwE6NeqJZpavv2gguO5dXeG6fyjBFx+fFewkNx/0K8CSfysB6zKXEUtmKufiwpt6ULJgkMboIv5Jv2doZ+BSQr+ZHd4+cw1U/RbwpG5AY8g2tPrtwqB1h6uHTHGmRQ5gzZsFYVwNxahPUI17x5P6A41Zf9Aaj2kYdBlqyyFLYZeiIyWUYHSPNuZSM5ssmeJzMiFXri3TnGty3saw1+72c4dUkjtjhr8xfRGN2nGBB9ZplOeMleOUYmkPRapBp6On3tSOuYAlhxyiCJJAkXvIirGSls3F0uDz54gR5BS3gMyErxHHs52jnrYugB+qSwj5lle8G0afEBrSHFZAB5aT5DTNUDU9KEViom24I1kZ6DiNNKpu368tvnAbDCI3ZJSokdFongS+DevVqtLcc0i1VbjLfghsAgAAAAA=') format('woff2');
	}

	.icon {
		font-family: "icondt" !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.icon-close:before {
		content: "\e641";
	}

	.icon-right:before {
		content: "\e65f";
	}

	.icon-left:before {
		content: "\e660";
	}

	/*button*/
	.mx-btn {
		display: block;
		line-height: 1;
		white-space: nowrap;
		cursor: pointer;
		background: #409eff;
		border: 1px solid #409eff;
		color: #fff;
		-webkit-appearance: none;
		text-align: center;
		box-sizing: border-box;
		outline: none;
		margin: 0;
		transition: .1s;
		font-weight: 500;
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		padding: 12px 20px;
		font-size: 14px;
		border-radius: 4px;
	}

	.mx-btn:active {
		background-color: #3A8EE6;
		border-color: #3A8EE6;
	}
</style>
