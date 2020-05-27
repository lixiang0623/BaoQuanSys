<template>
  <div class="add-picker-wrapper">
    <div class="add-picker-header">
      <div>{{ title }}</div>
    </div>
    <div class="add-picker-container">
      <ul>
        <li v-for="(item, index) in data" :key="'addPicker' + index">
          <div class="add-picker-text">
            <img v-if="item.icon" :src="item.icon" class="icon" />
            {{ item.text }}
          </div>

          <div class="add-icon-container" @click="handleAdd(item.text, index)">
            <img class="add-icon" src="~common/img/icon_plus.png" />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "add-picker",
  props: {
    title: {
      type: String,
      default: "添加"
    },
    onAdd: Function,
    data: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  methods: {
    handleAdd(value, index) {
      this.onAdd && this.onAdd(value, index);
    }
  }
};
</script>

<style lang="less" scoped>
@import "~common/css/common.less";

.add-picker-wrapper {
  @supports (bottom: env(safe-area-inset-bottom)) { //修复 iphone x 底部点不到
    & {
      padding-bottom: constant(safe-area-inset-bottom);
      padding-bottom: env(safe-area-inset-bottom);
      background: #ffffff;
    }
  }
  // position: fixed; //在android 会随键盘被顶起  ios没这个问题
  // bottom: 0;
  // left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;

  .add-picker-header {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #e7e7e7;
    border-bottom: 1px solid #e7e7e7;
    height: 50px;
    background-color: #ffffff;
    color: #757575;
    font-size: 16px;
  }
  .add-picker-container {
    background-color: #ffffff;
    ul {
      max-height: 150px;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      li {
        box-sizing: border-box;
        color: #2a2a2a;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        display: flex;
        padding-left: 20px;
        height: 50px;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #e7e7e7;
        .icon {
          width: 28px;
          height: 28px;
          margin-right: 10px;
        }
        .add-picker-text {
          display: flex;
          align-items: center;
        }

        .add-icon-container {
          //给点击的icon 增加一个容器 增加大可点击面积 方便点击
          height: 100%;
          padding-left: 20px;
          padding-right: 20px;
          display: flex;
          align-items: center;
          .add-icon {
            width: 18px;
            height: 18px;
          }
        }
      }
    }
  }
}
</style>
