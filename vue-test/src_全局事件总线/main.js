/*
* 整个项目的入口文件
*
* */

//引入Vue文件
import Vue from 'vue'
//引入APP组件，他是所有组件的父组件
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
    //render函数
    render: h => h(App),
    //beforeCreate中模板未解析，且this是vm
    beforeCreate() {
        Vue.prototype.$bus = this //安装全局事件总线
    }
}).$mount('#app')
