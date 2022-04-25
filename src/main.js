import {createApp} from 'vue';
import App from './App.vue';
import router from './router';

require('aframe');
require('ar.js');

createApp(App).use(router).mount('#app');