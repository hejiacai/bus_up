<template>
	<div class="content">
	<div class="date">
 		<div class="year">
			<div class="date-title" @tap="show_year">{{year_title}}<img src="../../static/1_03.png" alt="" /></div>
			<div class="year_choice" v-if="show_y">
				<div class="ul">
					<div class="li" v-for="(item,index) in yearsList" @tap="hid_year(item)" :key="index">{{item}}</div>
				</div>
			</div>
		</div>
 		<div class="month">
			<div class="date-title" @tap="show_month">{{month_title}}<img src="../../static/1_03.png" alt="" /></div>
			<div class="year_choice" v-if="show_m">
				<div class="ul">
					<div class="li" v-for="(item,index1) in nomthList" @tap="hid_month(item)" :key="index1">{{item}}</div>
				</div>
			</div>
		</div>
 		<div class="day">
			<div class="date-title" @tap="show_day">{{day_title}}<img src="../../static/1_03.png" alt="" /></div>
			<div class="year_choice" v-if="show_d">
				<div class="ul">
					<div class="li" v-for="(item,index2) in dayList" @tap="hid_day(item)" :key="index2">{{item}}</div>
				</div>
			</div>
		</div>
		<div class="but" @tap="change_list">确定</div>
 	</div>
 	<div class="sec">
 		<div class="box">
	 		<div class="box_one">
	 			<view>会员人数12人</view>
	 			<view>今日新增1人</view>
	 		</div>
	 		<div class="box_tow">
	 			<view>会员人数12人</view>
	 			<view>今日新增1人</view>
	 		</div>
	 		<div class="box_tree">
	 			<view>会员人数12人</view>
	 			<view>今日新增1人</view>
	 		</div>
	 		<div class="box_four">
	 			<view>会员人数12人</view>
	 			<view>今日新增1人</view>
	 		</div>
 		</div>
 		<div class="banner">
 			<p class="tall">总人数</p>
 			<p class="guanggao">广告数</p>
 			<p class="income">广告收入</p>
 			<p class="share">分红</p>
 		</div>
 	</div>
 	<div class="button">
 		<button @tap="issue_rules">立即查看发放规则</button>
 	</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				year_title:'选择年份',
				month_title:'选择月份',
				day_title:'选择日期',
				yearsList: [],
				nomthList:[],
				dayList:[],
				animation:'',
				show_y:false,
				show_m:false,
				show_d:false
			}
		},
		onLoad() {
			this.getDateList();
			this.getYearsList(1992);
			this.getMonthList();
			this.DayList();
		},
		methods:{
			issue_rules(){
				uni.navigateTo({
					url:'../personal-center/issue_rules'
				})
			},
			getDateList(){
				// var token = (uni.getStorageSync("user_info")).token;
				var token=(uni.getStorageSync("user_info")).token;
				console.log(token);
				var d = new Date();
				var year = d.getFullYear();
				var month= d.getMonth()+1;
			    var day= d.getDate();
				uni.request({
					url:'http://bus.liebianzhe.com/api/user/month_bonus',
					data:{
						token:token,
						year:year,
						month:month,
						day:day
					},
					success: (res) => {
						console.log(res)
					}
				})
			},
			change_list(){
				var token=(uni.getStorageSync("user_info")).token;
				var year = this.year_title;
				var month = this.month_title;
				var day = this.day_title;
				if(year=='选择年份'){
					return
				}
				if(month=='选择月份'){
					return
				}
				if(day=='选择日期'){
					return
				}
				uni.request({
					url:'http://bus.liebianzhe.com/api/user/month_bonus',
					data:{
						token:token,
						year:year,
						month:month,
						day:day
					},
					success: (res) => {
						console.log(res)
					}
				})
			},
			getYearsList(yearNum){
				var d = new Date();
				var years = d.getFullYear();
				var yearTotal = years - yearNum;
				
				for(var i=0;i<=yearTotal;i++){
						var new_year = years--;
						this.yearsList.push(new_year)
				}
				// console.log(this.yearsList)
			},
			getMonthList(){
				// var d = new Date();
				var monthNum = 1;
				var num = 11;
				// var month = d.getMonth();
				for (var i=0;i<=num;i++){
					var new_month = monthNum++;
					this.nomthList.push(new_month)
				}
				// console.log(this.nomthList)
			},
			DayList(){
				var DayTotal=30;
	     	    var yearNum=1;
				for(var i=0;i<=DayTotal;i++){
            		var new_day = yearNum++;
					this.dayList.push(new_day)
				}
				// console.log(this.dayList)
			},
			show_year(){
				this.show_y = true;
				this.show_m = false;
				this.show_d = false;				
			},
			hid_year(value){
				this.show_y = false;
				this.year_title = value +'年';
			},
			show_month(){
				this.show_y = false;
				this.show_m = true;
				this.show_d = false
			},
			hid_month(value){
				this.show_m = false;
				this.month_title = value + '月';
			},
			show_day(){
				this.show_y = false;
				this.show_m = false;
				this.show_d = true;
			},
			hid_day(value){
				this.show_d = false;
				this.day_title = value + '日';
			}
		}
	}
</script>

<style>
.year,.month,.day{
	position: relative;
}
.year_choice {
    position: absolute;
    /* bottom: -1.5rem; */
    /* left: 10%; */
    width: 70%;
    /* width: 40%; */
    height: 300upx;
    background: #fff;
    z-index: 998;
    overflow: auto;
    /* display: none; */
    top: 92upx;
}
.ul{
	display: flex;
	flex-direction: column;
	width: 100%;
	text-align: center;
}
.li{
	border-bottom: 1px solid #DDDDDD;
}
.but{
	width: 25%!important;
	height: 100%!important;
	font-size: 30UPX!important;
	text-align: center;
	line-height: 92upx;
	padding: 0;
	border-radius: 0;
	background: #fff;
	/* border: 0!important; */
	border-left: 1rpx solid;
	border-left-color: #DDDDDD;
}
.year>.date-title,.month>.date-title,.day>.date-title{
	align-items: center;
	justify-content: center;
	display: flex;
	width: 100%;
	font-size: 30UPX!important;
	/* position: relative; */
}
.fhjl{
	font-size: 24upx!important;
}
.date{
	width: 100%;
	height: 92upx;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 46upx;
	background: #fff;
}
.year,.month,.day{
	align-items: center;
	justify-content: center;
	display: flex;
	width: 25%!important;
	height: 100%!important;
	font-size: 30upx!important;
}
.day img{
	width: 23upx;
	height: 23upx;
}
.month img{
	width: 23upx;
	height: 23upx;
}
.year img{
	width: 23upx;
	height: 23upx;
}
.sec{
	width: 700upx;
	height: 868upx;
	background: #fff;
	margin: auto;
	border-radius: 10upx;
	box-shadow: 1rpx 1rpx 1rpx #ddd;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	padding-top: 45upx;
	margin-bottom: 39upx;
}
.box{
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	width: 622upx;
	height: 622upx;
	margin-bottom: 62upx;
}
.box_one{
	box-sizing: border-box;
	width: 311upx;
	height: 311upx;
	border-radius:311upx 0 0 0;
	background: rgb(243,172,30);
	padding-left: 80upx;
	padding-top: 150upx;
	font-size: 30upx;
	font-weight: bold;
	color: #fff;
}
.box_one view{
	white-space: nowrap;
	margin-bottom: 20upx;
}
.box_tow{
	box-sizing: border-box;
	width: 311upx;
	height: 311upx;
	border-radius:0 311upx 0 0;
	background: rgb(253,97,32);
	padding-left: 50upx;
	padding-top: 150upx;
	font-size: 30upx;
	font-weight: bold;
	color: #fff;
}
.box_tow view{
	white-space: nowrap;
	margin-bottom: 20upx;
}
.box_tree{
	box-sizing: border-box;
	width: 311upx;
	height: 311upx;
	border-radius:0 0 0 311upx;
	background: rgb(192,39,26);
	padding-left: 100upx;
	padding-top: 80upx;
	font-size: 30upx;
	font-weight: bold;
	color: #fff;
}
.box_four{
	box-sizing: border-box;
	width: 311upx;
	height: 311upx;
	border-radius:0 0 311upx 0;
	background: rgb(16,150,191);
	padding-left: 50upx;
	padding-top: 80upx;
	font-size: 30upx;
	font-weight: bold;
	color: #fff;
}
.banner{
	display: flex;
	width: 100%;
	height: 75upx;
	justify-content: space-around;
}
.banner p{
	display: inline-block;
	width: 152upx;
	height: 75upx;
	border-radius: 5upx;
	color: #fff;
	font-size: 30upx;
	font-weight: bold;
	text-align: center;
	line-height: 75upx;
}
.guanggao{
	background: rgb(253,97,32);
}
.tall{
	background: rgb(243,172,30);
}
.income{
	background: rgb(192,39,26);
}
.share{
	background: rgb(16,150,191);
}
.button{
	width: 100%;
	height: 103upx;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 20upx;
}
.button button{
	width: 610upx;
	height: 100%;
	line-height: 103upx;
	text-align: center;
	background:rgb(249,78,120) ;
	border-radius: 100upx;
	font-size: 30upx;
	color: #fff;
}
</style>
