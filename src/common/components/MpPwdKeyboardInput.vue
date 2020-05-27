<template>
  <div class="container">
    <div class="input_wrapper">
      <div v-if="title" class="left_layout">{{ title }}</div>
      <div class="right_layout" v-bind="$attrs" @click="showKeyboard">
        <div
          class="input"
          :class="{ 'input-blink': this.modelVisible }"
          v-if="inputAmount > 0"
        >
          {{ displayValue }}
        </div>
        <div
          class="placeholder"
          :class="{ 'placeholder-blink': this.modelVisible }"
          v-else
        >
          {{ placeholder }}
        </div>
        <!-- <span v-if="buttonText" class="button_style" @click="onButtonClick">{{buttonText}}</span>
        <img v-if="right_icon" class="right_icon" :src="right_icon" @click="onRightIconClick" /> -->
      </div>
    </div>
    <div v-if="underline" class="underline" />
    <div class="modal-bg" v-if="modelVisible" @click="modalClick" />
  </div>
</template>

<script>
export default {
  name: "MpPwdInput",
  inheritAttrs: false,
  props: {
    title: { type: String },
    placeholder: { type: String },
    underline: { type: Boolean },
    type: {},
    value: {},
    maxLength: {}
  },
  data() {
    return {
      inputAmount: 0,
      modelVisible: false
    };
  },

  model: {
    event: "change"
  },

  computed: {
    displayValue() {
      return new Array(this.inputAmount).fill("*").join("");
    }
  },

  watch: {
    value(value) {
      if (!value) this.inputAmount = 0; //value 变空时 清空密码位数
    }
  },

  methods: {
    showKeyboard() {
      this.modelVisible = true;
      AlipayJSBridge.call(
        "showSafeKeyboard",
        { show: true, maxLength: this.maxLength, type: this.type },
        result => {
          if (result.isCofirmed) {
            //true
            //点击完成 关闭遮罩
            this.modelVisible = false;
          }

          // AlipayJSBridge.call("nativeLog", { password: result });
          this.$emit("change", result.result);
          this.inputAmount = result.inputAmount;
        }
      );
    },

    modalClick() {
      this.modelVisible = false;
      AlipayJSBridge.call("showSafeKeyboard", {
        show: false
      });
    }
  }
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
      font-size: 16px;
      .input {
        color: #757575;
        // display: flex;
        // justify-content: center;
        // align-items: center;
      }
      .placeholder {
        color: #b2b2b2;
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

  .modal-bg {
    top: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 999;
    // background: blue;
  }

  .underline {
    height: 1px;
    margin: 0 20px;
    background: #e7e7e7;
  }

  // .input-blink {
  //   position: relative;
  //   &:after {
  //     position: absolute;
  //     content: "";
  //     display: inline-block;
  //     width: 2px;
  //     height: 18px;
  //     top: 50%;
  //     transform: translateY(-50%);
  //     animation: blink 1s infinite steps(1, start);
  //   }
  // }

  // .placeholder-blink {
  //   position: relative;
  //   &:before {
  //     position: absolute;
  //     content: "";
  //     display: inline-block;
  //     width: 2px;
  //     height: 24px;
  //     top: 50%;
  //     transform: translateY(-50%);
  //     animation: blink 1s infinite steps(1, start);
  //   }
  // }

  // @keyframes blink {
  //   0%,
  //   100% {
  //     background-color: transparent;
  //   }
  //   50% {
  //     background-color: #000;
  //   }
  // }
}
</style>
