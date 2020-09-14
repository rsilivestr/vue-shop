import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.devtools = true;

new Vue({ router, render: (createElement) => createElement(App) }).$mount('#app');
