import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


import { Button, Card } from "./components";

export { Button, Card };

export default {
    install(app: any) {
        app.component("HarmonyButton", Button);
        app.component("HarmonyCard", Card);
    },
};


createApp(App).mount('#app')
