// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()]
// })


import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
	// host: '0.0.0.0',
	// port: 10000,
	// // 是否开启 https
	// https: false,
    proxy: {
      // 将 /api 开头的请求代理到后端服务器
      '/api': {
        target: 'http://127.0.0.1:3001', // 后端服务器地址
        changeOrigin: true, // 允许跨域
        rewrite: (path) => path.replace(/^\/api/, ''), // 可选：去掉路径中的 /api 前缀
      },
    },
  },
});