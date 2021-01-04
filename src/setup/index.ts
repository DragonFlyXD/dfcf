import type { App } from 'vue'
import { setupRouter } from '/@/router'
import { setupStore } from '/@/store'
import { setupAntd } from './modules/antd'

import 'normalize.css/normalize.css'

/**
 * @description 初始化工程
 * @author longfei.chen
 * @date 2020.12.30
 * @param {App} app vue app
 */
export function setup(app: App): void {
    // 初始化路由
    setupRouter(app)

    // 初始化状态存储
    setupStore(app)

    // 初始化 Ant Design
    setupAntd(app)
}
