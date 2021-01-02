<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="detail-scroll">
      <detail-swiper :banners="banners"></detail-swiper>
      <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>1
    </scroll>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'

  import {getDetail} from '@/network/detail'
  import Scroll from "@/components/common/scroll/SCroll";

  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        banners: []
      }
    },
    components: {
      Scroll,
      DetailNavBar,
      DetailSwiper
    },
    created() {
      this.iid = this.$route.params.iid;
      getDetail(this.iid).then(res => {
        // console.log(res);
        this.banners = res.result.itemInfo.topImages
      }).catch(err => {
        console.log(err);
      })
    },
    mounted() {
    }
  }
</script>

<style scoped>
  .detail-nav {
    position: relative;
    z-index: 3;
    background-color: #fff;
  }

  .detail-scroll {
    height: calc(100vh - 44px);
  }
</style>