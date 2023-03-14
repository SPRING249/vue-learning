//该文件用于vuex最为核心的store
//引入Vuex
import Vuex from "vuex";
import Vue from "vue";
import countOptions from './count'
import personOptions from './person'

//应用Vuex插件
Vue.use(Vuex)


//创建并暴露store
export default new Vuex.Store({
    //模块化
    modules: {
        countAbout: countOptions,
        personAbout: personOptions
    }
})

