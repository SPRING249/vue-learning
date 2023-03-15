/*
* 整个项目的入口文件
*
* */

//引入Vue文件
import Vue from 'vue'
//引入APP组件，他是所有组件的父组件
import App from './App.vue'
//引入Element-UI
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';	// 引入ElementUI全部样式


Vue.config.productionTip = false

//应用
Vue.use(ElementUI)


new Vue({
    //render函数
    render: h => h(App),
}).$mount('#app')
