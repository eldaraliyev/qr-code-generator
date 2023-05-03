import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
// import path from 'path'

export default defineConfig({
    base: '/qr-code-generator/',
    server: {
        host: true,
        port: 8800,
    },
    // resolve: {
    //     alias:
    //         {'@': path.resolve(__dirname, './src')}
    //
    // },
    plugins: [vue()],
})

