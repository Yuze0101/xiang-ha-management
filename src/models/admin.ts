export default {
    // 初始数据
    state: {
        adminInfo: {},
    },
    // 监听器，程序加载后执行
    subscriptions: {},
    // 异步操作
    effects: {},
    // 呈现方式
    reducers: {
        setAdminInfo(state, { payload }) {
            return {
                ...state,
                adminInfo: payload,
            };
        },
    },
};
