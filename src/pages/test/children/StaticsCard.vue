<template>
  <div class="staticsSum" :style="{ background: secColor }">
    <div class="topline-statics" :style="{ background: mainColor }" />
    <div class="statics-center">
      <p class="statics-title" :style="{ color: mainColor }" >{{title}}</p>
      <p class="statics-number" :style="{ color: mainColor }">{{sum}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: "add-picker",
    props: {
      mainColor: {
        type: String,
        default: "#4B7BEC"
      },
      secColor: {
        type: String,
        default: "#F9F9FE"
      },
      title: {
        type: String,
        default: "当日PAD\n申请件数"
      },
      sum: {
        type: String,
        default: ""
      }
    },
  };
</script>
<style lang="less" scoped>
  .staticsSum {
    flex: 1;
    height: 80px;
    display: flex;
    flex-direction: column;

    [class^="topline-statics"] {
      height: 6px;
      border-radius: 3px;
    }

    [class^="statics-title"] {
      font-size: 14px;
      white-space: pre-wrap;
    }

    [class^="statics-number"] {
      font-size: 20px;
    }

    .statics-center {
      flex: 1;
      margin: 0 15px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>
