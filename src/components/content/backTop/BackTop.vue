<template>
  <div class="back-top">
    <img src="@/assets/img/backTop/top.svg" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop",
    methods:{
    }
  }
</script>

<style scoped>
  .back-top{
    z-index: 3;
  }
  .back-top img{
    position: fixed;
    right: 10px;
    bottom: 60px;
    width: 40px;
  }
</style>