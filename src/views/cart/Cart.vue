<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <template v-slot:center>
        <div>购物车({{cartLength}})</div>
      </template>
    </nav-bar>
    <p v-for="(item,index) in $store.state.cartList" :key="index">
      <span>{{item.iid}}</span>-------
      <span>{{item.count}}</span>
    </p>
  </div>
</template>

<script>

  import NavBar from '@/components/common/navbar/NavBar'
  import { mapGetters } from 'vuex'

  export default {
    name: "Cart",
    components: {
      NavBar,
    },
    computed: {
      ...mapGetters(['cartLength'])
    }
  }
</script>

<style scoped>
  .nav-bar {
    background: var(--backgroundcolor);
    color: #FFF;
  }
</style>