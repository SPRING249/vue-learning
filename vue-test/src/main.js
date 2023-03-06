/*
* 整个项目的入口文件
*
* */

//引入Vue文件
import Vue from 'vue'
//引入APP组件，他是所有组件的父组件
import App from './App.vue'

//创建一个Vue实例对象--vm
new Vue({
    //render函数
    render: h => h(App),
}).$mount('#app')
