import { defineConfig } from 'umi';

export default defineConfig({
  layout:false,
  //routes不配置，为约定式路由，可根据pages里目录自动生成
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  plugins:[],
  proxy: {
    '/API_HOST': {
        target: 'https://crm.paat.com',
        changeOrigin: true,
        pathRewrite: { '^/API_HOST': '' },
        cookieDomainRewrite: {
            '*': 'localhost',
        },
    },
  },
  theme: {
    // 'primary-color':'#FFC600'
  },
  targets: {
      ie: 10,
  },
  chainWebpack (config, { webpack }) {
   
  }
});
