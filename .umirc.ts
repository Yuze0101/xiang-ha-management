import { defineConfig } from 'umi';

export default defineConfig({
    nodeModulesTransform: {
        type: 'none',
    },
    routes: [
        {
            path: '/',
            component: '@/pages/index',
            routes: [{ path: '/users', component: '@/pages/Users' }],
        },
        { path: '/login', component: '@/pages/Login' },
    ],
    fastRefresh: {},
});
