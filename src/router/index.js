import Vue from "vue"
import vueRouter from "vue-router"
Vue.use(vueRouter)
const Home = () => import("../views/home/home.vue")
const CateGory = () => import("../views/category/category.vue")
const Profile = () => import("../views/profile/profile.vue")
const ShopCart = () => import("../views/shopcart/shopcart.vue")
const routes = [
    {
        path:"",
        redirect:"/home"
    },
    {
        path: "/home",
        component: Home
    },
    {
        path: "/category",
        component: CateGory
    },
    {
        path: "/profile",
        component: Profile
    },
    {
        path: "/shopcart",
        component: ShopCart
    }
]
const router = new vueRouter({
    routes,
    mode:"history"
})
export default router