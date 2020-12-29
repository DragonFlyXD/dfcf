import type { UserConfig } from 'vite'
import { resolve } from 'path'

const config: UserConfig = {
    base: '/',
    port: parseInt(process.env.VITE_PORT) || 8080,
    alias: {
        '/@/': resolve(__dirname, 'src')
    },
    esbuildTarget: 'es2020',
    cssPreprocessOptions: {
        sass: {
            modifyVars: {}
        }
    },
    proxy: {
        '/api': {
            target: 'http://localhost:8081',
            changeOrigin: true
        }
    },
    optimizeDeps: {
        include: ['ant-design-vue/es/locale/zh_CN', 'ant-design-vue/es/locale/en_US', '@ant-design/icons-vue']
    }
}

export default config
