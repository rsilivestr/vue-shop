import Vue from 'vue';
import App from './App.vue';

Vue.config.devtools = true;

new Vue({ render: (createElement) => createElement(App) }).$mount('#app');
