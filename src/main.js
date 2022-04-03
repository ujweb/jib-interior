import { createApp } from 'vue';

// Airbnb規則：外部套件往上放
// axios
import axios from 'axios';
import VueAxios from 'vue-axios';
import CKEditor from '@ckeditor/ckeditor5-vue';
import VueLoading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import VCalendar from 'v-calendar';
import 'v-calendar/dist/style.css';

// validate
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import emitter from '@/script/mitt';
import Header from '@/components/HeaderComponent.vue';
import PageLoading from '@/components/PageLoading.vue';
import Pagination from '@/components/PaginationNav.vue';

// Airbnb規則：再執行本地檔案
import App from './App.vue';
import router from './router';

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');

const app = createApp(App);
app.config.globalProperties.$emitter = emitter;
app.use(router);
app.use(VueAxios, axios);
app.use(CKEditor);
app.use(VueLoading);
app.use(VCalendar, {});
app.component('VueLoading', VueLoading);
app.component('PageLoading', PageLoading);
app.component('HeaderComponent', Header);
app.component('PaginationNav', Pagination);
app.component('FormBlock', Form);
app.component('FieldInput', Field);
app.component('ErrorMessage', ErrorMessage);
app.mount('#app');
