<template>
	<div>
    <div class="gg">
        <img src="../../static/3_03.png" alt="" class='gg_img'>
        <div class="ggbt">
            <p class="gbt">广告标题广告标题广告标题</p>
            <p class="jqsz">广告截取一定字数广告截取一定字数</p>
            <div class="ts">
            	<div class="ts_left">
            		<img src="../../static/赞.png" alt="" /><span>10条</span>
            	</div>
                <div class="ts_right">
            		<img src="../../static/fenxiang_03.png" alt="" @tap="show_share"><span>10条</span>
            	</div>              
            </div>
        </div>
    </div>
    <div class="gg">
        <img src="../../static/3_03.png" alt="" class='gg_img'>
        <div class="ggbt">
            <p class="gbt">广告标题广告标题广告标题</p>
            <p class="jqsz">广告截取一定字数广告截取一定字数</p>
            <div class="ts">
				<div class="ts_left">
					<img src="../../static/赞.png" alt="" /><span>10条</span>
				</div>
                <div class="ts_right">
					<img src="../../static/fenxiang_03.png" alt="" @tap="show_share"><span>10条</span>
				</div>              
            </div>
        </div>
    </div>
    <div class="gg">
        <img src="../../static/3_03.png" alt="" class='gg_img'>
        <div class="ggbt">
            <p class="gbt">广告标题广告标题广告标题</p>
            <p class="jqsz">广告截取一定字数广告截取一定字数</p>
            <div class="ts">
            	<div class="ts_left">
            		<img src="../../static/赞.png" alt="" /><span>10条</span>
            	</div>
                <div class="ts_right">
            		<img src="../../static/fenxiang_03.png" alt="" @tap="show_share"><span>10条</span>
            	</div>              
            </div>
        </div>
    </div>
    <div class="gg">
        <img src="../../static/3_03.png" alt="" class='gg_img'>
        <div class="ggbt">
            <p class="gbt">广告标题广告标题广告标题</p>
            <p class="jqsz">广告截取一定字数广告截取一定字数</p>
            <div class="ts">
            	<div class="ts_left">
            		<img src="../../static/赞.png" alt="" /><span>10条</span>
            	</div>
                <div class="ts_right">
            		<img src="../../static/fenxiang_03.png" alt="" @tap="show_share"><span>10条</span>
            	</div>              
            </div>
        </div>
    </div>
	<div class="share" v-if="isShow">
			<div class="weixin">
				<image src="../../static/分享微信(1).png" mode=""></image>
				<span>微信</span>
			</div>
	</div>
	<div class="quxiao" v-if="isShow" @tap="cancel">取消</div>
	<div class="shut" v-if="isShow" @tap="cancel"></div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isShow:false
			}
		},
		methods:{
			show_share(){
				this.isShow = true;
			},
			cancel(){
				this.isShow = false;
			}
		}
	}
</script>

<style>
	page{
  background: #fff;
}
.shut{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 998;
	background-color: rgba(0,0,0,.3);
}
.quxiao{
	width: 690upx;
	height: 96upx;
	position: fixed;
	bottom: 5%;
	left: 4%;
	background: #FFFFFF;
	font-size: 30upx;
	color: #333333;
	z-index: 999;
	border-radius: 15upx;
	text-align: center;
	line-height: 96upx;
}
.share{
	position: fixed;
	left: 4%;
	bottom: 15%;
	z-index: 999;
	width: 690upx;
	height: 186upx;
	background: #FFFFFF;
	border-radius: 15upx;
	display: flex;
	align-items: center;
	justify-content: center;
}
.weixin{
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 30upx;
	color: #333333;
}
.weixin image{
	width: 60upx;
	height: 50upx;
}
.ts_left {
	display: flex;
	align-items: center;
}
.ts_right{
	display: flex;
	align-items: center;
}
.ts_left img{
	margin-right: 10upx!important;
}
.ts_right img{
	margin-right: 10upx!important;
}
.gg{
  width: 100%;
  height: 240upx;
  display: flex;
  padding: 0 30upx;
  border-top: 1px solid;
  border-color: #eee;
  align-items: center;
}
.gg_img{
  width: 150upx;
  height: 150upx;
  margin-right: 90upx;
}
.ggbt{
  display: flex;
  flex-direction: column;
}
.gbt{
  font-size: 30upx;
  color: #333333;
  font-weight: bold;
}
.jqsz{
  font-size: 24upx;
  color: #666666;
  margin-bottom: 25upx;
}
.ts{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50upx;
}
.ts span{
  font-size: 24upx;
  font-weight: bold;
  color: #333;
}
.ts img{
	width: 30upx;
	height: 30upx;
}

</style>
