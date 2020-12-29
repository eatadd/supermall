<template>
  <div id="tab-bar">
    <slot class="tab-bar"></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tab-bar {
    max-width: 768px;
    margin: 0 auto;
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .1);
  }
</style>