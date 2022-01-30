import { createStore } from "vuex";

export default createStore({
    modules: {},
    state: () => ({
        title: 'Hello from Store',
        text: 'Vue Animation'
    }),
    mutations: {},
    actions: {},
    getters: {},
    // namespaced: true
})

