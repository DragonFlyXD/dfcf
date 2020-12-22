import { UserConfig } from 'vite'
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
    }
}

export default config
