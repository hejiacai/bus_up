<template>
	<div class="box">
		<div class="ipt">
			<input type="" name="" id="" value="" placeholder="请输入原来的密码"/>
		</div>		
		<div class="ipt">
			<input type="" name="" id="" value="" placeholder="请输入6-12位密码"/>
		</div>
		<div class="ipt">
			<input type="" name="" id="" value="" placeholder="请确定新密码"/>
		</div>
		<div class="button">
			<button>确认修改</button>
		</div>
	</div>
</template>

<script>
</script>

<style>
.box{
	box-sizing: border-box;
	padding-top: 41upx;
}
.ipt{
	width: 100%;
	height: 95upx;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 29upx;
}
.ipt input{
	width: 690upx;
	height: 100%;
	padding-left: 23upx;
	border: 1px solid;
	border-color: #ddd;
	border-radius: 5upx;
	font-size: 30upx;
}
.button{
	width: 100%;
	height: 103upx;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 171upx;
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
.xg{
	margin-bottom: 134upx;
}
.code{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 30upx;
	margin-bottom: 258upx;
}
.code button{
	width: 196upx;
	height: 95upx;
	text-align: center;
	line-height: 95upx;
	border: 1px solid;
	border-color: rgb(249,78,120);
	color: rgb(249,78,120);
	font-size: 30upx;
	font-weight: bold;
	background: #fff;
	padding: 0;
}
.code input{
	width: 454upx;
	height: 95upx;
}
</style>
