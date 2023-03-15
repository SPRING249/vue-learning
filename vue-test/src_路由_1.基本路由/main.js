/*
* 整个项目的入口文件
*
* */

//引入Vue文件
import Vue from 'vue'
//引入APP组件，他是所有组件的父组件
import App from './App.vue'
//引入VueRouter
import VueRouter from "vue-router";
import router from "@/router";


Vue.config.productionTip = false

//应用
Vue.use(VueRouter)


new Vue({
    //render函数
    render: h => h(App),
    router: router
}).$mount('#app')
