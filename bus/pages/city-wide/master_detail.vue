<template>
	<div class="conten">
	<div class="box">
         <img src="../../static/4_05_02.png" alt="">		 
    </div>
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
    <div class="xnr">
      <p class='bt'>标题标题标题标题标题</p>
      <p class='nr'>内容内容内容内容内容内容内容内容内容</p>
      <div class="rq">
        <view>
			<img src="../../static/4.7.png" alt="" class='rqtu'>2015-09-10
        </view>
        <view>
			<img src="../../static/4.7.1.png" alt="" class='didian'/>上海
        </view>
      </div>
    </div>
    <div class="rwx">
        <img src="../../static/4_05.png" alt="">
        <p class="zmm">张某某</p>
        <p class="lxdh">联系电话:  18017360909</p>
        <button type="button" name="button" class="ly">留言</button>
        <p class="lynr">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
    </div>
    <div class="bt">
        <button type="button" name="button" class="ljjd" @tap="jump_order">立即接单</button>
    </div>
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
			jump_order(){
				uni.navigateTo({
					url:'../city-wide/liji_order'
				})
			}
		}
	}
</script>

<style>
	
	page{
  background: #eae9ee;
}
.hd{
  width: 100%;
  height: 130upx;
  padding: 58upx 0 23upx 30upx;
  font-size: 36upx;
  color: #fff!important;
  font-weight: bold;
  display: flex;
  color: #000000;
}
.hd img{
  margin-right: 210upx;
  width: 40upx;
  height: 40upx;
}
.box{
  width: 100%;
  height: 424upx;
}
.swiper-item image{
	  width: 100%;
	height: 424upx;
}
	/* 轮播图 */
	
		.uni-padding-wrap{
		width: 100%;
		height:350upx;
		padding: 0;
	}
	.swiper{
		width: 100%;
		height: 350upx;
	}
	.swiper-item{
		height: 100%;
		width: 100%;
	}
	.swiper-item image{
		width: 100%;
		height: 100%;
	}
	
.box img{
	width: 100%;
	height: 100%;
}
.xnr{
  padding: 25upx 30upx 22upx 30upx;
  width: 100%;
  height: 235upx;
  background: #fff;
  margin-bottom: 80upx;
  box-sizing: border-box;
}
.bt{
  font-size: 30upx;
  color: #333;
  font-weight: bold;
}
.nr{
  font-size: 24upx;
  color: #666;
}
.rq{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 38upx;
  /* margin-bottom: 77upx; */
}
.rq view{
  font-size: 24upx;
  color: #333;
  font-weight: bold;
  display: flex;
  align-items: center;
}
.rqtu{
  width: 36upx;
  height: 36upx;
  margin-right: 30upx;
}
.didian{
  width: 36upx;
  height: 36upx;
  margin-right: 30upx;
}
.rwx{
  position: relative;
  width: 690upx;
  height: 420upx;
  border-radius: 10upx;
  background: #fff;
  margin: auto;
  padding-top: 80upx;
  margin-bottom: 57upx;
}
.rwx img{
  position: absolute;
  top: -55upx;
  left: 50%;
  margin-left: -55upx;
  width: 110upx;
  height: 110upx;
}
.zmm{
  text-align: center;
  font-size: 30upx;
  font-weight: bold;
  color: #333;
}
.lxdh{
  text-align: center;
  font-size: 24upx;
  font-weight: bold;
  color: #333;
}
.ly{
  display: block;
  width: 120upx;
  height: 50upx;
  line-height: 50upx;
  border-radius: 100upx;
  font-size: 24upx;
  color: #333;
  font-weight: bold;
  box-shadow: 1px 1px 1px 3px #feeaef;
  margin-bottom: 24upx;
  padding: 0;
  margin-left: 5upx;
  background: #fff;
  margin-top: 22upx;
}
.lynr{
  font-size: 24upx;
  color: #666;
  padding:0 57upx 0 17upx;
}
.ljjd{
  width: 610upx;
  height: 100upx;
  border-radius: 100upx;
  text-align: center;
  line-height: 100upx;
  color: #fff;
  background: #f9436b;
  font-size: 30upx;
  font-weight: bold;
}
.bt{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 30upx;
}
</style>
