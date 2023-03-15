import VueRouter from "vue-router";
import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import Message from "@/pages/Message.vue";
import Detail from "@/pages/Detail.vue";


const router = new VueRouter({
    routes: [
        {
            name: 'guanyu',
            path: '/about',
            component: About,
            meta: {isAuth: true, title: '关于'}
            
        },
        {
            name: 'zhuye',
            path: '/home',
            component: Home,
            meta: {title: '主页'},
            children: [     //通过children配置子级路由
                {
                    name: 'xinwen',
                    path: 'news',   //此处一定不要写斜杠 /
                    component: News,
                    meta: {isAuth: true, title: '新闻'},
                    // 独享路由守卫--只有前置，没有后置
                    // beforeEnter: (to, from, next) => {
                    //     console.log('前置路由守卫', to, from)
                    //     // 判断是否需要鉴权
                    //     if (to.meta.isAuth) {
                    //         if (localStorage.getItem('school') === 'atguigu') {
                    //             next()
                    //         } else {
                    //             alert('学校名不对，无权限查看！')
                    //         }
                    //     } else {
                    //         next()
                    //     }
                    // }
                },
                {
                    name: 'xiaoxi',
                    path: 'message',
                    component: Message,
                    meta: {isAuth: true, title: '消息'},
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail/:id/:title',  //使用占位符接收params参数
                            component: Detail,
                            meta: {isAuth: true, title: '详情'},
                            props($route) {
                                return {
                                    id: $route.params.id,
                                    title: $route.params.title
                                }
                                
                            }
                            
                        }
                    ]
                },
            
            ]
        },
    ]
})
// //全局前置路由守卫，---初始化的时候被调用，每次路由切换之前被调用
// router.beforeEach((to, from, next) => {
//     console.log('前置路由守卫', to, from)
//
//     // 判断是否需要鉴权
//     if (to.meta.isAuth) {
//         if (localStorage.getItem('school') === 'atguigu') {
//             next()
//         } else {
//             alert('学校名不对，无权限查看！')
//         }
//     } else {
//         next()
//     }
// })
// 后置路由守卫---初始化的时候被调用，每次路由切换之前被调用
router.afterEach((to, from) => {
    console.log('后置路由守卫', to, from)
    document.title = to.meta.title || '系统'
})
export default router