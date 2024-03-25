import './assets/main.css';

import { createApp } from 'vue';
import router from './router';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

createApp(App).use(router).mount('#app');
