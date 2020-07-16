<template>
	<div class="firstPage">
		<div style="height: 50px;width: 100%;background: #4895FA;flex-direction: row;display: flex">

			<div class="rt_pos" @click="onClickLeft"></div>

			<div style="text-align: center;font-size: 14px;color: white;display: flex;width: 20%;margin-left: 30%;margin-top: 10px;">头像上传</div>

		</div>
		<div style="text-align: center; margin-top: 40px;flex-direction: column;">

			<img style="width: 200px;height: 200px;" :src="imageData?imageData:require('common/img/avatar_avatar@3x.png')" />
			<div style="font-family: PingFangSC-Regular;
font-size: 14px;
color: #999999;
letter-spacing: 0;
text-align: center;">{{staffTypeOne}}</div>

		</div>

		<!--<div v-else style="text-align: center; margin-top: 40px;">

			<img style="width: 200px;height: 200px;" src='"data:image/png;base64," +imageData' />

		</div>-->

		<div style="text-align: center;margin-top: 40px;">
			<button @click="checkBtn" style="  border-style:solid;border-width: 1px; border-color: #4895FA; color: #4895FA; background-color: white;width: 90%;height: 42px;border-top-left-radius: 20px;border-top-right-radius: 20px;border-bottom-left-radius: 20px;border-bottom-right-radius: 20px;">从相册中选一张</button>
		</div>
	</div>

</template>

<script>
	import 'vant/lib/index.css';
	import {

		getHeadImg,
		getUserId,
		hideNaviBar

	} from "service/nativeUtils";

	import {
		putHeadImg,
		getImg
	} from "service/task";

	export default {

		data() {
			return {
				isimage: true,
				imageData: '',
				userid: '',
				staffTypeOne: '',

				imageURL: ''

			};
		},
		created() {
			hideNaviBar();

			getUserId().then(userId => {

				this.userid = userId;

				this.getimgBtn();
			});

		},

		methods: {

			onClickLeft() {

				window.location.href = "index.html"

			},

			//"'data:image/png;base64,'+imgurl"
			checkBtn() {

				getHeadImg().then(resultimg => {

					if(resultimg != '') {
						this.imageData = 'data:image/png;base64,' + resultimg;

						this.imageURL = resultimg;
						

						this.putimagebtn();
					}
					
					
					

				});

			},
			async putimagebtn() {
				try {
					const {
						resultCode,
						failreason,

					} = await putHeadImg({
						userid: this.userid,
						imageBase64: this.imageURL
					});
					
				
					//
					this.$toast('上传成功');
					
				} catch(error) {

				}
			},

			async getimgBtn() {
				try {
					const {
						resultCode,
						failreason,
						staffType,
						imageBase64


					} = await getImg({
						userid: this.userid,

					});

					if(staffType == "01") {
						this.staffTypeOne = "零售客户经理";
					} else if(staffType == "02") {

						this.staffTypeOne = "对公客户客户经理";

					} else if(staffType == "03") {
						this.staffTypeOne = "柜员";
					} else if(staffType == "04") {
						this.staffTypeOne = "非营销岗位行员";
					} else if(staffType == "05") {
						this.staffTypeOne = "其他正式行员";
					} else if(staffType == "11") {
						this.staffTypeOne = "直销内勤或主管";
					} else if(staffType == "12") {
						this.staffTypeOne = "直销营销员";
					} else if(staffType == "13") {
						this.staffTypeOne = "其他直销员工";
					}
					if(imageBase64) {

						this.imageData = 'data:image/png;base64,' + imageBase64;
					}

				} catch(error) {

				}
			},

		}

	}
</script>

<style lang="less">
	@import "~common/css/common.less";
	.firstPage {
		background-color: white;
		height: 100%;
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
				align-items: center;
				/*justify-content: center;*/
				.square_icon {
					width: 84px;
					height: 84px;
				}
				.square_title {
					margin-top: -15px;
					font-family: PingFangSC-Regular;
					font-size: 14px;
					color: #757575;
					/*text-align: center;*/
				}
			}
		}
	}
</style>