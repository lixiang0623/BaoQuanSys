<template>
  <div id="test">
    <div class="content">
      <!--      <Input-->
      <!--        type="number"-->
      <!--        pattern="\d*"-->
      <!--        placeholder="数字输入框"-->
      <!--        maxlength="11"-->
      <!--        :value="mobile"-->
      <!--        @input="addSpace"-->
      <!--      />-->
      <!--      <Picker-->
      <!--        title="Picker"-->
      <!--        v-model="vvv"-->
      <!--        :columns="['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']"-->
      <!--        @onSelected="pickSelected"-->
      <!--      />-->
      <!--      <van-tabs-->
      <!--        v-model="active"-->
      <!--        color="#455465"-->
      <!--        animated-->
      <!--        swipeable-->
      <!--      >-->
      <!--        <van-tab v-for="index in 2" :title="'标签 ' + index" :key="index">-->
      <!--          内容 {{ index }}-->
      <!--        </van-tab>-->
      <!--      </van-tabs>-->
      <div class="btnRow">
        <van-button type="info" size="small" @click="toApplicationDetail">申请件明细</van-button>
        <van-button type="info" size="small">面签件明细</van-button>
      </div>
      <div class="statics">
        <StaticsCard sum="92" main-color="#4B7BEC" sec-color="#F9F9FE" :title="title1" />
        <StaticsCard sum="92" main-color="#FD9644" sec-color="#FFF8F2" :title="title2" />
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
        vvv: "",
        mobile: "2223323",
        initIndex: 0,
        active: 2,
        title1: "当日PAD\n申请件数",
        title2: "当日PAD\n面签件数",
      };
    },

    watch: {},

    created() {
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
      pickSelected(value, index) {
        // alert(`${value} ${index}`);
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
        window.location.href = "./apply-detail.html"
      }
    },
  };
</script>

<style lang="less">
  @import "~common/css/common.less";

  #test {
    background-color: white;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;

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

        & > .van-button {
          margin-top: 10px;
        }

        & > .van-button:not(:last-child) {
          margin-right: 16px;
        }

        & > .van-button span {
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
  }
</style>
