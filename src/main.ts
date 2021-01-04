import { createApp } from 'vue'
import { setup } from './setup'
import App from './App.vue'

const app = createApp(App)

// 初始化工程
setup(app)
