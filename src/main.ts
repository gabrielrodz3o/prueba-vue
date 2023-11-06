import { createApp } from 'vue'

//import './style.css'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import { install as installPinia }  from "../src/store"
import "primeflex/primeflex.css";
import "primevue/resources/themes/lara-light-teal/theme.css";
import "primevue/resources/primevue.min.css"; /* Deprecated */
import "primeicons/primeicons.css";

import DataView from 'primevue/dataview';
// import DataTable from 'primevue/dataTable';
// import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions';
import Tag from 'primevue/tag';

import Button from 'primevue/button';
import Rating from 'primevue/rating';
import Menubar from 'primevue/menubar';
import Image from 'primevue/image';
import Skeleton from 'primevue/skeleton';
import InputText from 'primevue/inputtext';
import Badge from 'primevue/badge';
import Dropdown  from 'primevue/dropdown';
import BadgeDirective from "primevue/badgedirective";
const app = createApp(App)
app.use(PrimeVue, { ripple: true  });
app.directive('badge', BadgeDirective);
app.component('DataView', DataView);
// app.component('DataViewLayoutOptions', DataViewLayoutOptions);
app.component('Tag', Tag);
app.component('Button', Button);
app.component('Menubar', Menubar);
app.component('Rating', Rating);
app.component('Image', Image);
app.component('Badge', Badge);
app.component('Skeleton', Skeleton);
app.component('InputText', InputText);
app.component('Dropdown', Dropdown );
//app.component('DataTable', DataTable);
app.use(router)
app.use(installPinia)
app.use(PrimeVue);

app.mount('#app')