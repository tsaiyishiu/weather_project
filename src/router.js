import Vue from 'vue'
import VueRouter from 'vue-router'
import MessageBoard from "./components/MessageBoard";

Vue.use(VueRouter)

const routes = [
    {
     path:'/board',
     name:'MessageBoard' ,
     component: MessageBoard
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router
