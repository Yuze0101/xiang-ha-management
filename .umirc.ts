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
                {
                    path: '/product',
                    component: '@/pages/Product/index',
                    routes: [
                        {
                            path: '/product/addproduct',
                            component: '@/pages/Product/addProduct',
                        },
                    ],
                },
                { path: '/admin', component: '@/pages/Admin/index' },
                { path: '/order', component: '@/pages/Order/index' },
                { path: '/broadcast', component: '@/pages/Broadcast/index' },
            ],
        },
    ],
    fastRefresh: {},
});
