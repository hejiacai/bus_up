<template>
	<div>
		<div class="pay-keyboard-number">
			<div class="pay-keyboard-left">
				<div class="left-item"
				  v-for="item in numberList"
				  :data-item="item"
				  :key="item"
				  @click="handleSelectNumber">
				  {{item}}
				</div>
			</div>
			<div class="pay-keyboard-right">
				<div class="pay-keyboard-right-clear">
				  <img class="right-icon" src="../assets/img/i_clear.png" alt="清楚数字按钮">
				</div>
				<div class="pay-keyboard-right-btn">
				  <span class="right-btn-price">￥221.22</span>
				  <span class="right-btn-pay">确认支付</span>
				</div>
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
		methods:{
			handleSelectNumber(){
				
			}
		}
	}
</script>

	
<style lang="less">
	  .pay-keyboard-number {
          display: flex; flex-direction: row;
          .pay-keyboard-left {
            width: 80%;
            display: grid; 
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 1fr);
            grid-auto-flow: row;
            .left-item{
              background-color: #ffffff;
              font-size: 1.5rem; font-weight: 600;
              color: #000;
              border: 1px solid #F4F4F4;
              padding: 1rem 0;
			  
            }
          }
          .pay-keyboard-right {
            width: 20%; display: flex; flex-direction: column;
            .pay-keyboard-right-clear {
              height: 25%;
              display: flex; justify-content: center;  align-items: center;
              border-bottom: 1px solid #F4F4F4;
              .right-icon {
                width: 2rem; height: 2rem;
              }
            }
            .pay-keyboard-right-btn {
              height: 75%;
              display: flex; flex-direction: column; justify-content: center;  align-items: center;
               background: #6fc538; 
              .right-btn-price {
                width: 100%;
                word-wrap:break-word;
                color: #fff;
              }
              .right-btn-pay {
                width: 3rem; margin: 0 auto;
                font-size: 1.1rem; color: #fff;
              }
            }
          }
        }

	
</style>
