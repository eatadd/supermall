<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar {
    max-width: 768px;
    margin: 0 auto;
    display: flex;
    line-height: 44px;
    box-shadow: 0 1px 10px rgba(100,100,100,.1);
  }

  .left, .right {
    width: 60px;
    text-align: center;
  }
  .center{
    flex: 1;
    text-align: center;
  }
</style>