import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import SelectButton from 'primevue/selectbutton';

import 'primeflex/primeflex.css';
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons


const app = createApp(App);

app.use(PrimeVue, { ripple: true });

app.component('select-button', SelectButton)
app.component('p-button', Button)

app.mount('#app');
