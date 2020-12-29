import { createApp } from 'vue'
import { setupRouter } from './router'
import { setupStore } from './store'
import App from './App.vue'

const app = createApp(App)

// 初始化 router
setupRouter(app)

// 初始化 store
setupStore(app)
