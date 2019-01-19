import Vue from 'vue'

// 1.引入 vue-router
import Router from 'vue-router'

// 引入首页组件
import Home from '@/components/tabbar/Home.vue'

// 引入会员
import Member from '@/components/tabbar/Member.vue'

// 引入购物车
import Cart from '@/components/tabbar/Cart.vue'

// 引入搜索
import Search from '@/components/tabbar/Search.vue'

// 引入新闻
import NewsList from '@/components/newslist/Newslist'

// 引入评论
import Newinfo from '@/components/newslist/Newinfo'


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
    {
      path: '/home/newslist',
      component: NewsList
    },
    {
      path: '/home/newinfo/:id',
      component: Newinfo
    }
  ]

})
