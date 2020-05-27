import Vue from 'vue';
import utilities from 'common/utilities'
//截取时间 月份-日期
Vue.filter('twoDecimal', function (value) {
  //保留2位小数点过滤器

  return utilities.toDecimalNoRound(value)


})

