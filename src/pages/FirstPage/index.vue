<template>
	<div class="firstPage">

		<div style="height: 50px;width: 100%;background: white;flex-direction: row;display: flex">

			<img style="width: 14px;height: 18px;margin-left: 18px;margin-top: 18px;" @click="onClickLeft" src="~common/img/arrow.png" />

			<div style="text-align: center;font-size: 14px;color: black;display: flex;justify-content: center;width: 100%;align-items: center;">上海银行资产保全系统</div>

		</div>

		<div v-if="isFlag">

			<div class="square_container">
				<div class="square" style="margin-left:10px;" @click="btnYeji">
					<p class="numStyle">14</p>
					<p class="square_title">待办事项</p>
				</div>

				<div class="square" @click="changetx">
					<p class="numStyle">22</p>
					<p class="square_title">待批量审批</p>
				</div>

			</div>
			<div style="width: 100%;height: 10px;background-color: whitesmoke;"></div>

			<div class="square_container">
				<div class="square" style="margin-left:10px;" @click="btnYeji">
					<p class="numStyle">21</p>
					<p class="square_title">已办事项</p>
				</div>

				<div class="square" @click="changetx">
					<p class="numStyle">19</p>
					<p class="square_title">已办结事项</p>
				</div>

			</div>
			<div style="width: 100%;height: 10px;background-color: whitesmoke;"></div>

			<!--<div class="DetailMessage">

				<div style="display: flex;">

					<div class="messageBigTitle">客户名称站位</div>
					<p class="messageStlye">待审批</p>

				</div>

				<div style="height: 1px;width: 94%;background:#EDF0F2 ;margin-top: 10px;margin-left: 3%;"></div>

				<div style="display: flex;">
					<p class="messageTitle">客户名称</p>
					<p class="messageContent">上海xxx分公司</p>
				</div>
				<div style="display: flex;">
					<p class="messageTitle">客户类型</p>
					<p class="messageContent">公司</p>
				</div>
				<div style="display: flex;">
					<p class="messageTitle">申请类型</p>
					<p class="messageContent">未知</p>
				</div>
				<div style="display: flex;">
					<p class="messageTitle">申请金额（元）</p>
					<p class="messageContent">20000000</p>
				</div>
				<div style="display: flex;">
					<p class="messageTitle">申请人</p>
					<p class="messageContent">立夏</p>
				</div>
				<div style="display: flex;">
					<p class="messageTitle">申请机构</p>
					<p class="messageContent">上海xxx分公司</p>
				</div>

			</div>-->

			<WaitHandle v-for="(item,index) in listShenqingMing" :key="index" 
				:customerType="item.customerType"
				:applyType= "item.applyType"
				:applyMoney= "item.applyMoney" 
				:applyName="item.applyName" 
				:applyJigou= "item.applyJigou">

			</WaitHandle>

		</div>
		<div v-else>
			<div style="display: flex;flex-wrap: wrap; align-items: center;flex-direction: column;">

				<img style="width: 60%;margin-top: 100px;" src="~common/img/empty_nopermission@3x.png" />
				<span style="margin-top: 20px;color: #999999;font-size: 17px;">暂无交易权限</span>
			</div>
		</div>
	</div>

</template>

<script>
	import {
		quanxian
	} from "service/task";

	import WaitHandle from "./children/WaitHandle";

	import {

		getUserId,
		ShouNav,
		hideNaviBar

	} from "service/nativeUtils";

	export default {

		components: {
			WaitHandle

		},

		data() {
			return {

				userid: '',
				isFlag: true,
				listShenqingMing: [
				{	customerType: "鼎折覆餗",applyType: "胜多负少" ,applyMoney: "水电费",applyName: "发鬼地方" ,applyJigou: "功夫格斗"},
				{	customerType: "胜多负少的覆餗",applyType: "胜撒方式" ,applyMoney: "水苟富贵",applyName: "发发鬼地方方" ,applyJigou: "玉兔号"},
				{	customerType: "第三方餗",applyType: "胜多多福多寿" ,applyMoney: "水电费",applyName: "发鬼地方" ,applyJigou: "功夫格斗"}
				],

			};
		},

		created() {

			hideNaviBar();
			getUserId().then(userId => {

				this.userid = userId;

				this.getquanxian();

			});

		},

		methods: {

			btnYeji() {

				window.location.href = "test.html"

			},

			changetx() {

				window.location.href = "put-headImg.html"

			},

			trainBtn() {

				window.location.href = "TrainingMaterials.html"
			},

			NotificateBtn() {

				window.location.href = "YewuNotificate.html"
			},

			onClickLeft() {

				ShouNav();
				//window.location.href = "index.html"

			},

			async getquanxian() {
				try {
					const {
						resultCode,
						failreason,
						isFlag

					} = await quanxian({
						userid: this.userid,
					});

					if(isFlag == "1") {
						this.isFlag = true;
					} else {

						this.isFlag = false;

					}

					console.log('权限+' + isFlag)

				} catch(error) {

				}
			},

		}

	}
</script>

<style lang="less">
	@import "~common/css/common.less";
	.firstPage {
		/*background: #FAFAFA;
border-radius: 2px;
border-radius: 2px;*/
		background-color: #FAFAFA;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		.rt_pos {
			/*position: absolute;*/
			right: 50px;
			top: 150px;
			content: "";
			margin-left: 20px;
			margin-top: 10px;
			display: inline-block;
			height: 20px;
			width: 20px;
			border-width: 0 0 2px 2px;
			border-color: #fff;
			border-style: solid;
			transform: matrix(0.21, 0.21, -.31, 0.31, 0, 0);
			-webkit-transform: matrix(0.35, 0.35, -.35, 0.35, 0, 0);
		}
		.square_container {
			display: flex;
			margin-top: 10px;
			margin-left: 20px;
			height: 60px;
			/*justify-content: center;*/
			.square {
				display: flex;
				flex-direction: column;
				flex: 1;
				/*align-items: center;*/
				/*justify-content: center;*/
				.numStyle {
					font-family: DINAlternate-Bold;
					font-size: 18px;
					color: ##1E1F22;
				}
				.square_title {
					font-family: PingFangSC-Regular;
					font-size: 12px;
					color: #697184;
				}
			}
			.squareIcon {
				display: flex;
				flex-direction: column;
				flex: 1;
				align-items: center;
				/*justify-content: center;*/
				.square_icon {
					width: 84px;
					height: 84px;
					/*align-items: center;*/
				}
				.square_title {
					font-family: PingFangSC-Regular;
					font-size: 12px;
					color: #697184;
				}
			}
		}
		/*.DetailMessage {
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
		}*/
	}
</style>