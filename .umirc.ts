import { defineConfig } from 'umi';

export default defineConfig({
    nodeModulesTransform: {
        type: 'none',
    },
    routes: [
        { path: '/login', component: '@/pages/Login' },
        {
            path: '/',
            component: '@/pages/index',
            routes: [
                { path: '/', component: '@/pages/Home/index' },
                { path: '/admin', component: '@/pages/Admin/index' },
                { path: '/vip', component: '@/pages/Vip/index' },
                { path: '/cookmenu', component: '@/pages/CookMenu/index' },
                { path: '/broadcast', component: '@/pages/Broadcast/index' },
                { path: '/meal', component: '@/pages/Meal/index' },
            ],
        },
    ],
    fastRefresh: {},
});
