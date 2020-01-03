import Vue from 'vue'
import Router from 'vue-router'
// 引入组件
import Recommend from '../components/recommend/recommend.vue'
import Singer from '../components/singer/singer.vue'
import Rank from '../components/rank/rank.vue'
import Search from '../components/search/search.vue'

Vue.use(Router)

//定义路由
export default new Router({
  routes: [
    {
      //根默认指向recommend
      path: '/',
      redirect: '/recommend'
    },
    {
      path:'/recommend',
      component:Recommend
    },
    {
      path:'/singer',
      component:Singer
    },
    {
      path:'/rank',
      component:Rank
    },
    {
      path:'/search',
      component:Search
    }
  ]
})
