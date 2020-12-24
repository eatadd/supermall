<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div>
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>首页</div>
      </template>
    </nav-bar>
    <swiper :banners="banners"></swiper>
  </div>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  import {getHomeMultidata} from "@/network/home";
  import Swiper from '@/components/common/swiper/Swpier'

  export default {
    name: "Home",
    components: {
      NavBar,
      Swiper
    },
    data() {
      return {
        banners: null,
        recommend: null,
      }
    },
    methods: {},
    created() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  .home-nav {
    background: var(--color);
    color: #FFF;
  }
</style>