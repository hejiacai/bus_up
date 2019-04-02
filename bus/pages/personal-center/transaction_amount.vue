<template>
	<div class="box">
	<div class="head">
		<div class="head_c">
			<div class="count">
				116元
			</div>
			<p>交易金额</p>
			<div class="but">
				<button>立即提现</button><button>提现记录</button>
			</div>
		</div>
	</div>
	<div class="income_list">
		<div class="income_list_c">
			<img src="../../static/推广收入.png" alt="" /><span>推广收入</span>
		</div>
		<div class="income_list_c">
			<img src="../../static/卖出收入@2x.png" alt="" /><span>卖出收入</span>
		</div>
		<div class="income_list_c">
			<img src="../../static/同城收入.png" alt="" /><span>同城收入</span>
		</div>
		<div class="income_list_c">
			<img src="../../static/广告收入.png" alt="" /><span>广告收入</span>
		</div>
	</div>
	<div class="currency_detail">
		<img src="../../static/能量详情@2x.png" alt="" />
		<sppan>交易详细</sppan>
	</div>
	<div class="currency_detail_content">
		<img src="../../static/头像.png" alt="" />
		<div class="currency_detail_content_c">
			<span>Dero Hu</span>
			<span class="time">2018-11-5 同城收入2元</span>
		</div>
	</div>
	<div class="currency_detail_content">
		<img src="../../static/头像.png" alt="" />
		<div class="currency_detail_content_c">
			<span>Dero Hu</span>
			<span class="time">2018-11-5 同城收入2元</span>
		</div>
	</div>
	<div class="currency_detail_content">
		<img src="../../static/头像.png" alt="" />
		<div class="currency_detail_content_c">
			<span>Dero Hu</span>
			<span class="time">2018-11-5 同城收入2元</span>
		</div>
	</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		computed:{
			Screen_width (){
				return uni.getSystemInfoSync().windowWidth;
				},
			Screen_height(){
				return uni.getSystemInfoSync().windowHeight;
			}
		},
		methods:{
			
		},
		onLoad() {
			
		}
	}
</script>

<style>
/* 	html,body{
	background: rgb(234,233,238);
} */
page{
	background: rgb(234,233,238);
}
/* .box{
	background: rgb(234,233,238);
} */
.head{
	position: relative;
	width: 100%;
	height: 165upx;
	background:rgb(233,66,108) ;
	margin-bottom: 263upx;
}
.head_c{
	position: absolute;
	width: 700upx;
	height: 381upx;
	left: 25upx;
	bottom:-241upx;
	background:#fff ;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 29upx;
	border-radius: 10upx;
}
.count{
	width: 121upx;
	height: 121upx;
	border-radius: 50% 50%;
	background: rgb(255,0,0);
	color: #fff;
	font-size:36upx;
	font-weight: bold;
	text-align: center;
	line-height: 121upx;
	margin-bottom: 17upx;
}
.head_c p{
	font-size: 30upx;
	font-weight: bold;
	color: #333;
	margin-bottom: 79upx;
}
.ipt{
	width: 100%;
	height: 95upx;
	display: flex;
	justify-content: center;
	margin-bottom:45upx ;
}
.ipt input{
	width: 690upx;
	height: 100%;
	border: 1px solid;
	border-color: #ddd;
	padding-left: 22upx;
	border-radius: 10upx;
}
.button{
	width: 100%;
	height: 103upx;
	text-align: center;
}
.button button{
	width: 610upx;
	height: 100%;
	background: rgb(249,78,120);
	color: #fff;
	font-size: 30upx;
	border-radius: 200upx;
	line-height: 103upx;
	margin-top: 186upx;
}
.currency_detail{
	display: flex;
	align-items: center;
	padding-left:30upx;
	margin-bottom: 29upx;
}
.currency_detail img{
	width: 39upx;
	height: 36upx;
	margin-right:24upx;
}
.currency_detail span{
	font-size: 30upx;
	font-weight: bold;
	color: #333;
}
.currency_detail_content{
	display: flex;
	margin: auto;
	width: 700upx;
	height: 151upx;
	background: #fff;
	border-radius: 10upx;
	padding-top: 34upx;
	padding-left: 10upx;
	margin-bottom: 20upx;
}
.currency_detail_content img{
	width: 90upx;
	height: 90upx;
	margin-right: 42upx;
}
.currency_detail_content_c{
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	font-size: 30upx;
}
.time{
	font-size: 24upx;
}
.button{
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 93upx;
	background:rgb(216,53,96) ;
	color: #fff;
	border: 0;
	text-align: center;
	line-height: 93upx;
	font-size: 30upx;
	border-radius: 0;
}
.income_list{
	width: 700upx;
	height: 180upx;
	margin: auto;
	background: #fff;
	display: flex;
	align-items: center;
	margin-bottom: 40upx;
}
.income_list_c{
	width: 25%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.income_list_c img{
	width: 60upx;
	height: 56upx;
	margin-bottom: 29upx;
}
.income_list_c span{
	font-size: 30upx;
	color: #333;
	font-weight: bold;
}
.but{
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 83upx;
}
.but button{
	width: 231upx;
	height: 70upx;
	border: 1px solid;
	border-color:rgb(249,25,117);
	text-align: center;
	line-height: 70upx;
	background: #fff;
	color:rgb(249,78,120);
	font-size: 30upx;
	padding: 0;
	margin: 0 36upx;
}
</style>
