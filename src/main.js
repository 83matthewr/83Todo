import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import "./assets/main.css";

import BaseButton from "./components/UI/BaseButton.vue";
import BaseInput from "./components/UI/BaseInput.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

app.component('base-button', BaseButton);
app.component('base-input', BaseInput);

app.mount("#app");
