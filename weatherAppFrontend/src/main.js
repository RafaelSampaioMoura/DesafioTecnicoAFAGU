import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import vue3StarRatings from "vue3-star-ratings";

const app = createApp(App)

app.component("vue3-star-ratings", vue3StarRatings)

app.use(router)

app.mount('#app')
