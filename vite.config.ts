import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    alias: {
        '/@': resolve(__dirname, 'src')
    },
    plugins: [vue()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: {}
            }
        }
    },
    server: {
        port: parseInt(process.env.VITE_PORT) || 8080,
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8081',
                changeOrigin: true
            }
        }
    },
    build: {
        base: '/'
    },
    optimizeDeps: {
        include: ['ant-design-vue/es/locale/zh_CN', 'ant-design-vue/es/locale/en_US', '@ant-design/icons-vue']
    }
})
