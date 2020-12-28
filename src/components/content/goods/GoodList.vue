<template>
  <div class="goods">
    <good-list-item class="goods-item" :goodsItem="item" v-for="item in goods"></good-list-item>
    <div class="clear"></div>
  </div>
</template>

<script>
  import GoodListItem from './GoodListItem'
  export default {
    name: "GoodList",
    components:{
      GoodListItem
    },
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .goods{
    background: #FFF;
    margin-bottom: 50px;
    padding: 0 5px;
  }
  .goods-item{
    width: calc(50% - 10px);
    float: left;
    padding: 5px;
  }
  .clear{
    clear: both;
  }
</style>