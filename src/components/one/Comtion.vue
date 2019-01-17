<template>
  <!-- 图标 -->
  <div>
    <div>
      <van-row>
        <van-col span="8" v-for="item in list" :key="item.id">
          <div class="nav">
            <img :src="item.src" alt>
            <p>{{item.text}}</p>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    imgs: [],
    list: [
      {
        id: 1,
        src: require("../../assets/images/menu1.png"),
        text: "图片分享"
      },
      {
        id: 2,
        src: require("../../assets/images/menu2.png"),
        text: "新闻咨询"
      },
      {
        id: 3,
        src: require("../../assets/images/menu3.png"),
        text: "商品购物"
      },
      {
        id: 4,
        src: require("../../assets/images/menu4.png"),
        text: "留言反馈"
      },
      {
        id: 5,
        src: require("../../assets/images/menu5.png"),
        text: "视频专区"
      },
      {
        id: 6,
        src: require("../../assets/images/menu6.png"),
        text: "联系我们"
      }
    ]
  })
};
</script>

<style lang='less' scoped>
.van-col {
  text-align: center;
  .nav{
    margin-top: 30px;
    img{
      width: 60px;
      height: 60px;
    }
    p{
      margin-top: 15px;
    }
  }
}
</style>