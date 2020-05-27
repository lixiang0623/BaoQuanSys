
import Vue from 'vue';
import Index from './Index.vue';
import 'common/configs/rem';
import 'common/configs/fastclick';

new Vue({
  // template: '<Index/>',
  // components: {Index}
  render: createElement => createElement(Index)
}).$mount('#app');
