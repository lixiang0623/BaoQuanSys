<template>
	<div id="test">

					<div style="height: 50px;width: 100%;background: #4895FA;flex-direction: row;display: flex">
			
			<div class="rt_pos" @click="onClickLeft"></div>

			<div style="text-align: center;font-size: 14px;color: white;display: flex;width: 20%;margin-left: 30%;margin-top: 10px;">申请件明细</div>

		</div>
		<div class="content">

			<div class="filter-row">
				<div class="filter-item">
					<MyPicker title="是否新户:" :columns="newAccountTypes" :value="selectAccountTypeValue" displayProp="isNew" @change="onNewAccountTypes" />
				</div>

				<div class="filter-item">
					<MyPicker title="是否动户:" :columns="DonghuTypes" :value="selectDonghuTypes" displayProp="isActive" @change="onDonghuTypes" />
				</div>
			</div>
			<div class="filter-row">
				<div class="filter-item">

					<div class="input-title">姓名</div>
					<div class="input-container">
						<input v-model="mobile" class="input_style" />
					</div>
					<!--<MyInput
            title="姓名:"
            :value="mobile"
          />-->
				</div>

				<div class="filter-item">
					<MyPicker title="审核结果:" :columns="ResultTypes" :value="selectResultTypes" displayProp="shenheResult" @change="onResultTypes" />
				</div>
			</div>

			<div class="filter-row">
				<div class="shenheTime">申请时间:</div>

				<button class="timebtn" @click="show = true">{{date}}</button>
				<!--<van-cell title="选择日期区间" :value="date" @click="show = true" />-->
				<van-calendar :min-date="minDate" color="#5599FF" title="请选择申请时间段" v-model="show" type="range" @confirm="onConfirm" />

			</div>
			<div class="btnRow">
				<van-button type="info" size="small" @click="checkBtn">查询</van-button>

				<van-button type="warning" size="small" @click="ClearBtn" style="margin-left: 10px;">重置</van-button>

			</div>

			<div class="filter-item" style="margin-top: 20px;margin-left: 20px;">

				<el-table :data="tableData" border :row-class-name="tableRowClassName" style="width: 100%"  >

					<el-table-column prop="num" label="SN" width="50"  >
					</el-table-column>
					<el-table-column prop="name" label="姓名"  >
					</el-table-column>
					<el-table-column prop="phone" label="电话号码" width="120" >
					</el-table-column>
					<el-table-column prop="apptime" label="申请时间" width="100">
					</el-table-column>
					<el-table-column prop="resultOne" label="审核结果" width="100">
					</el-table-column>
					<el-table-column prop="age" label="年龄段" width="140">
					</el-table-column>
					<el-table-column prop="refreason" label="拒绝原因" width="100">
					</el-table-column>
					<el-table-column prop="newisOne" label="是否新户" width="100">
					</el-table-column>
					<el-table-column prop="activeisOne" label="是否激活" width="100">
					</el-table-column>

					<el-table-column prop="changeisOne" label="是否动户" width="100">
					</el-table-column>

					<el-table-column prop="closeisOne" label="是否销户" width="100">
					</el-table-column>
				</el-table>

				<div style="margin-top: 20px;">
				</div>

	<!--<div style="margin-top: 20px;height: 400px;">
				</div>-->

			</div>
			<div class="filter-row">

				<div class="btnRow">

					<van-button plain hairline type="defult" size="mini" @click="preBtn">◁
					</van-button>
					<span style="margin-top: 23px;margin-left: 10px;font-size: 16px;color: gray;">{{currentpage+'/'+Math.ceil(count / 5)}} </span>
					<van-button plain hairline style="margin-left: 10px;" type="defult" size="mini" @click="NextBtn">▷</van-button>
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
	import MyInput from "./children/MyInput";
	import MyPicker from "./children/MyPicker";
	//	import "vant/lib/button/style/less";
	//
	//	import "vant/lib/calendar/style/less"
	//	import "vant/lib/toast/style/less"
	import 'vant/lib/index.css';

	//	import 'vue-easytable/libs/themes-base/index.css'
	import { VTable, VPagination } from 'vue-easytable'
	import 'element-ui/lib/theme-chalk/index.css'
	import ElementUI from 'element-ui';

	import tableDate from './children/tableData.js'
	import {

		shenqinDetail

	} from "service/task";
	import {

		getUserId

	} from "service/nativeUtils";

	export default {
		components: {
			Header,
			Picker,
			Input,
			MyInput,
			MyPicker,
		},

		data() {
			return {

				minDate: new Date(2010, 0, 1),
				tableData: [],

				selectAccountTypeValue: "",
				selectDonghuTypes: "",
				mobile: "",
				result: '',
				selectResultTypes: "",
				date: "请选择时间范围",
				show: false,
				startTime: '',
				endTime: '',
				userid: '',
				initIndex: 0,
				active: 2,
				DonghuTypes: [{
					isActive: '是',
					value: 'Y'
				}, {
					isActive: '否',
					value: 'N'
				}],
				newAccountTypes: [{
					isNew: '是',
					value: 'Y'
				}, {
					isNew: '否',
					value: 'N'
				}],
				ResultTypes: [{
					shenheResult: '核准',
					value: '01'
				}, {
					shenheResult: '拒绝',
					value: '04'
				}, {
					shenheResult: '补件',
					value: '06'
				}],

				pageIndex: 1,

				count: 1,
				currentpage: 1,
				length: 5,
			};
		},

		watch: {},

		created() {
			
//			AlipayJSBridge.call('hideNaviBar',
//			{
//type: '0',
//},
//()=>{
//	
//	console.log("影藏导航栏")
//	
//}
//			
//			
//			);

			getUserId().then(userId => {

				this.userid = userId;

			});

		},

		mounted() {
			window.VM = this;
			
	
		},

		destroyed() {
			console.log("destroyed");

		},

		beforeDestroy() {
			console.log("beforeDestroy");
		},

		methods: {

			onClickLeft() {

				window.location.href = "test.html"

			},

			formatDate(date) {

				var month = date.getMonth() + 1;
				month = month < 10 ? ('0' + month) : month;

				var day = date.getDate();
				day = day < 10 ? ('0' + day) : day;

				return date.getFullYear() + '-' + month + '-' + day;

			},
			onConfirm(date) {
				const [start, end] = date;
				this.show = false;
				this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;

				this.startTime = this.formatDate(start);

				this.endTime = this.formatDate(end);

			},

			addSpace(v) {},

			onNewAccountTypes(type) {
				console.log({
					type
				})
				this.selectAccountTypeValue = type;
			},

			onDonghuTypes(type) {
				console.log({
					type
				})

				this.selectDonghuTypes = type;
			},

			onResultTypes(type) {
				console.log({
					type
				})

				this.selectResultTypes = type;
			},

			async getShenqin(currentpage) {

				this.pageIndex = 1;
				//				this.currentpage=1;
				try {

					console.log('我得名字' + this.mobile)
					const {
						resultCode,
						failreason,
						applist,
						count
					} = await shenqinDetail({
						userid: this.userid,
						name: this.mobile,
						result: this.selectResultTypes,
						newis: this.selectAccountTypeValue,
						changeis: this.selectDonghuTypes,
						currentpage: currentpage,
						length: this.length,
						pubDateStart: this.startTime,
						pubDateStop: this.endTime
					});

					this.tableData = applist;

					if(parseInt(count) > 0) {
						this.count = count

					}
					console.log(count)

				} catch(error) {}
			},

			checkBtn() {

				this.currentpage = 1;
				this.getShenqin(this.currentpage);

			},

			ClearBtn() {
					this.mobile = '',
					this.selectResultTypes = '',
					this.selectAccountTypeValue = '',
					this.selectDonghuTypes = '',
					this.date = '';
					this.startTime = '',
					this.endTime = ''
			},
//			
//			formatter({row, column, cellValue, index}){
//				
//				
//				
//				return column;
//				console.log("大幅度发-----"+row,column,cellValue,index)
////				row.num = rowIndex + 1 + (this.currentpage - 1) * 5;
//				
//			},

			tableRowClassName({
				row,
				rowIndex
			}) {

				console.log("方法methods方法方法");

				

				if(row.newis == "N") {

					row.newisOne = "否"

				} else {
					row.newisOne = "是"

				}
				//
				if(row.activeis == "Y") {

					row.activeisOne = "是"
				} else {
					row.activeisOne = "否"
				}
				//
				if(row.changeis == "Y") {

					row.changeisOne = "是"

				} else {
					row.changeisOne = "否"

				}
				if(row.closeis == "Y") {

					row.closeisOne = "是"

				} else {
					row.closeisOne = "否"

				}
				
				row.num = rowIndex + 1 + (this.currentpage - 1) * 5;

				if(row.result == "04") {
					row.resultOne = "拒绝"
					return 'warning-row';

				} else if(row.result == "06") {
					row.resultOne = "补件"

					return 'success-row';
				} else {  
				
							row.resultOne = "核准"

					return 'defult-row';
				}

			},
			NextBtn() {

				if(this.currentpage == Math.ceil(this.count / 5)) {
					this.$toast('没有更多内容');
					return;

				}

				this.currentpage = this.currentpage + 1;

				this.getShenqin(this.currentpage);

			},
			preBtn() {
				if(this.currentpage == 1) {

					this.$toast('没有更多内容');
					return;
				}
				this.currentpage = this.currentpage - 1;

				this.getShenqin(this.currentpage);

			}

		},
	};
</script>

<style lang="less">
	@import "~common/css/common.less";
	#test {
		.el-table .el-table-title {
			background-color: darkgray;
			font-size: 14px;
		}
		.el-table .warning-row {
			color: #9c9c9c;
			font-size: 14px;
		}
		.el-table .success-row {
			color: #2a84d6;
			font-size: 14px;
			/*		background-color: #DAF3FF;*/
		}
		.el-table .defult-row {
			font-size: 14px;
		}
		background-color: white;
		min-height: 100%;
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
		.content {
			flex-grow: 1;
			overflow: scroll;
			-webkit-overflow-scrolling: touch;
			display: flex;
			flex-direction: column;
			.btnRow {
				display: flex;
				flex-direction: row;
				margin-left: auto;
				margin-right: auto;
				
				&>.van-button {
					margin-top: 20px;
					/*margin-bottom: 20px;*/
				}
				/*& > .van-button:not(:last-child) {
          margin-right: 16px;
        }*/
				&>.van-button span {
					white-space: nowrap
				}
			}
			.shenheTime {
				margin-top: 15px;
				font-size: 12px;
				width: 80px;
				text-align: right;
				padding-right: 10px;
				color: #757575;
			}
			.timebtn {
				margin-top: 10px;
				width: 285px;
				border-width: 1px;
				border-color: gainsboro;
				height: 30px;
				font-size: 16px;
				color: darkgray;
				background-color: white;
				/* text-align: right;*/
				/*padding-right: 10px;
      color: #757575;*/
			}
			.filter-row {
				height: 35px;
				display: flex;
				flex-direction: row;
				align-items: stretch;
				justify-content: flex-start;
				.filter-item {
					flex: 1;
					display: flex;
					flex-direction: row;
					align-items: center;
				}
				.filter-itemTime {
					flex: 1;
					display: flex;
					flex-direction: row;
					align-items: center;
				}
			}
			.input-title {
				font-size: 12px;
				width: 80px;
				text-align: right;
				padding-right: 10px;
				color: #757575;
			}
			.input-container {
				flex: 1;
				padding-right: 10px;
				.input_style {
					width: 100%;
					padding: 0 5px;
					border-radius: 4px;
					border: 1px solid #b2b2b2;
					font-size: 14px;
					line-height: 24px;
					color: #757575;
					&::-webkit-input-placeholder {
						color: #b2b2b2;
						font-size: 14px;
					}
				}
			}
			.preNextBtn {
				display: flex;
				flex-direction: row;
				margin-left: auto;
				margin-right: auto;
			}
		}
	}
</style>