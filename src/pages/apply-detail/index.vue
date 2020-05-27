<template>
  <div id="test">
    <div class="content">
      <div>mobile:{{mobile}}</div>
      <div class="filter-row">
        <div class="filter-item">
          <MyInput
            title="是否新户:"
          />
        </div>

        <div class="filter-item">
          <MyInput
            title="是否新户:"
          />
        </div>
      </div>
      <div class="filter-row">
        <div class="filter-item">
          <MyInput
            title="是否新户:"
          />
        </div>

        <div class="filter-item">
          <MyPicker
            title="是否新户:"
            :columns="newAccountTypes"
            :value="selectAccountTypeValue"
            displayProp="name"
            @change="onNewAccountTypes"
          />
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
  import "vant/lib/button/style/less";

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
        vvv: "",
        mobile: "",
        initIndex: 0,
        active: 2,
        newAccountTypes: [{ name: '是', value: '1' }, { name: '否', value: '2' }],
        selectAccountTypeValue: null,
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
      onNewAccountTypes(type) {
        console.log({ type })
        this.selectAccountTypeValue = type;
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
      }
    }
  }
</style>
