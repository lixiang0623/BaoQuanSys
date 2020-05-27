<template>
  <div class="modal" v-show="show">
    <div class="modal-bg" />
    <div class="modal-container">
      <div v-if="hasHeader" class="modal-header">
        <p class="title">{{ title }}</p>
        <p class="close" @click="modalCancel"></p>
      </div>
      <div class="modal-main">
        <slot></slot>
      </div>

      <slot name="footer">
        <div v-if="hasFooter" class="modal-footer">
          <button @click="modalCancel">{{ footerLeftText }}</button>
          <button @click="modalConfirm">{{ footerRightText }}</button>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ""
    },
    hasHeader: {
      type: Boolean,
      default: true
    },
    hasFooter: {
      type: Boolean,
      default: false
    },
    footerLeftText: {
      type: String,
      default: "取消"
    },
    footerRightText: {
      type: String,
      default: "确定"
    }
  },
  methods: {
    modalCancel() {
      this.$emit("modalCancel");
    },

    modalConfirm() {
      this.$emit("modalConfirm");
    }
  }
};
</script>

<style lang="less" scoped>
@import "~common/css/common.less";
.modal {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.modal-bg {
  position: fixed;
  opacity: 0.8;
  background: #000000;
  width: 100%;
  height: 100%;
}
.modal-container {
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  position: fixed;
  // top: 50%;
  // left: 50%;
  // align-self: center;
  // transform: translate(-50%, -50%);
  width: 335px;
  height: 215px;
  display: flex;
  flex-direction: column;
  .modal-header {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    // cursor: move;
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #2a2a2a;
    border-bottom: 1px solid #d8d8d8;
    .title {
      height: 25px;
      line-height: 25px;
      font-family: PingFangSC-Regular;
      font-size: 18px;
      color: #2a2a2a;
      text-align: center;
    }
    .close {
      position: absolute;
      left: 20px;
      color: #b2b2b2;
      // background: red;
      width: 15px;
      height: 15px;
      line-height: 15px;
      text-align: center;
      font-size: 20px;
    }

    .close::after {
      content: "\00D7";
    }
  }
  .modal-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    button {
      width: 100px;
    }
  }
  .modal-main {
    flex: 1;
    display: flex;
  }
}
</style>
