import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import pageSearch from '@/pages/page-search'
import  pageDetail from '@/pages/page-detail'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
export default new Router({
    mode:'history',
     routes:[
         {
             path:'/',
             name:index,
             component:index
         },
         {
             path:'/search',
             name:'search',
             component:pageSearch
         },
         {
             path:'/detail/:id',
             name:'detail',
             component:pageDetail
         }
     ]
})
