import Vue from 'vue';
import router from '@/routes/index.js';
import store from '@/store/index.js';
import Bus from '@/utils/bus';
import VModal from 'vue-js-modal'

Vue.use(Bus);
Vue.use(VModal);

const app = new Vue({
    el: '#app',
    router,
    store
});
