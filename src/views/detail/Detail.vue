<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav"></detail-nav-bar>
    <scroll class="detail-scroll">
      <detail-swiper :banners="banners"></detail-swiper>
      <p>{{itemInfo.title}}</p>
      {{$store.state.cartList}}
      <button @click="addToCart">添加到购物车</button>
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
        banners: [],
        itemInfo: {}
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
        // console.log(JSON.stringify(res.result.itemInfo));
        this.itemInfo = res.result.itemInfo;
        this.banners = res.result.itemInfo.topImages;
      }).catch(err => {
        console.log(err);
      })
    },
    mounted() {
    },
    methods: {
      addToCart() {
        let itemItem = {};
        itemItem.iid = this.itemInfo.iid;
        this.$store.commit('addCart', itemItem)
      }
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