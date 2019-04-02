<template>
	<div>
		<!-- <div class="hd">
		  	<a href="">
		     	<img src="../image/2_03_03.png" alt="">
		    </a>
		    <span>广告主</span>
	     	<a href="" class="tf">查看我的投放</a>
		</div> -->
		<view class="uni-padding-wrap">
		    <view class="page-section swiper">
		        <view class="page-section-spacing">
		            <swiper class="swiper"  :indicator-dots="bannerDatas.indicatorDots" :autoplay="bannerDatas.autoplay" :interval="bannerDatas.interval" :duration="bannerDatas.duration" 
					:indicator-color="bannerDatas.indicatorColor" :indicator-active-color="bannerDatas.indicatorActivevColor" :previous-margin="bannerDatas.previousMargin"
					 :next-margin="bannerDatas.nextMargin" :circular="bannerDatas.circular" >
		                <swiper-item v-for="(item,index) in banner" :key="index">
		                    <view class="swiper-item">
								<image :src="item.cover"></image>
							</view>
		                </swiper-item>
		            </swiper>
		        </view>
		    </view>
		</view>
		<!-- <div id="aui-slide">
		    <div class="aui-slide-wrap" >
		        <div class="aui-slide-node bg-dark">
		            <img src="../../static/广告图5@2x.png" />
		        </div>
		        <div class="aui-slide-node bg-dark">
		            <img src="../../static/广告图5@2x.png" />
		        </div>
		        <div class="aui-slide-node bg-dark">
		            <img src="../../static/广告图5@2x.png" />
		        </div>
		    </div>
		    <div class="aui-slide-page-wrap"></div>
		</div> -->
		<div class="int">
			<input type="" name="" id="message" value="" placeholder="请输入您的广告词"/>
		</div>
		<div class="tfts">
			<div class="ts_left">
				<img src="../../static/1@2x.png" alt="" /><span>选择投放条数</span>
			</div>
			<div class="ts_right" @tap="jump_detail">查看我的投放</div>
		</div>
		<section>
			<div class="tfts_detail">
				<div class="tfts_detail_sp">
					<span class="count">500条</span>
					<span class="yuan">60(元)</span>
				</div>
				<div class="tfts_detail_sp">
					<span class="count">500条</span>
					<span class="yuan">60(元)</span>
				</div>
				<div class="tfts_detail_sp">
					<span class="count">500条</span>
					<span class="yuan">60(元)</span>
				</div>
			</div>
			<div class="int">
				<input type="" name="" id="num" value="" placeholder="其他条数  (一条6毛钱计算)"/>
			</div>
		</section>
		<button class="tj">立即提交</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				bannerDatas:{
					autoplay:true,
					indicatorDots:true,
					indicatorColor:'#CCCCCC',
					indicatorActivevColor:'#FFFFFF',
					previousMargin:20+'rpx',
					nextMargin:20+'rpx',
					circular:true,
					interval:5000
				},
				banner:[
					{cover:'../../static/1.jpg'},
					{cover:'../../static/2.jpg'},
					{cover:'../../static/3.jpg'}
				]
			}
		},
		methods:{
			jump_detail(){
				uni.navigateTo({
					url:'../personal-center/adver_detail'
				})
			}
		}
	}
</script>

<style>
	page{
	background: rgb(234,233,238);
}
.hd{
  width: 100%;
  height: 120upx;
  padding: 0 0 0 30upx;
  font-size: 36upx;
  color: #a2a2a2;
  font-weight: bold;
  display: flex;
  align-items: center;
  color: #000000;
  background: #fff;
  border-bottom: 1px solid;
  border-bottom-color: #ddd;
  background: #fff;
  margin-bottom: 15upx;
}
.hd img{
  margin-right: 210upx;
  width: 40upx;
  height: 40upx;
}
.tf{
	color: rgb(102,102,102)!important;
	font-size: 24upx;
}
.hd span{
	margin-right: 151upx;
}
/* 轮播图 */
	.uni-padding-wrap{
		width: 100%;
		height: 300upx;
		background-color: #E7E6EB;
		padding: 0;
		padding-top: 15upx;		
	}
	.swiper{
		height: 300upx;
	}
	.swiper-item{
		height: 290upx;
		width: 690upx;
		margin:0 auto;
	}
	.swiper-item image{
		width: 100%;
		height: 100%;
		border-radius: 5px;
	}
	/* end */
.aui-slide-node{
	width: 693upx;
	height: 290upx;
}
#aui-slide{
	width: 693upx;
	height: 290upx;
	margin: auto;
	border-radius: 10upx;
	margin-bottom: 62upx;
	}
#aui-slide img{
	border-radius: 10upx;
}
.aui-slide-wrap{
	border-radius: 10upx;
}
.int{
	width: 690upx;
	height: 101upx;
	margin: auto;
	margin-bottom: 71upx;
	background: #fff;
}
#message{
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	box-shadow: 0 0 1px 0 #ddd;
	background: #fff;
	border-radius: 10upx;	
	padding-left:24upx;
}
.tfts{
	width: 100%;
	height: 28upx;
	display: flex;
	align-items: center;
	margin-bottom: 37upx;
	justify-content: space-between;
}
.ts_left{
	display: flex;
	align-items: center;
}
.ts_right{
	margin-right: 15upx;
	font-size: 24upx;
	color: #666666;
}
.tfts img{
	width: 12upx;
	height: 26upx;
	margin-right: 20upx;
}
.tfts span{
	font-size: 30upx;
	font-weight: bold;
	color: #333;
}
section{
	box-sizing: border-box;
	width: 100%;
	height: 327upx;
	background: #fff;
	padding: 43upx 31upx 0 31upx;
	margin-bottom: 182upx;
}
.tfts_detail{
	display: flex;
	justify-content:space-around;
	margin-bottom: 40upx;
}
.tfts_detail_sp{
	width: 205upx;
	height: 112upx;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border: 1px solid;
	border-color:rgb(249,78,120) ;
	border-radius: 20upx;
	color: #333;
	font-weight:bold ;
}
.count{
	font-size: 36upx;
}
.yuan{
	font-size: 30upx;
}
#num{
	box-sizing: border-box;
	width: 100%;
	height: 100%;
	box-shadow: 0 0 1px 0 #ddd;
	background: #fff;
	border-radius: 10upx;	
	padding-left:24upx;
}
.tj{
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 93upx;
	background: rgb(249,78,120);
	color: #fff;
	font-size: 30upx;
	border-radius: 0;
	text-align: center;
	line-height: 93upx;
}
</style>
