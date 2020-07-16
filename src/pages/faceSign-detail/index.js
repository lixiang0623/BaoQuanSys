
import Vue from 'vue';
import Index from './Index.vue';
import 'common/configs/rem';
import 'common/configs/fastclick';

//import 'vue-easytable/libs/themes-base/index.css'
import {VTable, VPagination} from 'vue-easytable'
import {Button,Pagination ,Calendar,NavBar} from 'vant';
Vue.use(Button);
Vue.use(Pagination);
Vue.use(Calendar);
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)
Vue.use(NavBar);
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//
Vue.use(ElementUI);





new Vue({
  // template: '<Index/>',
  // components: {Index}
  render: createElement => createElement(Index)
}).$mount('#app');
