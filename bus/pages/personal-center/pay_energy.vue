<template>
	<div class="conten">
		<div class="box">
			<div class="head">
				<div class="head_c">
					<div class="count">
						116个
					</div>
					<span>我的绿色能量</span>
				</div>
			</div>
		</div>
		<div class="ipt">
			<input type="" name="" id="" value="" placeholder="请输入出售绿色能量个数"/>
		</div>
		<div class="ipt">
			<input type="" name="" id="" value="" placeholder="请输入出售价格(建议1:1)"/>
		</div>
		<div class="button">
			<button>立即出售</button>
		</div>
	</div>
</template>

<script>
</script>

<style>
  page{
	background: #fff;
}
.box{
	width: 100%;
	height: 413upx;
	background:#eae9ee;
	margin-bottom: 75upx;
}
.head{
	position: relative;
	width: 100%;
	height: 165upx;
	background:rgb(233,66,108) ;
}
.head_c{
	position: absolute;
	width: 700upx;
	height: 253upx;
	left: 25upx;
	bottom:-103upx;
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
	background: rgb(249,78,120);
	color: #fff;
	font-size:36upx;
	font-weight: bold;
	text-align: center;
	line-height: 121upx;
	margin-bottom: 27upx;
}
.head_c span{
	font-size: 36upx;
	font-weight: bold;
	color: #333;
}
.ipt{
	width: 100%;
	height: 95upx;
	display: flex;
	justify-content: center;
	margin-bottom:45upx;
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
</style>
