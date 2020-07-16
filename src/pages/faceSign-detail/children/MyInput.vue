<template>
  <div class="input-container">
    <div class="input_wrapper">
      <div class="input-title">{{title}}</div>
      <div class="input-container">
        <input
          v-bind="$attrs"
          autocomplete="off"
          :value="value"
          class="input_style"
          @input="onInputChanged"
          @blur="onInputBlur"
        />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Input",
    inheritAttrs: false,
    props: ["title", "value"],
    data() {
      return {};
    },
    mounted() {
    },

    methods: {
      //监听输入框事件
      onInputChanged($event) {
        this.$emit("input", $event.target.value); //将值放在自定义的事件函数中作为参数
      },
      onInputBlur($event) {
        this.$emit("inputBlur", $event);
      }
    },
    computed: {}
  };
</script>

<style lang="less" scoped>
  .input_wrapper {
    font-family: PingFangSC-Regular;
    background: #ffffff;
    font-size: 12px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;

    .input-title {
      font-size: 12px;
      width: 80px;
      text-align: right;
      padding-right: 10px;
      color: #757575;
    }
    .input-container {
      flex: 1;
      padding-right: 10px;

      .input_style {
        width: 100%;
        padding: 0 5px;
        border-radius: 4px;
        border: 1px solid #b2b2b2;
        font-size: 14px;
        line-height: 24px;
        color: #757575;
        &::-webkit-input-placeholder {
          color: #b2b2b2;
          font-size: 14px;
        }
      }
    }
  }
</style>
