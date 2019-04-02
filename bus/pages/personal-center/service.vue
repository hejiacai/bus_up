<template>
	<!-- <view class="wrap">
	  <view class="containerBox" style="">
	    <view wx:key="{{index}}" wx:for="{{allContentList}}">
	      <view wx:key="{{index}}" wx:if="{{index%2 == 1}}" class="textBox fl" style="">{{item.value}}</view>
	      <view wx:key="{{index}}" wx:if="{{index%2 == 0}}" class="textBox fr">{{item.value}}</view>
	    </view>
	
	    <view class="leftBox" wx:for="{{inputValueList}}">
	            <view wx:key="{{index}}" class="textItem">{{item.value}}</view>
	        </view>
	        <view class="rightBox" wx:for="{{returnValueList}}">
	            <view wx:key="{{index}}" class="textItem">{{item.value}}</view>
	        </view>
	
	    <view class="section__title">你输入的是：{{inputValue}}</view>
	        <input  bindinput="bindKeyInput" placeholder="输入同步到view中"/>
	  </view>
	  
	  
	  <view class="handleBox">
	    <input class="input_submit" placeholder="点击输入，开始聊天吧" value="{{inputTemp}}" @input="bindKeyInput"/>
	    <button type="submit" class="btn_submit" size="mini" @tap="submitTo">发送</button>
	  </view>
	</view> -->
	<div>nihao</div>
</template>

<script>
	export default {
		data() {
			return {
				inputValue: '',//输入的值
				returnValue: '',//机器人回应的值
				allContentList: [],
				key: "d13b441029804ee99fc4e3b617a5f557", //图灵机器人秘钥
				num: 0
			}
		},
		methods:{
				//绑定键盘按下事件，讲输入的值赋给data
				bindKeyInput: function (e) {
				  this.setData({
					inputValue: e.detail.value
				  })
				},
				//点击发送按钮时触发事件，发送数据给图灵机器人
				submitTo: function (e) {
				  let that = this;
				  //将输入数据追加到列表里面
				  that.allContentList.push({ "value": that.inputValue });
				  //图灵接口
				  let _url ='http://www.tuling123.com/openapi/api';
				  //系统封装的请求方法 ，注意这里没有ajajx的说法
				  wx.request({
					url: _url,
					data: {
					  key: that.key,
					  info: that.inputValue
					},
					//封装返回数据格式
					header: {
					  'Content-Type': 'application/json'
					},
					//请求成功的回调
					success: function (res) {
					  let data = res.data;
					  if (data.code === 100000) {   //100000 表示返回成功
						//将返回值追加到列表
						that.allContentList.push({ "value": data.text });
						//调用set方法，告诉系统数据已经改变   启动循环，循环聊天信息
						  that.returnValue = data.text,
						  that.allContentList = that.allContentList
				
					  } else {
				
					  }
					}
				  })
				  //////
				},
			},
		onLoad() {
		  //y页面初始化时加载的原始数据
		  // 设置标题
		  uni.setNavigationBarTitle({
		  	title:'我能把天聊死'
		  })
// 		  uni.setNavigationBarTitle({
// 			title: '我能把天聊死',
// 		  }),
// 			wx.setStorage({
// 			  key: '111',
// 			  data: '111',
// 			})
		uni.setStorage({
			key: '111',
			data: '111',
		})
		}
		
	}
</script>

<style>
	.wrap{
	    width:100%;
	    height: 100%;
	    box-sizing: border-box;
	}
	.handleBox{
	    position: absolute;
	    bottom: 0;
	    width: 100%;
	    height: 60px;
	    background: #eee;
	    flex-direction: row;
	}
	.containerBox {
	    width: 100%;
	    display: flex;
	    flex-direction:column;
	    padding-bottom:56px; 
	}
	.textBox{
	display:block;text-align: left;
	max-width: 82%;border-radius:5px;font-size:13px;line-height: 26px;
	margin:15px 10px 5px;
	box-sizing: border-box;
	padding: 0 5px; 
	}
	.fr{float:right;background:#eee;}
	.fl{float:left;background:paleturquoise;}
	
	.handleBox {
	    width:100%;
	    height: 34px;
	    position: fixed;
	    bottom:0;
	    background: #efefef;
	    border-top:1px solid #ddd;
	    padding: 10px 0;
	}
	.btn_submit{
	float: right; 
	right: 5px;
	}
	.input_submit{
	    max-width:70%;
	    width:70%;
	    display: inline;
	    float: left;
	    background: #fff;
	    margin:2px 5px;
	    border-radius: 5px;
	}
</style>
