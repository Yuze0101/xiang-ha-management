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
                { path: '/users', component: '@/pages/Users/index' },
                { path: '/order', component: '@/pages/Order/index' },
            ],
        },
        { path: '/login', component: '@/pages/Login' },
    ],
    fastRefresh: {},
});
