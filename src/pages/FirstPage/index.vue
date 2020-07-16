<template>
	<div class="firstPage">

					<div style="height: 50px;width: 100%;background: #4895FA;flex-direction: row;display: flex">
			
		<!--	<div class="rt_pos" @click="onClickLeft"></div>-->

			<div style="text-align: center;font-size: 14px;color: white;display: flex;width: 20%;margin-left: 45%;margin-top: 10px;">酷卡营销</div>

		</div>

		<div v-if="isFlag">
			<div>

				<img style="width: 100%;;" src="~common/img/home_banner1.png" />
			</div>

			<div class="square_container">
				<div class="square" style="margin-left:10px;" @click="btnYeji">
					<img class="square_icon" src="~common/img/home_icon_yj@3x.png" />
					<p class="square_title">我的业绩</p>
				</div>

				<div class="square" @click="changetx">
					<img class="square_icon" src="~common/img/home_icon_tx@3x.png" />
					<p class="square_title">头像上传</p>
				</div>
				<div class="square" @click="changetx2">

				</div>

				<div class="square" @click="changetx3">

				</div>
			</div>
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


	import {

		getUserId,
		ShouNav

	} from "service/nativeUtils";
	export default {

		data() {
			return {

				userid: '',
				isFlag: true

			};
		},

		created() {

			ShouNav();
			getUserId().then(userId => {

				this.userid = userId;

				this.getquanxian();

				console.log("对方水电费")
			});

		},

		methods: {

			btnYeji() {

				window.location.href = "test.html"

			},

			changetx() {

				window.location.href = "put-headImg.html"

			},
			
						onClickLeft() {

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
					
					if(isFlag=="1")
					{
						this.isFlag=true;
					}
					else
					{
						
						this.isFlag=false;
						
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