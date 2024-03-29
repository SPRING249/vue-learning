//求和功能相关的配置
export default {
    namespaced: true,
    actions: {
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
    },
    mutations: {
        ADD(state, value) {
            state.sum += value
        },
        SUBTRACT(state, value) {
            state.sum -= value
        },
    },
    state: {
        sum: 0,
        school: '南京',
        subject: '前端',
    },
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}
