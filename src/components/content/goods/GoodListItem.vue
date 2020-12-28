<template>
  <div class="goods-item">
    <div class="goods-item-img">
      <img :src="goodsItem.show.img" alt="">
    </div>
    <div class="goods-info">
      <p>
        {{goodsItem.title}}
      </p>
      <span class="price">{{goodsItem.price}}</span> --
      <span class="collect">收藏: {{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .goods-item {
    padding-bottom: 10px;
  }
  .goods-item-img{
    height: 220px;
    border-radius: 4px;
    overflow: hidden;
  }
  .goods-item img{
    border-radius: 4px;
    width: 100%;
  }
  .goods-info{
    font-size: 12px;
    overflow: hidden;
  }
  .goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .price{
    color: pink;
  }
</style>