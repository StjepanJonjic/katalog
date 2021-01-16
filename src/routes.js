import naslovna from './components/naslovna.vue'
import login from './components/login.vue'
import register from './components/register.vue'

export default [
    {path:'/',component: naslovna},
    {path:'/login',component: login},
    {path:'/register',component: register},
]