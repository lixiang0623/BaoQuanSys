<template>
  <div class="container">
    <div class="field_layout">
      <div v-if="title" class="left_layout">{{ title }}</div>
      <div class="right_layout" @click="show">
        <div class="date-picker-launcher">{{ value }}</div>
        <img class="right_icon" src="~common/img/icon_down_arrow.png" />
      </div>
    </div>
    <div v-if="underline" class="underline" />

    <div class="date-picker-pop" v-if="visible">
      <div class="background" />

      <DatetimePicker
        @confirm="onConfirm"
        @cancel="onCancel"
        v-model="currentDate"
        :type="type"
        :formatter="formatter"
        :maxDate="maxDate"
        :minDate="minDate"
      />
    </div>
  </div>
</template>

<script>
import { DatetimePicker } from "vant";
import "vant/lib/datetime-picker/style";
export default {
  name: "date-picker",
  props: [
    "title",
    "type",
    "underline",
    "disabled",
    "value",
    "maxDate",
    "minDate"
  ],
  components: {
    DatetimePicker
  },

  data() {
    return {
      visible: false,
      currentDate: new Date()
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
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      }
      return value;
    },
    onConfirm(date) {
      this.hide();
      this.currentDate = date;
      // this.$emit("change", date.getFullYear() + "-" + (date.getMonth() + 1));
      this.$emit("change", date);
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
    width: 100%;
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
    }

    .right_layout {
      display: flex;
      color: #757575;
      align-items: center;
      .date-picker-launcher {
        display: flex;
        margin-right: 5px;
        font-size: 14px;
        color: #757575;
        font-family: PingFangSC-Regular;
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

  .date-picker-pop {
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
