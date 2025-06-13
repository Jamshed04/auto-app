import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import { registerLicense } from "@syncfusion/ej2-base";
import router from './router';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';


registerLicense("ORg4AjUWIQA/Gnt2XFhhQlJHfVhdXnxLflFzVWJZdVp2flFCcDwsT3RfQFhjT35QdEdmXX5ZeHRST2teWA==");

const app = createApp(App)

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
app.use(pinia);

app.use(router)
app.mount('#app')

