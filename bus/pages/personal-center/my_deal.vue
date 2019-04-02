<template>
<view class="body-view">
		<scroll-view class="top-menu-view" scroll-x="true" :scroll-left="scrollLeft">
			<block v-for="(menuTab,index) in menuTabs" :key="index">
				<view class="menu-one-view" v-bind:id="'tabNum'+index" @click="swichMenu(index)">
					<view :class="[currentTab==index ? 'menu-one-act' : 'menu-one']">
						<view class="menu-one-txt">{{menuTab.name}}</view>
						<view class="menu-one-bottom">
							<view class="menu-one-bottom-color"></view>
						</view>
					</view>
				</view>
			</block>
		</scroll-view>
		<swiper :current="currentTab" class="swiper-box-list" duration="300" @change="swiperChange">
			<block v-for="(swiperDate,index1) in swiperDateList" :key="index1">
				<swiper-item>
					<scroll-view class="swiper-one-list" scroll-y="true" @scrolltolower="loadMore(index1)">
						<block v-for="(swiperDate2,index2) in swiperDate" :key="index2">
							<view class="swiper-list-entity">
								<image :src="swiperDate2.img" mode=""></image>
								<view class="deal_detail_c">
									<view class="nickname">{{swiperDate2.name}}</view>
									<view class="time">{{swiperDate2.time}}{{swiperDate2.message}}</view>
								</view>
							</view>
						</block>
					</scroll-view>
				</swiper-item>
			</block>
		</swiper>
</view>
</template>
<script>
	export default {	
		data() {
			return {
				scrollLeft: 0,
				isClickChange: false,
				currentTab: 0,
				menuTabs: [{
					name: '买进'
				}, {
					name: '卖出'
				}
				],
				// swiperDateList:[['买进','买进2'],['卖出','卖出2']]
				swiperDateList: [
					[
						{
						    img: '../../static/1.jpg',
						    name: '狐狸叔叔',
						    message: '今晚去吃饭吗?',
						    time: '19:08',
						},
						{
						    img: '../../static/2.jpg',
						    name: '老虎爸爸',
						    message: '黑发不知勤学早，白首方悔读书迟。 —— 颜真卿《劝学诗》',
						    time: '02:08',
						}
					],
					[
						{
						    img: '../../static/3.jpg',
						    name: '偶遇妹子',
						    message: '忽如一夜春风来，千树万树梨花开。 —— 岑参《白雪歌送武判官归京》',
						    time: '02:08',
						},
						{
						    img: '../../static/4.jpg',
						    name: '男神',
						    message: '寂寞空庭春欲晚，梨花满地不开门。 —— 刘方平《春怨》',
						    time: '23:08',
						}
					]
				]
			}
		},
		onLoad() {
			//初始化数据
			this.getDateIncome();
			this.getDatePay();
			},
		methods: {
			swichMenu: async function(current) { //点击其中一个 menu
					if (this.currentTab == current) {
						return false;
					} else {
						this.currentTab = current;
						this.setScrollLeft(current);
					}
				},
				swiperChange: async function(e) {
						let index = e.target.current;
						this.setScrollLeft(index);
						this.currentTab = index; 
					},
					setScrollLeft: async function(tabIndex) {
							let leftWidthSum = 0;
							for (var i = 0; i <= tabIndex; i++) {
								let nowElement = await this.getWidth('tabNum' + i);
								leftWidthSum = leftWidthSum + nowElement.width;
							}
							let winWidth = uni.getSystemInfoSync().windowWidth;
							this.scrollLeft = leftWidthSum > winWidth ? (leftWidthSum - winWidth) : 0
						},
						getWidth: function(id) { //得到元素的宽高
							return new Promise((res, rej) => {
								uni.createSelectorQuery().select("#" + id).fields({
									size: true,
									scrollOffset: true
								}, (data) => {
									res(data);
								}).exec();
							})
						},
						loadMore: function(tabIndex) {
							console.log('正在加载更多数据。。。')
							this.getDateList(tabIndex);
						},
						getDateIncome() {
							var token = (uni.getStorageSync("user_info")).token;
							console.log(token)
							var type = 1;
							uni.request({
								url:'http://bus.liebianzhe.com/api/user/my_shop',
								data:{
									token:token,
									type:type
								},
								success: (res) => {
									console.log(res)
								}
							})
						},
						getDatePay(){
							// var token = (uni.getStorageSync('user_info')).token;
							var token=(uni.getStorageSync("user_info")).token;
							var type = 2;
							uni.request({
								url:'http://bus.liebianzhe.com/api/user/my_shop',
								data:{
									token:token,
									type:type
								},
								success: (res) => {
									console.log(res)
								}
							})
						}
 
				}

		}
</script>

<style>
	.nickname{
		color: rgb(51,51,51);
		font-size: 30upx;
		margin-bottom: 17upx;
	}
	.time{
		color: rgb(51,51,51);
		font-size: 24upx;
		width: 500upx;
		overflow-x: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	page {
		width: 100%;
		height: 100%;
		display: flex;
		flex-wrap: wrap;
		align-items: flex-start;
		justify-content: center;
		background: rgba(249, 249, 249, 1);
	}
 
	.body-view {
		display: flex;
		flex: 1;
		flex-direction: column;
		overflow: hidden;
		height: 100%;
		width: 100%;
		align-items: flex-start;
		justify-content: center;
	}
 
	.top-menu-view {
		display: flex;
		white-space: nowrap;
		width: 100%;
		background-color: #FFFFFF;
		height: 112upx;
		/* 在这里设置导航条高度 */
	}
 
	.top-menu-view .menu-one-view {
		display: inline-block;
		white-space: nowrap;
		height: 100%;
		width: 50%;
	}
 
	.top-menu-view .menu-one-view .menu-one {
		/* 在这里写 单个按钮样式 */
		margin-left: 25upx;
		margin-right: 25upx;
		position: relative;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
 
	.top-menu-view .menu-one-view .menu-one .menu-one-txt {
		height: 40upx;
		font-size: 28upx;
		font-weight: 400;
		color: rgba(154, 154, 154, 1);
		line-height: 40upx;
	}
 
	.top-menu-view .menu-one-view .menu-one .menu-one-bottom {
		position: absolute;
		bottom: 0;
		width: 100%;
	}
 
	.top-menu-view .menu-one-view .menu-one .menu-one-bottom .menu-one-bottom-color {
		width: 60%;
		height: 4upx;
	}
 
	.top-menu-view .menu-one-view .menu-one-act {
		/* 在这里写 单个按钮样式 */
		margin-left: 25upx;
		margin-right: 25upx;
		position: relative;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
 
	.top-menu-view .menu-one-view .menu-one-act .menu-one-txt {
		height: 40upx;
		font-size: 28upx;
		font-weight: 400;
		color: #333333;
		line-height: 40upx;
	}
 
	.top-menu-view .menu-one-view .menu-one-act .menu-one-bottom {
		position: absolute;
		bottom: 0;
		width: 100%;
		display: flex;
		justify-content: center;
	}
 
	.top-menu-view .menu-one-view .menu-one-act .menu-one-bottom .menu-one-bottom-color {
		width: 60%;
		height: 4upx;
		background: rgb(249,78,120);
	}
 
	.swiper-box-list {
		flex: 1;
		width: 100%;
		height: auto;
		background-color: #FFFFFF;
	}
 
	.swiper-one-list {
		height: 100%;
		width: 100%;
		background: rgb(234,233,238);
		padding-top: 20upx;
	}
 
	.swiper-one-list .swiper-list-entity {
		    width: 700upx;
			height: 151upx;
			background: #FFFFFF;
			margin: auto;
			padding-left: 8upx;
			display: flex;
			align-items: center;
			margin-bottom: 20upx;
	}
	.swiper-list-entity image{
		width: 90upx;
		height: 90upx;
		border-radius: 50%;
		margin-right: 40upx;
	}
</style>