//该文件用于vuex最为核心的store
//引入Vuex
import Vuex from "vuex";
import Vue from "vue";

//应用Vuex插件
Vue.use(Vuex)
//Dispatch
//准备actions -- 用于响应组建中的动作
const actions = {
    addOdd(context, value) {
        console.log("actions中的addOdd被调用了", context)
        if (context.state.sum % 2) {
            context.commit('ADD', value)
        }
    },
    addWait(context, value) {
        console.log("actions中的addWait被调用了")
        setTimeout(() => {
            context.commit('ADD', value)
        }, 500)
    }
}
//Commit
//准备mutations -- 用于操作数据（state）
const mutations = {
    ADD(state, value) {
        state.sum += value
    },
    SUBTRACT(state, value) {
        state.sum -= value
    }
}
//准备state -- 用于存储数据
const state = {
    sum: 0,
    school: '南京',
    subject: '前端'
}

//准备getters -- 用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters,
})

