<template>
  <nav-bar class="home-nav">
    <template v-slot:center>
      <div>购物街</div>
    </template>
  </nav-bar>
</template>

<script>
  import NavBar from '@/components/common/navbar/NavBar'
  import {getHomeMultidata} from "@/network/home";

  export default {
    name: "Home",
    components: {
      NavBar
    },
    data(){
      return {
        banners: [],
        recommend:[]
      }
    },
    created() {
      getHomeMultidata().then(res=>{
        console.log(res);
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