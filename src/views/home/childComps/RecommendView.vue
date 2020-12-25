<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    margin-bottom: 10px;
  }

  .recommend-item {
    background: #FFF;
    padding: 5px;
    font-size: 12px;
    flex: 1;
    text-align: center;
  }
  .recommend-item img{
    margin-bottom: 5px;
    width: 70%;
  }
</style>