<template>
	<div class="DetailMessage">

		<div style="display: flex;">
			
			<div class="messageBigTitle">客户名称站位</div>
			<p class="messageStlye">待审批</p>

		</div>

		<div style="height: 1px;width: 94%;background:#EDF0F2 ;margin-top: 10px;margin-left: 3%;"></div>

		<div style="display: flex;">
			<p class="messageTitle">客户类型</p>
			<p class="messageContent">{{customerType}}</p>
		</div>
		<div style="display: flex;">
			<p class="messageTitle">申请类型</p>
			<p class="messageContent">{{applyType}}</p>
		</div>
		<div style="display: flex;">
			<p class="messageTitle">申请金额（元）</p>
			<p class="messageContent">{{applyMoney}}</p>
		</div>
		<div style="display: flex;">
			<p class="messageTitle">申请人</p>
			<p class="messageContent">{{applyName}}</p>
		</div>
		<div style="display: flex;">
			<p class="messageTitle">申请机构</p>
			<p class="messageContent">{{applyJigou}}</p>
		</div>

	</div>

</template>

<script>
	
	export default {
		
		
		  props: {
    customerType: String,
    applyType: String,
    applyMoney: String,
    applyName: String,
    applyJigou: String,
  },
		
		
	}
</script>

<style lang="less">
	@import "~common/css/common.less";
	.DetailMessage {
		position: relative;
		background: white;
		width: 90%;
		margin-left: 5%;
		margin-top: 20px;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		.messageBigTitle {
			font-family: PingFangSC-Medium;
			font-size: 16px;
			color: #1E1F22;
			margin-top: 10px;
			margin-left: 10px;
			
		}
		.messageTitle {
			font-family: PingFangSC-Regular;
			font-size: 14px;
			margin-top: 10px;
			margin-left: 10px;
			color: #697184;
		}
		.messageContent {
			right: 10px;
			margin-top: 10px;
			position: absolute;
			font-family: PingFangSC-Regular;
			font-size: 14px;
			color: #1E1F22;
		}
					.messageStlye {
				right: 10px;
				margin-top: 10px;
				position: absolute;
				font-family: PingFangSC-Regular;
				font-size: 12px;
				color: #FF910C;
			}
	}
</style>