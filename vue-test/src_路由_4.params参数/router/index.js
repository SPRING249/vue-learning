import VueRouter from "vue-router";
import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import Message from "@/pages/Message.vue";
import Detail from "@/pages/Detail.vue";


export default new VueRouter({
    routes: [
        {
            path: '/about',
            component: About
        },
        {
            path: '/home',
            component: Home,
            children: [     //通过children配置子级路由
                {
                    path: 'news',   //此处一定不要写斜杠 /
                    component: News
                },
                {
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'xiangqing',
                            path: 'detail/:id/:title',  //使用占位符接收params参数
                            component: Detail
                        }
                    ]
                },
            
            ]
        },
    ]
})