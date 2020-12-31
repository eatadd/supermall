<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :banners="banners"></detail-swiper>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'

  import {getDetail} from '@/network/detail'

  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        banners: []
      }
    },
    components: {
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

</style>