<template>
  <div class="container">
    <div class="input_wrapper">
      <div v-if="title" class="left_layout">{{ title }}</div>
      <div class="right_layout">
        <slot name="input">
          <input
            v-bind="$attrs"
            autocomplete="off"
            :value="value"
            class="input_style"
            @input="onInputChanged"
            @blur="onInputBlur"
          />
        </slot>
        <span v-if="buttonText" class="button_style" @click="onButtonClick">{{
          buttonText
        }}</span>
        <img
          v-if="right_icon"
          class="right_icon"
          :src="right_icon"
          @click="onRightIconClick"
        />
      </div>
    </div>
    <div v-if="underline" class="underline"></div>
  </div>
</template>

<script>
export default {
  name: "Input",
  inheritAttrs: false,
  props: ["title", "value", "buttonText", "right_icon", "underline"],
  data() {
    return {};
  },
  mounted() {},

  methods: {
    //监听输入框事件
    onInputChanged($event) {
      this.$emit("input", $event.target.value); //将值放在自定义的事件函数中作为参数
    },
    onButtonClick($event) {
      this.$emit("buttonClick", $event);
    },
    onRightIconClick($event) {
      this.$emit("rightIconClick", $event);
    },
    onInputBlur($event) {
      this.$emit("inputBlur", $event);
    }
  },
  computed: {}
};
</script>

<style lang="less" scoped>
@import "~common/css/common.less";
.container {
  width: 100%;
  .input_wrapper {
    font-family: PingFangSC-Regular;
    background: #ffffff;
    padding: 0 20px;
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
      overflow: hidden;
      /* word-break: keep-all;
    white-space: nowrap; */
    }
    .right_layout {
      display: flex;
      flex: 1;
      align-items: center;
      input {
        flex: 1;
        height: 100%;
        border: none;
        outline: none;
        font-size: 16px;
        color: #757575;
        /* text-indent: 3px;
           letter-spacing: 3px; */
        &:focus {
          outline: none;
        }
        &::-webkit-input-placeholder {
          color: #b2b2b2;
          font-size: 16px;
        }
      }
      .button_style {
        color: #e7e7e7;
      }

      .right_icon {
        width: 18px;
        height: 18px;
      }
    }
  }

  .underline {
    height: 1px;
    margin: 0 20px;
    background: #e7e7e7;
  }
}
</style>
