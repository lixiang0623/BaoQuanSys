<template>
  <div class="container">
    <div class="display" @click="onClick">
      <slot name="left">
        <div class="left_layout">
          <!-- <img class="left_icon" src="~common/img/my-bankcard/icon_shyh_logo.png" /> -->
          <img v-if="left_icon" class="left_icon" :src="left_icon" />
          <span class="text" @click="onTitleClick">{{ title }}</span>
          <slot name="left-expansion"></slot>
        </div>
      </slot>

      <div class="right_layout">
        <slot name="right">
          <div class="text">{{ content }}</div>
        </slot>
        <img
          v-if="right_icon"
          class="right_icon"
          :src="right_icon"
          @click="onRightIconClick"
        />
      </div>
    </div>

    <div v-if="underline" class="underline" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  props: [
    "title",
    "content",
    "left_icon",
    "right_icon",
    "underline",
    "rightIconClick",
  ],
  methods: {
    onClick() {
      this.$emit("click");
    },
    onTitleClick(e) {
      this.$emit("titleClick", e);
    },
    onRightIconClick(e) {
      this.$emit("rightIconClick", e);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~common/css/common.less";
.container {
  width: 100%;
  .display {
    background: #ffffff;
    display: flex;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    .left_layout {
      display: flex;
      align-items: center;
    }
    .right_layout {
      display: flex;
      align-items: center;
    }
    .text {
      font-family: PingFangSC-Regular;
      font-size: 16px;
      color: #2a2a2a;
      letter-spacing: 0;
    }
    .left_icon {
      width: 24px;
      height: 24px;
      margin-right: 10px;
      object-fit: contain;
    }
    .right_icon {
      margin-left: 5px;
      width: 14px;
      height: 14px;
      object-fit: contain;
    }
  }

  .underline {
    height: 1px;
    margin: 0 20px;
    background: #e7e7e7;
  }
}
</style>
