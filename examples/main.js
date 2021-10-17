import Vue from 'vue'
import App from './App.vue'

import editor from '../packages/index';
Vue.use(editor);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
