import { createApp } from 'vue';
import App from './App.vue';
import createRouter from './router';
import i18n from './locales';

import './style.less';

const app = createApp(App);
const router = createRouter();
app.use(router).use(i18n).mount('#app');
