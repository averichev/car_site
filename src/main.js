import {createApp} from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {router} from '@/router'
import httpClient from './plugins/httpClient';

library.add(fas);
library.add(far);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import App from './App.vue'
import './app.scss'


const app = createApp(App)
app
    .use(BootstrapVue3)
    .component("font-awesome-icon", FontAwesomeIcon)
app.use(router)
app.use(httpClient, process.env.VUE_APP_BASE_URL)
app.mount('#app')
