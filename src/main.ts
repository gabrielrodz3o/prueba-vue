import { createApp } from 'vue'

//import './style.css'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import "primeflex/primeflex.css";
import "primevue/resources/themes/lara-light-teal/theme.css";
import "primevue/resources/primevue.min.css"; /* Deprecated */


import DataView from 'primevue/dataview';
// import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
// import Tag from 'primevue/tag';
import Rating from 'primevue/rating';
import Button from 'primevue/button';
import Rating from 'primevue/Rating';

const app = createApp(App)
app.use(PrimeVue, { ripple: true  });
app.component('DataView', DataView);
// app.component('DataViewLayoutOptions', DataViewLayoutOptions);
// app.component('Tag', Tag);
app.component('Button', Button);
// app.component('Rating', Rating);
app.use(router)
app.use(PrimeVue);

app.mount('#app')