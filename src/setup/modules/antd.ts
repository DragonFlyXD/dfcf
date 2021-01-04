import type { App } from 'vue'
import Antd from 'ant-design-vue'

import 'ant-design-vue/dist/antd.css'

/**
 * @description 初始化 Ant Design
 * @author longfei.chen
 * @date 2021.01.04
 * @param {App} app vue app
 */
export function setupAntd(app: App): void {
    app.use(Antd)
}
