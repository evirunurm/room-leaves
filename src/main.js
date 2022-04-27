import {createApp} from 'vue';
import App from './App.vue';
import router from './router';

/*require("mind-ar/dist/mindar-image.prod.js");
require('aframe');
/!*require('ar.js');*!/
require("mind-ar/dist/mindar-image-aframe.prod.js");*/

createApp(App).use(router).mount('#app');