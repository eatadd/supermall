<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor='red'>
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/home.svg" alt="">
      </template>
      <template v-slot:item-icon-act>
        <img src="@/assets/img/tabbar/homeact.svg" alt="">
      </template>
      <template v-slot:item-text>
        <div>首页</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor='red'>
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/classify.svg" alt="">
      </template>
      <template v-slot:item-icon-act>
        <img src="@/assets/img/tabbar/classifyact.svg" alt="">
      </template>
      <template v-slot:item-text>
        <div>分类</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/Cart" activeColor='red'>
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/shop.svg" alt="">
      </template>
      <template v-slot:item-icon-act>
        <img src="@/assets/img/tabbar/shopact.svg" alt="">
      </template>
      <template v-slot:item-text>
        <div>购物车</div>
      </template>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor='red'>
      <template v-slot:item-icon>
        <img src="@/assets/img/tabbar/user.svg" alt="">
      </template>
      <template v-slot:item-icon-act>
        <img src="@/assets/img/tabbar/useract.svg" alt="">
      </template>
      <template v-slot:item-text>
        <div>我的</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from '@/components/common/tabbar/TabBar'
  import TabBarItem from '@/components/common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
  .tab-bar-item img {
    width: 22px;
    margin-top: 5px;
    height: 20px;
  }
</style>