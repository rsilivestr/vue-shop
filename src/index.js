import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// fix async functions ReferenceError: regeneratorRuntime is not defined
import 'regenerator-runtime/runtime';

Vue.config.devtools = true;

new Vue({
  router,
  store,
  render: (createElement) => createElement(App),
}).$mount('#app');
