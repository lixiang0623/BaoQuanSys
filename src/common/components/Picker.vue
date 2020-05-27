<template>
  <div class="container">
    <div class="field_layout">
      <div v-if="title" class="left_layout">{{ title }}</div>
      <div class="right_layout" @click="show">
        <div class="picker-launcher">{{ value }}</div>
        <img class="right_icon" src="~common/img/icon_down_arrow.png" />
      </div>
    </div>
    <div v-if="underline" class="underline" />

    <div class="picker-pop" v-if="visible">
      <div class="background" @click="hide" />

      <Picker
        :show-toolbar="showToolBar"
        :title="pickerTitle"
        @change="onChange"
        :columns="columns"
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
      this.$emit("onChange", `${value}`, index);
    },
    onConfirm(value, index) {
      this.hide();
      this.$emit("change", `${value}`, index);
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
    padding: 0 20px;
    justify-content: space-between;
    // width: 100%;
    flex: 1;
    font-family: PingFangSC-Regular;
    background: #ffffff;
    height: 50px;
    font-size: 16px;
    display: flex;
    flex-wrap: nowrap;
    .left_layout {
      min-width: 64px;
      margin-right: 15px;
      height: 50px;
      line-height: 50px;
      color: #757575;
      box-sizing: border-box;
    }

    .right_layout {
      box-sizing: border-box;
      display: flex;
      color: #757575;
      align-items: center;
      justify-content: flex-end;
      flex: 1;
      .picker-launcher {
        display: flex;
        font-size: 14px;
        color: #757575;
        font-family: PingFangSC-Regular;
        margin-right: 5px;
      }
      .right_icon {
        width: 13px;
        height: 8px;
      }
    }
  }

  .underline {
    height: 1px;
    margin: 0 20px;
    background: #e7e7e7;
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
