import { defineConfig } from 'umi';

export default defineConfig({
    nodeModulesTransform: {
        type: 'none',
    },
    routes: [
        {
            path: '/',
            component: '@/pages/index',
            routes: [
                { path: '/', component: '@/pages/Home/index' },
                { path: '/product', component: '@/pages/Product/index' },
                { path: '/users', component: '@/pages/Users/index' },
            ],
        },
        { path: '/login', component: '@/pages/Login' },
    ],
    fastRefresh: {},
});
