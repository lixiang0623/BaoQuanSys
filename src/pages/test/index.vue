<template>

	<div class="test">

		<div style="height: 50px;width: 100%;background: #4895FA;flex-direction: row;display: flex">

			<div class="rt_pos" @click="onClickLeft"></div>

			<div style="text-align: center;font-size: 14px;color: white;display: flex;width: 20%;margin-left: 30%;margin-top: 10px;">我的业绩</div>

		</div>
		<!--	<van-nav-bar  title="我的业绩" left-text="返回" left-arrow @click-left="onClickLeft" style="background-color: yellow;" />-->

		<div class="square_container">
			<div class="square" style="margin-left:10px;" @click="tofaceSignDetail">
				<img class="square_icon" src="~common/img/performance_icon_mq@3x.png" />
				<p class="square_title">面签件明细</p>
			</div>

			<div class="square" @click="toApplicationDetail">
				<img class="square_icon" src="~common/img/performance_icon_sq@3x.png" />
				<p class="square_title">申请件明细</p>
			</div>
			<div class="square" @click="toApplicationDetail">
				<!--<img class="square_icon" src="~common/img/performance_icon_myj@3x.png" />
				<p class="square_title">当月业绩排名</p>-->
			</div>
			<div class="square" @click="toApplicationDetail">
				<!--<img class="square_icon" src="~common/img/home_icon_tx@3x.png" />
				<p class="square_title">当年业绩排名</p>-->
			</div>

		</div>

		<div class="content">

			<div class="statics">
				<StaticsCard main-color="#5599FF" sec-color="#F9F9FE" :title="title1" :sum="SumOne" />
				<StaticsCard main-color="#FD9644" sec-color="#FFF8F2" :title="title2" :sum="SumTwo" />
			</div>
		</div>

		<div style="	display: flex;">
			<div style="	display: flex;
				flex-direction: column;
				flex: 1;align-items: center;">

				<div>
					<button style="width: 50px;height: 20px;font-size: 14px; border-style:solid;border-width: 1px; border-color: #4895FA; color:white; background-color: #4895FA;;margin-top: 10px;" @click="checkBtnMonth">当月</button >
			</div>	
				<div v-show="IsMonth" style="height: 3px;width: 40px;background: white;margin-top: 10px;"></div>
			</div>
			
			<div style="display: flex;
				flex-direction: column;
				flex: 1;align-items: center;">
			<button  style="width: 50px;height: 20px;font-size: 14px; border-style:solid;border-width: 1px; border-color: #4895FA; color:white; background-color: #4895FA;;margin-top: 10px;" @click="checkBtnYear">当年</button>
					<div v-show="!IsMonth" style="height: 3px;width: 40px;background: white;margin-top: 10px;"></div>
				</div>
			</div>

			<div v-show="IsMonth">
				<div style="width: 94%;background: white;margin-left: 3%;border-top-left-radius: 5px;border-top-right-radius: 5px;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;flex-direction: column;margin-bottom: 10px;margin-top: 30px;">
					<div class="Echarts">
						<div id="main" style="width:100%;height:400px;"></div>
					</div>
					<div>
						
						<span style="font-size:18px ;margin-left: 5%;color: #4B5F6C;">当月业绩进度</span>
					</div>

					<div style="display: flex;flex-wrap: wrap; align-items: center;margin-top: 20px;">
						<div style="border: 1px solid #F3F3F3;
box-shadow: 0 2px 10px 0 rgba(186,199,223,0.41);  width: 40%;margin-left:5%;overflow: auto; border-top-left-radius: 5px;border-top-right-radius: 5px;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;">
							<div id="mainOne" style="width:100%;height:150px;margin-left: -10px;"></div>
							<div style="font-size: 21px;margin-left: 20px; ">{{shenqingRateM}}</div>
							<div style="font-size: 14px;margin-left: 10px;">当月申请件完成率</div>
						</div>

						<div style="border: 1px solid #F3F3F3;
box-shadow: 0 2px 10px 0 rgba(186,199,223,0.41);width: 40%;margin-left:10%;border-style:solid;  border-top-left-radius: 5px;border-top-right-radius: 5px;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;">
							<div id="mainTwo" style="width:100%;height:150px;margin-left: -10px;"></div>
							<div style="font-size: 21px;margin-left: 20px; ">{{NewRateM}}</div>
							<div style="font-size: 14px;margin-left: 20px;">当月新户完成率</div>
						</div>

					</div>

				</div>

			</div>
			
			<div v-show="!IsMonth">
				<div style="width: 94%; background: white;margin-left: 3%;border-top-left-radius: 5px;border-top-right-radius: 5px;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;flex-direction: column;margin-bottom: 10px;margin-top: 30px;">
					<div class="Echarts">
						<div id="mainFour" style="width:380px;height:400px;margin-left: 10px;"></div>
					</div>

					<div>
						<span style="font-size:18px ;margin-left: 5%;color: #4B5F6C;">当年业绩进度</span>
					</div>

					<div style="display: flex;flex-wrap: wrap; align-items: center;margin-top: 20px;">
						<div style="border: 1px solid #F3F3F3;
box-shadow: 0 2px 10px 0 rgba(186,199,223,0.41);width: 40%;margin-left:5%;overflow: auto; border-top-left-radius: 5px;border-top-right-radius: 5px;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;">
							<div id="mainFive" style="width:100%;height:150px;"></div>
							<div style="font-size: 21px;margin-left: 20px; ">{{shenqingRateY}}</div>
							<span style="font-size: 14px;margin-left: 10px;margin-bottom: 10px;">当年申请件完成率</span>
						</div>

						<div style="border: 1px solid #F3F3F3;
box-shadow: 0 2px 10px 0 rgba(186,199,223,0.41);width: 40%;margin-left:10%;border-style:solid;  border-top-left-radius: 5px;border-top-right-radius: 5px;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;">
							<div id="mainSix" style="width:100%;height:150px;"></div>
							<div style="font-size: 21px;margin-left: 20px; ">{{NewRateY}}</div>
							<span style="font-size: 14px;margin-left: 10px;">当年新户完成率</span>
						</div>

						<div style="border: 1px solid #F3F3F3;
box-shadow: 0 2px 10px 0 rgba(186,199,223,0.41);width: 40%;margin-left:5%;border-top-left-radius: 5px;border-top-right-radius: 5px;border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;">
							<div id="mainThree" style="width:100%;height:150px;margin-left: -10px;"></div>
							<div style="font-size: 21px;margin-left: 10px; ">{{MoveRateY}}</div>
							<div style="font-size: 14px;margin-top: 5px;margin-left: 10px;">当年动户率</div>
						</div>

					</div>
				</div>
			</div>

		</div>
</template>

<script>
	import {
		Header,
		Picker,
		Input,
	} from "common/components";
	import StaticsCard from "./children/StaticsCard";
	import { Tab, Tabs } from 'vant';
	import "vant/lib/tab/style/less";
	import "vant/lib/tabs/style/less";
	import "vant/lib/button/style/less";
	import 'vant/lib/index.css';
	import {
		getyejiNum,
		MonthyejiCheck,
		YearyejiCheck
	} from "service/task";

	import {

		getUserId,
		hideNaviBar

	} from "service/nativeUtils";
	export default {
		components: {
			Header,
			Picker,
			Input,
			Tabs,
			StaticsCard
		},

		data() {
			return {
				IsMonth: true,
				shenqingRateM: '0',
				NewRateM: '0',
				shenqingRateY: '0',
				NewRateY: '0',
				MoveRateY: '0',
				mobile: "2223323",
				initIndex: 0,
				userid: '',
				active: 2,
				SumOne: "0",
				SumTwo: "0",
				title1: "当日PAD\n申请件数",
				title2: "当日PAD\n面签件数",

				option: {
					title: {
						text: '当月业绩状况'
					},
					tooltip: {},
					axisTick: {
						show: false
					},

					xAxis: {
						axisLine: {
							show: false,
						},
							axisTick: {
							show: false
						},
						axisLabel: {

							interval: 0
						},
						data: ["申请件数", "新户数", "面签件数", "预面签\n件数", "面签动户数\n(含预面签)"]
					},
					yAxis: {
						axisTick: {
							show: false
						},
						axisLine: {
							show: false,
						},
					},
					series: {
					
						type: 'bar',
						label: {
							normal: {
								show: true,
								position: 'top'
							}
						},
						itemStyle: {
							normal: {

								color: function(params) {
									var colorList = ['#4B7BEC', '#45AAF2', '#2BCBBA', '#FD9644', '#FFB77E', ];
									return colorList[params.dataIndex]
								}
							},
						},
						barWidth: 20,

						data: [0, 0, 0, 0, 0]
					}
				},

				optionYear: {
					title: {
						text: '当年业绩状况'
					},
					tooltip: {},

					xAxis: {
						axisTick: {
							show: false
						},
						axisLine: {
							show: false,
						},
						axisLabel: {

							interval: 0
						},
						data: ["申请件数", "新户数", "动户数", "面签件数", "预面签\n件数", "面签件\n动户数"]
					},
					yAxis: {
						axisTick: {
							show: false
						},

						axisLine: {
							show: false
						},
					},
					series: {
						
						type: 'bar',
						label: {
							normal: {
								show: true,
								position: 'top'
							}
						},
						itemStyle: {
							normal: {

								color: function(params) {
									var colorList = ['#4B7BEC', '#45AAF2', '#2BCBBA', '#FD9644', '#FFB77E', '#FFD8B8'];
									return colorList[params.dataIndex]
								}
							},
						},
						barWidth: 20,

						data: [0, 0, 0, 0, 0, 0]
					}
				},

				optionThree: {
					color: ['#4B7BEC', '#E6F5FF', ],
					series: {
						name: '数量',
						type: 'pie',
						radius: ['50%', '70%'],
						avoidLabelOverlap: false,
						data: [0, 0, ],
						itemStyle: {
							normal: {
								label: {
									show: false
								},
								labelLine: {
									show: false
								}
							},

						},

					},

				},

			};
		},

		watch: {},

		created() {
			hideNaviBar();
			getUserId().then(userId => {

				this.userid = userId;
				this.getNum();
				this.getMonth();
				this.getYear();
			});

		},

		mounted() {
			//			this.myEcharts();

		},

		destroyed() {
			console.log("destroyed");
		},

		beforeDestroy() {
			console.log("beforeDestroy");
		},

		methods: {

			checkBtnMonth() {

				this.IsMonth = true;

				console.log("对方是否" + this.IsMonth);

			},
			checkBtnYear() {

				this.IsMonth = false;
				console.log("对方是否22222" + this.IsMonth);

			},

			onClickLeft() {

				window.location.href = "index.html"

			},

			pickSelected(value, index) {

				this.vvv = value;
			},
			addSpace(v) {

			},

			onTabClick(item, index) {
				const dicts = ["", "UNUSED", "USED", "OUT"];
				this.couponList = [];
				console.log(dicts[index]);
			},
			toApplicationDetail() {

				//				AlipayJSBridge.call('pushWindow', {
				//					url: 'apply-detail.html', // 要打开页面的 URL
				//					// 打开页面的配置参数
				//			   
				//				});

				window.location.href = "apply-detail.html"
			},
			tofaceSignDetail() {

				window.location.href = "faceSign-detail.html"

			},

			async getNum() {
				try {
					const {
						resultCode,
						failreason,
						appTotal,
						faceTotal
					} = await getyejiNum({
						userid: this.userid,
					});

					if(appTotal != '') {
						this.SumOne = appTotal;

					}
					if(faceTotal != '') {
						this.SumTwo = faceTotal;

					}

				} catch(error) {

				}
			},

			//当月业绩
			async getMonth() {
				try {
					const {
						resultCode,
						failreason,
						appTotalM,
						appRateM,
						newM,
						newRateM,
						faceTotalM,
						prefaceM,
						faceMoveM
					} = await MonthyejiCheck({
						userid: this.userid,
					});

					console.log("当月+" + resultCode + "当月+" + appTotalM)

					var arr = [];

					arr.push(appTotalM, newM, faceTotalM, prefaceM, faceMoveM)
					this.option.series.data = arr;
					var myChart = this.$echarts.init(document.getElementById('main'));

					var arrOne = [];
					var arrTwo = [];

					arrOne.push(appRateM, 100 - appRateM);
					arrTwo.push(newRateM, 100 - newRateM)
					var myChartOne = this.$echarts.init(document.getElementById('mainOne'));
					var myChartTwo = this.$echarts.init(document.getElementById('mainTwo'));
					// 使用刚指定的配置项和数据显示图表。

					this.shenqingRateM = appRateM + "%";

					this.NewRateM = newRateM + "%";
					myChart.setOption(this.option);
					this.optionThree.series.data = arrOne;

					myChartOne.setOption(this.optionThree);

					this.optionThree.series.data = arrTwo;
					myChartTwo.setOption(this.optionThree);
				} catch(error) {

				}
			},
			//当年业绩
			async getYear() {
				try {
					const {
						resultCode,
						failreason,
						appTotalY,
						appRateY,
						newY,
						newRateY,
						moveTotalY,
						moveRateY,
						faceTotalY,
						prefaceY,
						faceMoveY
					} = await YearyejiCheck({
						userid: this.userid,
					});
					var arr = [];

					arr.push(appTotalY, newY, moveTotalY, faceTotalY, prefaceY, faceMoveY)
					this.optionYear.series.data = arr;

					var myChartFour = this.$echarts.init(document.getElementById('mainFour'));
					myChartFour.setOption(this.optionYear);

					var myChartThree = this.$echarts.init(document.getElementById('mainThree'));

					var myChartFive = this.$echarts.init(document.getElementById('mainFive'));
					var myChartSix = this.$echarts.init(document.getElementById('mainSix'));

					var arrOne = [];
					var arrTwo = [];
					var arrThree = [];

					this.shenqingRateY = appRateY + "%";
					this.NewRateY = newRateY + "%";
					this.MoveRateY = moveRateY + "%";

					arrOne.push(appRateY, 100 - appRateY);
					arrTwo.push(newRateY, 100 - newRateY)
					arrThree.push(moveRateY, 100 - moveRateY)
					//年申请件完成率
					this.optionThree.series.data = arrOne;
					myChartFive.setOption(this.optionThree);
					//年申新户完成率	
					this.optionThree.series.data = arrTwo;
					myChartSix.setOption(this.optionThree);
					//年动户完成率	
					this.optionThree.series.data = arrThree;
					myChartThree.setOption(this.optionThree);

				} catch(error) {

				}
			},

		},
	};
</script>

<style lang="less">
	@import "~common/css/common.less";
	.test {
		/*background-color:#4895FA;*/
		background: -webkit-gradient(linear, 0% 35%, 0% 50%, from(#4895FA), to(#F3F3F3));
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
			/*justify-content: center;*/
			.square {
				display: flex;
				flex-direction: column;
				flex: 1;
				margin-top: 10px;
				align-items: center;
				/*justify-content: center;*/
				.square_icon {
					width: 54px;
					height: 54px;
				}
				.square_title {
					margin-top: 10px;
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: #FFFFFF;
					/*text-align: center;*/
				}
			}
		}
		.content {
			flex: 1;
			overflow: scroll;
			-webkit-overflow-scrolling: touch;
			display: flex;
			flex-direction: column;
			.btnRow {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				margin-left: 20px;
				&>.van-button {
					margin-top: 10px;
				}
				&>.van-button:not(:last-child) {
					margin-right: 16px;
				}
				&>.van-button span {
					white-space: nowrap
				}
			}
			.statics {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				padding: 20px;
				.staticsSum {
					flex: 1;
					height: 80px;
					display: flex;
					flex-direction: column;
					&:not(:last-child) {
						margin-right: 20px;
					}
				}
			}
		}
		.Echarts {
			margin-top: 10px;
			width: 100%;
			z-index: 999;
		}
	}
</style>