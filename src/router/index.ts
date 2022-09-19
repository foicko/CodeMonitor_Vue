//该文件专门用于创建整个应用的路由器
import { createRouter,createWebHashHistory } from 'vue-router'

import MainDashBoard from '../components/DashBoard.vue'
import Rank from '../components/Rank.vue'
import Goals from '../components/Goals.vue'
import Projects from '../components/Projects.vue'
import About from '../components/About.vue'


export default createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path:'',
            component:MainDashBoard
        },
        {
            path:'/rank',
            component:Rank
        },
        {
            path:'/Goals',
            component:Goals
        },
        {
            path:'/Projects',
            component:Projects
        },
        {
            path:'/about',
            component:About
        }
    ]
})
