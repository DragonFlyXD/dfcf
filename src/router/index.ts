import type { App } from 'vue'
import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
import Layout from '/@/layout/index.vue'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: Layout
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior: (to, _, savedPosition) => {
        // 使滚动动画流畅
        const behavior = 'smooth'

        if (savedPosition) {
            return { ...savedPosition, behavior }
        }

        if (to.hash) {
            return {
                el: to.hash,
                behavior
            }
        }

        return { left: 0, top: 0, behavior }
    }
})

/**
 * @description 初始化路由
 * @author longfei.chen
 * @date 2020.12.25
 * @param {App} app vue app
 */
export function setupRouter(app: App): void {
    app.use(router)

    router.isReady().then(() => {
        app.mount('#app')
    })
}

export default router
