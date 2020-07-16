<template>
  <div class="container">
    <div class="field_layout">
      <div v-if="title" class="left_layout">{{ title }}</div>
      <div class="right_layout" @click="show">
        <div class="picker-launcher">{{ displayName }}</div>
        <img class="right_icon" src="~common/img/icon_down_arrow.png" />
      </div>
    </div>

    <div class="picker-pop" v-if="visible">
      <div class="background" @click="hide" />

      <Picker
        :show-toolbar="showToolBar"
        :title="pickerTitle"
        @change="onChange"
        :columns="displayColumns"
        @cancel="onCancel"
        @confirm="onConfirm"
      />
    </div>
  </div>
</template>

<script>
  import { Picker } from "vant";
  import "vant/lib/picker/style";

  export default {
    name: "picker",
    props: {
      title: String,
      underline: Boolean,
      disabled: Boolean,
      value: {},
      displayProp: {
        type: String,
      },
      columns: Array,
      showToolBar: {
        type: Boolean,
        default: true
      },
      pickerTitle: String
    },
    components: {
      Picker
    },

    data() {
      return {
        visible: false
      };
    },
    computed:{
      displayName (){
        if (!this.displayProp) {
          return this.value;
        } else {
          let match = this.columns.find(it => it.value === this.value);
          if (!match) {
            return ''
          }
          return match[this.displayProp];
        }
      },
      displayColumns (){
        if (!this.displayProp) {
          return this.columns;
        } else {
          return this.columns.map(it => it[this.displayProp]);
        }
      },
    },

    model: {
      event: "change"
    },

    methods: {
      show() {
        this.visible = true;
      },
      hide() {
        this.visible = false;
      },
      onChange(picker, value, index) {
        if (!this.displayProp) {
          this.$emit("onChange", `${value}`, index);
        } else {
          this.$emit("onChange", `${this.columns[index].value}`, index);
        }
      },
      onConfirm(value, index) {
        this.hide();
        if (!this.displayProp) {
          this.$emit("change", `${value}`, index);
        } else {
          this.$emit("change", `${this.columns[index].value}`, index);
        }
      },
      onCancel() {
        this.hide();
      }
    }
  };
</script>

<style lang="less" scoped>
  @import "~common/css/common.less";

  .container {
    width: 100%;
    display: flex;
    flex-direction: column;

    .field_layout {
      box-sizing: border-box;
      justify-content: space-between;
      // width: 100%;
      flex: 1;
      font-family: PingFangSC-Regular;
      background: #ffffff;
      font-size: 12px;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
      padding-right: 10px;

      .left_layout {
        color: #757575;
        box-sizing: border-box;
        padding-right: 10px;
        width: 80px;
        text-align: right;
      }

      .right_layout {
        box-sizing: border-box;
        display: flex;
        color: #757575;
        align-items: center;
        justify-content: flex-end;
        flex: 1;
        border-radius: 4px;
        border: 1px solid #b2b2b2;
        height: 26px;

        .picker-launcher {
          display: flex;
          font-size: 14px;
          color: #757575;
          font-family: PingFangSC-Regular;
          margin-right: 5px;
          flex: 1;
          padding-left: 5px;
        }

        .right_icon {
          width: 13px;
          height: 8px;
          margin-right: 6px;
        }
      }
    }

    .picker-pop {
      z-index: 999;
      position: fixed;
      bottom: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      width: 100%;
      height: 100%;

      .background {
        background: rgba(0, 0, 0, 0.5);
        flex: 1;
      }
    }
  }
</style>
