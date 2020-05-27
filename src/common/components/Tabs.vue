<template>
  <ul id="tabs">
    <li
      :class="{ active: index === current }"
      v-for="(item, index) in tabs"
      :key="'tab' + index"
      @click="onTabClick(item, index)"
      :seed="seeds[index]"
    >
      <p class="title">{{ item }}</p>
      <div class="bottom-border" />
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      current: 0
    };
  },

  created() {
    if (this.$props.initIndex) {
      //有指定 初始化index
      this.current = this.$props.initIndex;
    }
  },

  props: {
    tabs: { type: Array, default: [] },
    seeds: { type: Array, default: [] },
    initIndex: Number
  },

  methods: {
    onTabClick(item, index) {
      this.current = index;
      this.$emit("tabClicked", item, index);
    }
  }
};
</script>

<style lang="less">
@import "~common/css/common.less";

#tabs {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 50px;
  background: #ffffff;

  overflow: hidden;
  li {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    .title {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #757575;
    }
    .bottom-border {
      height: 2px;
      width: 20px;
    }

    &[class="active"] {
      .bottom-border {
        background: #e23e00;
      }

      .title {
        color: #2a2a2a;
      }
    }
  }
}
</style>
