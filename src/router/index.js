import Vue from 'vue'

// 1.引入 vue-router
import Router from 'vue-router'

// 引入首页组件
import Home from '@/components/tabbar/Home'

// 引入会员
import Member from '@/components/tabbar/Member'

// 引入购物车
import Cart from '@/components/tabbar/Cart'

// 引入搜索
import Search from '@/components/tabbar/Search'


// 3.注册
Vue.use(Router)

// 4.实例化   new Router
export default new Router({
  // 5.定义路由规则
  routes: [{
      path: '/',
      redirect: "Home"
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/member',
      component: Member
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/search',
      component: Search
    },


  ]

})
