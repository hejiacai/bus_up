<template>
	<div class="box">
	<!-- <div>我的团队</div> -->
	<div class="head">
		<!-- <div class="hd">
		  	<a href="">
		     	<img src="../image/4_03.png" alt="">我的团队
		    </a>
		</div> -->
		<div class="head_c">
			<div class="team_head">
				<div class="box_c">
					<div class="count count_tr">
						{{first_num}}个
					</div>
					<span>一级团队</span>
				</div>
				<div class="box_c">
					<div class="count count_t">
						{{second_num}}个
					</div>
					<span>二级团队</span>
				</div>
				<div class="box_c">
					<div class="count ">
						{{all_num}}个
					</div>
					<span>全部团队</span>
				</div>
			</div>
			<div class="team_but">
				<button>查看未开通</button>
				<button>查看已开通</button>
			</div>
		</div>
	</div>
	<div class="sec" v-for="(item,index) in dataList" :key="item" data-id="item.id">
		<div class="section_head">
			<image :src="item.headimgurl" alt="" class="img"/></image>
			<!-- <image :src="item.headimgurl" mode=""></image> -->
			<div class="yh">
				<p class="mz">{{item.nickname}}</p>
				<p class="lb">{{item.type==1?'类别: 一级用户':'类别: 二级用户'}}</p>
			</div>
			<div class="time">
				<img src="../../static/4.7.png" alt="" />
				<span>{{item.add_time}}</span>
			</div>
		</div>
		<div class="section_content">
			<div class="section_content_sp">
				<span class="xj">绿色能量获得</span>
				<span class="mun">{{item.gpower}}</span>
			</div>
			<div class="section_content_sp">
				<span class="xj">现金奖励</span>
				<span class="mun">{{item.balance}}</span>
			</div>
			<div class="section_content_sp">
				<span class="xj">他的团队</span>
				<span class="mun">{{item.all_num}}人</span>
			</div>
		</div>
	</div>
	<!-- <div class="sec">
		<div class="section_head">
			<img src="../../static/头像.png" alt="" class="img"/>
			<div class="yh">
				<p class="mz">DJ YBHU</p>
				<p class="lb">类别: 一级用户</p>
			</div>
			<div class="time">
				<img src="../../static/4.7.png" alt="" />
				<span>2015-09-10</span>
			</div>
		</div>
		<div class="section_content">
			<div class="section_content_sp">
				<span class="xj">绿色能量获得</span>
				<span class="mun">1000</span>
			</div>
			<div class="section_content_sp">
				<span class="xj">现金奖励80</span>
				<span class="mun">80</span>
			</div>
			<div class="section_content_sp">
				<span class="xj">他的团队</span>
				<span class="mun">800人</span>
			</div>
		</div>
	</div> -->
	<!-- <div class="sec">
		<div class="section_head">
			<img src="../../static/头像.png" alt="" class="img"/>
			<div class="yh">
				<p class="mz">DJ YBHU</p>
				<p class="lb">类别: 一级用户</p>
			</div>
			<div class="time">
				<img src="../../static/4.7.png" alt="" />
				<span>2015-09-10</span>
			</div>
		</div>
		<div class="section_content">
			<div class="section_content_sp">
				<span class="xj">绿色能量获得</span>
				<span class="mun">1000</span>
			</div>
			<div class="section_content_sp">
				<span class="xj">现金奖励80</span>
				<span class="mun">80</span>
			</div>
			<div class="section_content_sp">
				<span class="xj">他的团队</span>
				<span class="mun">800人</span>
			</div>
		</div>
	</div> -->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				all_num:'',
				first_num:'',
				second_num:'',
				dataList:[]
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
			
		}
	}
</script>

<style>
	page{
		background: rgb(234,233,238);
	}
	.head{
	position: relative;
	width: 100%;
	height: 285upx;
	background:rgb(233,66,108) ;
	margin-bottom: 248upx;
	
}
	.head_c{
	position: absolute;
	width: 700upx;
	height: 343upx;
	left: 25upx;
	bottom:-213upx ;
	background:#fff ;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 29upx;
	border-radius: 10upx;
}
.count{
	width: 100upx;
	height: 100upx;
	border-radius: 50% 50%;
	background: rgb(254,205,84);
	color: #fff;
	font-size:36upx;
	font-weight: bold;
	text-align: center;
	line-height: 121upx;
	margin-bottom: 17upx;
}
.team_head{
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-bottom: 0.57rem;
}
.box_c{
	display: flex;
	flex-direction: column;
	margin: 0 60upx;
	width: 33%;
	align-items: center;
	justify-content: center;
}
.box_c img{
	width: 100upx;
	height: 100upx;
	margin-bottom: 32upx;
}
.box_c span{
	color: rgb(51,51,51);
	font-size: 30upx;
	white-space: nowrap;
}
.count_t{
	background:rgb(255,119,1)!important;
}
.count_tr{
	background: rgb(249,78,120);
}
.team_but{
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	padding: 0 67upx;
}
.team_but button{
	width: 231upx;
	height: 70upx;
	border: 1px solid;
	border-color: rgb(249,25,117);
	color: rgb(249,25,117);
	background: #fff;
	text-align: center;
	line-height: 70upx;
	font-size: 30upx;
	padding: 0;
}
.section_head{
	width: 690upx;
	height: 125upx;
	background: rgb(249,78,120);
	margin: auto;
	border-radius: 10upx;
	padding: 17upx 9upx;
	display: flex;
	align-items: center;
}
.img{
	width: 90upx;
	height: 90upx;
	border-radius: 50%;
	margin-right: 43upx;
}
.yh{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	margin-right: 180upx;
}
.mz{
	text-align: start;
	width: 170upx;
	color: rgb(255,255,255);
	font-size: 30upx;
}
.lb{
	text-align: start;
	width: 170upx;
	font-size: 24upx;
	color: rgb(255,255,255);
}
.time{
	display: flex;
	align-items: center;
}
.time img{
	width: 21upx;
	height: 21upx;
	margin-right: 10upx;
}
.time span{
	color: rgb(255,255,255);
	font-size: 24upx;
}
.sec{
	margin-bottom: 19upx;
}
.section_content{
	width: 634upx;
	height: 180upx;
	margin: auto;
	background: #fff;
	border-radius: 0 0 10upx 10upx;
	display: flex;
	align-items: center;
	padding-left: 30upx;
}
.section_content_sp{
	width: 33.33%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.xj{
	color: rgb(102,102,102);
	font-size: 24upx;
	margin-bottom: 39upx;
}
.mun{
	color: rgb(0,0,0);
	font-size: 30upx;
	font-weight: bold;
}
</style>
