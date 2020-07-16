<template>
	<div id="test">

					<div style="height: 50px;width: 100%;background: #4895FA;flex-direction: row;display: flex">
			
			<div class="rt_pos" @click="onClickLeft"></div>

			<div style="text-align: center;font-size: 14px;color: white;display: flex;width: 20%;margin-left: 30%;margin-top: 10px;">面签件明细</div>

		</div>
		<div class="content">

			<div class="filter-row">
				<div class="filter-item">
					<MyPicker title="是否动户:" :columns="DonghuTypes" :value="selectDonghuTypes" displayProp="isActive" @change="onDonghuTypes" />
				</div>
				<div class="filter-item">
					<MyPicker title="面签类型:" :columns="FaceSignTypes" :value="selectFaceSignTypes" displayProp="isfaceSign" @change="onFaceSignTypes" />
				</div>

			</div>

			<div class="filter-row">
				<div class="shenheTime">面签时间:</div>

				<button class="timebtn" @click="show = true">{{date}}</button>
				<van-calendar :min-date="minDate" color="#5599FF" title="请选择面签时间段" v-model="show" type="range" @confirm="onConfirm" />

			</div>

			<div class="filter-row">
				<div class="filter-item">

					<div class="input-title">姓名</div>
					<div class="input-container">
						<input v-model="name" class="input_style" />
					</div>
				</div>

				<van-button type="info" size="small" style="margin-right: 10px;margin-top: 10px;" @click="checkBtn">查询</van-button>

				<van-button type="warning" size="small" style="margin-right: 10px;margin-top: 10px;" @click='ClearBtn'>重置</van-button>

			</div>

			<div class="filter-item" style="margin-top: 20px;margin-left: 20px;">

				<el-table :data="tableData" border :row-class-name="tableRowClassName" style="width: 100%">
					<el-table-column prop="num" label="SN" width="50">
					</el-table-column>
					<el-table-column prop="name" label="姓名" />
					</el-table-column>
					<el-table-column prop="phone" label="手机号码" width="130">
					</el-table-column>
					<el-table-column prop="facetime" label="面签时间" width="100">
					</el-table-column>
					<el-table-column prop="facetypeOne" label="面签类型" width="100">
					</el-table-column>
					<el-table-column prop="changeisOne" label="是否动户" width="100">
					</el-table-column>

					<el-table-column prop="activeisOne" label="是否激活" width="100">
					</el-table-column>

					<el-table-column prop="closeisOne" label="是否销户" width="100">
					</el-table-column>
				</el-table>

			</div>
			<div style="margin-top: 20px;">
			</div>

			<div class="filter-row">

				<div class="btnRow">
					<van-button plain hairline type="defult" size="mini" @click="preBtn">
						<</van-button>
							<span style="margin-top: 23px;margin-left: 10px;font-size: 16px;color: gray;">{{currentpage+'/'+Math.ceil(count / 5)}} </span>
							<van-button plain hairline style="margin-left: 10px;" type="defult" size="mini" @click="NextBtn">></van-button>
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
	import 'vant/lib/index.css';
	//	import 'vue-easytable/libs/themes-base/index.css'
	import { VTable, VPagination } from 'vue-easytable'
	import 'element-ui/lib/theme-chalk/index.css'
	import ElementUI from 'element-ui';

	import {

		faceSignDetail

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
				tableData:[],
				minDate: new Date(2010, 0, 1),
				selectFaceSignTypes: "",
				selectDonghuTypes: "",
				name: "",

				date: "请选择时间范围",
				show: false,
				startTime: '',
				facetimeStart:'',
				facetimeStop:'',
				userid: '',
				endTime: '',
				mobile: "",
				initIndex: 0,
				active: 2,
				DonghuTypes: [{
					isActive: '是',
					value: 'Y'
				}, {
					isActive: '否',
					value: 'N'
				}],
				FaceSignTypes: [{
					isfaceSign: '面签',
					value: '88'
				}, {
					isfaceSign: '预面签',
					value: '66'
				}],
				pageIndex: 1,
				currentpage: 1,
				count: 1,
				length: 5,

			};
		},

		watch: {},

		created() {

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

			pickSelected(value, index) {

				this.vvv = value;
			},
			addSpace(v) {},

			onFaceSignTypes(type) {
				console.log({
					type
				})
				this.selectFaceSignTypes = type;
			},

			onDonghuTypes(type) {
				console.log({
					type
				})

				this.selectDonghuTypes = type;
			},

			async getfaceSignDetail(currentpage) {

				try {
					const {
						resultCode,
						failreason,
						applist,
						count
					} = await faceSignDetail({
						userid: this.userid,
						name: this.name,

						facetype: this.selectFaceSignTypes,
						changeis: this.selectDonghuTypes,
						currentpage: currentpage,
						length: this.length,
						facetimeStart: this.startTime,
						facetimeStop: this.endTime
					});

					this.tableData = applist;

					if(parseInt(count) > 0) {
						this.count = count

					}

				} catch(error) {}
			},

			checkBtn() {
				this.currentpage = 1;
				this.getfaceSignDetail(this.currentpage);

			},

			ClearBtn() {
				this.name = '',
					this.selectFaceSignTypes = '',
					this.selectDonghuTypes = '',
					this.date = '';
				this.startTime = '',
					this.endTime = ''

			},

			tableRowClassName({
				row,
				rowIndex
			}) {

				row.num = rowIndex + 1 + (this.currentpage - 1) * 5;

				if(row.activeis == 'Y') {

					row.activeisOne = "是"
				} else {
					row.activeisOne = "否"

				}

				if(row.changeis == 'Y') {

					row.changeisOne = "是"

				} else {
					row.changeisOne = "否"

				}
				if(row.closeis == 'Y') {

					row.closeisOne = "是"

				} else {
					row.closeisOne = "否"

				}

				if(row.facetype == '66') {
					row.facetypeOne = "预面签";
					return 'warning-row';
				} else {
					row.facetypeOne = "面签";
					return 'defult-row';
				}

			},
			NextBtn(pageNum) {

				if(this.currentpage == Math.ceil(this.count / 5)) {
					this.$toast('没有更多内容');
					return;

				}

				this.currentpage = this.currentpage + 1;

				this.getfaceSignDetail(this.currentpage);

			},
			preBtn(pageNum) {
				if(this.currentpage == 1) {

					this.$toast('没有更多内容');
					return;
				}

				this.currentpage = this.currentpage - 1;

				this.getfaceSignDetail(this.currentpage);

			}

		},
	};
</script>

<style lang="less">
	@import "~common/css/common.less";
	#test {
		.el-table .warning-row {
			font-size: 14px;
			color: #2a84d6;
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
			flex: 1;
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
				margin-left: 16px;
				font-size: 12px;
				width: 80px;
				text-align: right;
				padding-right: 10px;
				color: #757575;
			}
			.timebtn {
				margin-top: 10px;
				width: 100%;
				border-width: 1px;
				margin-left: 2px;
				margin-right: 10px;
				border-color: gainsboro;
				height: 30px;
				font-size: 16px;
				color: darkgray;
				background-color: white;
			}
			.filter-row {
				height: 35px;
				display: flex;
				flex-direction: row;
				align-items: stretch;
				justify-content: flex-start;
				.filter-item {
					margin-top: 15px;
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
		}
	}
</style>