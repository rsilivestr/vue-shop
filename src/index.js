import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import { router } from './router';
import { store } from './store';
// fix async functions ReferenceError: regeneratorRuntime is not defined
import 'regenerator-runtime/runtime';

Vue.config.productionTip = false;

Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: (createElement) => createElement(App),
}).$mount('#app');
