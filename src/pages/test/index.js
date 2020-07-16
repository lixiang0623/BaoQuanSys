
import Vue from 'vue';
import Index from './Index.vue';
import { Tab, Tabs, Button } from 'vant';
import 'common/configs/rem';
import 'common/configs/fastclick';
import {NavBar} from 'vant';

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.use(NavBar);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Button);
new Vue({
  // template: '<Index/>',
  // components: {Index}
  render: createElement => createElement(Index)
}).$mount('#app');
