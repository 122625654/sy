import Vue from 'vue'
import App from './App'
import router from './router/index'

// 引入资源发送ajax
// import VueResource from 'vue-resource'
// // 注册
// Vue.use(VueResource)

// 引入 axios                                                                   
import axios from 'axios'
// 挂载
Vue.prototype.$http=axios

axios.defaults.baseURL = 'http://localhost:5000/';

// // 全局启用emulateJsON 选项
// Vue.options.emulateJSON = true

Vue.config.productionTip = false


// 导入animate.css
import 'animate.css/animate.css'


// 头部 vant 引入
import {
  NavBar,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Row,
  Col
} from 'vant'

Vue.use(Tabbar)
  .use(TabbarItem)
  .use(NavBar)
  .use(Swipe)
  .use(SwipeItem)
  .use(Row)
  .use(Col)
Vue



new Vue({
  el: '#app',
  //  6.挂载
  router,
  render: c => c(App)
})
