<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="mage in imgs" :key="mage.img">
        <img :src="mage.img">
      </van-swipe-item>
    </van-swipe>

    <Comtion class="dv"></Comtion>
  </div>
</template>

<script>
// 请提示按钮
import { Toast } from "vant";

// 引入6张图片组件
import Comtion from '../subassembly/img';

export default {
   data: () => ({
     imgs:[]
   }),
  created() {
    //   调用函数发送ajax请求
    this.getdata();
  },
  methods: {
    getdata() {
      this.$http.get("api/getlunbo").then(
        res => {
          // console.log(res);
          // 解析
          const {
            status,
            data: { message }
          } = res;

          if (status == 200) {
            // console.log(message);
            // Toast("提示内容");
            this.imgs = message;
          } else {
          }
        },
        err => {
          console.log(err);
        }
      );
    }
  },
  components:{
    Comtion
  }
};
</script>

<style  lang='less'  scoped>
@import "../../assets/css/Home.less";
</style>