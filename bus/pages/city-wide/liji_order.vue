<template>
	<div>
		<div class="box">
	  <div class="img">
	    <img src="../../static/4.1_03.png" alt=""/>
	  </div>
	  <p class='fb'>接单成功</p>
	  <p class="gj">赶紧联系用户吧!</p>
  </div>
  <div class="rwx">
        <img src="../../static/4_05.png" alt="">
        <p class="zmm">张某某</p>
        <p class="lxdh">联系电话:  18017360909</p>
        <p class="dress">地点:杭州区滨江区xx路xx号</p>
        <button type="button" name="button" class="ly">留言</button>
        <p class="lynr">内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容</p>
    </div>
	</div>
</template>

<script>
</script>

<style>
page{
	background:#eae9ee ;
}
.img{
  margin-bottom: 36upx;
  width: 100% ;
  height: 233upx;
  display: flex;
  align-items: center;
  justify-content: center;
}
.img img{
  width: 233upx;
  height: 233upx;
}
.fb{
  font-size: 36upx;
  color: #f94e78;
  text-align: center;
  font-weight: bold;
}
.bt{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.ljck{
  width: 400upx;
  height: 105upx;
  border-radius: 100upx;
  line-height: 105upx;
  font-size: 30upx;
  margin-bottom: 42upx;
  background: #f74c76;
  color: #fff;
  padding: 0;
  font-weight: bold;
}
.fhsy{
  width: 400upx;
  height: 105upx;
  line-height: 105upx;
  border-radius: 100upx;
  font-size: 30upx;
  background: #fff;
  color: #f74c76;
  padding: 0;
  font-weight: bold;
  box-shadow: 1px 1px 1px 2px #ddd;
}
.box{
	padding-top: 50upx;
	width: 100%;
	height: 500upx;
	background: #fff;
	margin-bottom: 76upx;
}
.box2{
	width: 690upx;
	height: 516upx;
	background: #fff;
	margin: auto;
	border-radius: 5upx;
}
.gj{
	font-size: 30upx;
	color: #f94e78;
	  text-align: center;
	  font-weight: bold;
	    margin-bottom: 346upx;
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
.dress{
	font-size: 24upx;
	text-align: center;
	color: #797979;
}
</style>
