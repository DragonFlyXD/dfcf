import type { App } from 'vue'
import { createStore } from 'vuex'

const store = createStore({})

/**
 * @description 初始化状态存储
 * @author longfei.chen
 * @date 2020.12.25
 * @param {App} app vue app
 */
export function setupStore(app: App): void {
    app.use(store)
}

export default store
