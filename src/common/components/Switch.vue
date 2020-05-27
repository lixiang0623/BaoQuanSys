
<template>
  <div>
    <span
      class="switch"
      :class="{'switch-on' : isChecked}"
      :value="value"
      @click="toggle"
      style="position:relative"
    >
      <div
        v-if="isChecked && direction.length > 0"
        style="width:100%;height:100%;position:absolute;padding:0 5px;line-height:20px;color:#FFF;user-select:none"
      >{{direction[0]}}</div>
      <div
        v-if="!isChecked && direction.length > 0"
        style="width:100%;height:100%;position:absolute;padding:0 5px;right:2px;line-height:22px;color:#7A7A7A;text-align:right;user-select:none"
      >{{direction[1]}}</div>
    </span>
  </div>
</template>


<script>
export default {
  name: "switchComponent",
  props: {
    value: {
      type: Boolean,
      default: true
    },
    text: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      isChecked: this.value
    };
  },
  computed: {
    direction() {
      if (this.text) {
        return this.text.split("|");
      } else {
        return [];
      }
    }
  },
  watch: {
    value(val) {
      this.isChecked = val;
    },
    isChecked(val) {
      // this.$emit("change", val);
    }
  },
  methods: {
    toggle() {
      if (this.$listeners.change) {
        this.$emit("change", !this.isChecked);
        // this.$listeners.change(!this.isChecked)
      }else{
        this.isChecked = !this.isChecked;
      }
    
    }
  }
};
</script>

<style lang="less" scoped>
.switch {
  display: block;
  position: relative;
  width: 50px;
  height: 30px;
  /* border: 1px solid #dfdfdf; */
  /* outline: 0; */
  border-radius: 15px;
  box-sizing: border-box;
  background-color: #dfdfdf;
  cursor: pointer;
  /* transition: background-color 0.1s, border 0.1s; */
}
.switch:before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 30px;
  border-radius: 15px;
  background-color: #d8d8d8;
  /* transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1); */
}
.switch:after {
  content: " ";
  position: absolute;
  top: 2px;
  left: 1px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  /* transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35); */
}
/* .switch-on {
  border-color: #6f6f6f;
  background-color: #E23E00;
} */
.switch-on:before {
  /* border-color: #1aad19; */
  background-color: #e23e00;
}
.switch-on:after {
  transform: translateX(22px);
}
</style>
