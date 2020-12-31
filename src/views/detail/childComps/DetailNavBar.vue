<template>
  <div>
    <nav-bar class="home-nav">
      <template v-slot:left>
        <div @click="backClick">
          <img class="close_return" src="../../../assets/img/base/return.svg" alt="">
        </div>
      </template>
      <template v-slot:center>
        <div class="title">
          <div class="title-item"
               @click="titleClick(index)"
               :class="{active : currentIndex === index}"
               v-for="(item,index) in navList"
               :key="index">{{item}}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'

  export default {
    name: "DetailNavBar",
    data() {
      return {
        navList: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    components: {
      NavBar
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index;
      },
      backClick(){
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped>
  .title {
    display: flex;
  }

  .title-item {
    flex: 1;
    font-size: 14px;
  }

  .active {
    color: red;
  }
</style>