import '@/styles/main.css'

import { createApp } from 'vue'
import store from '@/stores'

import App from './App.vue'
import router from './router'

import '@/router/permission'

import Antd from 'ant-design-vue'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(Antd)

app.mount('#app')
