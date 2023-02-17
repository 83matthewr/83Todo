import { createApp } from "vue";
import { createPinia } from "pinia";
import { VueFire, VueFireAuth } from "vuefire";

import App from "./App.vue";
import { firebaseApp } from "./firebase";
import router from "./router";
import "./assets/main.css";

import BaseButton from "./components/UI/BaseButton.vue";
import BaseInput from "./components/UI/BaseInput.vue";
import BaseCard from "./components/UI/BaseCard.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()]
});

app.component('base-button', BaseButton);
app.component('base-input', BaseInput);
app.component('base-card', BaseCard);

app.mount("#app");
