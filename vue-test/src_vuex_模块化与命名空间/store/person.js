//人员管理相关的配置
export default {
    namespaced: true,
    actions: {
        addPersonWang(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('ADD_Person', value)
            } else {
                alert('添加的人必须姓王')
            }
        },
        addPersonServer(context) {
            
        }
    },
    mutations: {
        ADD_Person(state, value) {
            console.log('mutations中的ADD_PERSON被调用了')
            state.personList.unshift(value)
        }
    },
    state: {
        personList: [
            {id: '001', name: 'JoJo'}
        ]
    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    }
}
