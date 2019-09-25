import Vue from 'vue';
import router from '@/routes/index.js';
import store from '@/store/index.js';

const app = new Vue({
    el: '#app',
    router,
    store
});
