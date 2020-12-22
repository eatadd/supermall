<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-act"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {
        name: 'zq'
      }
    },
    methods: {
      itemclick() {
        this.$router.push(this.path);
      }
    },
    computed: {
      isActive() {
        return this.$route.path == this.path
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    }
  }
</script>

<style scoped>
  #tab-bar {
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, .1);
  }

  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    background: #f6f6f6;
    font-size: 12px;
    color: #666;
  }

  .tab-bar-item img {
    width: 22px;
    margin-top: 5px;
    height: 20px;
  }

  .active {
    /*color: red;*/
  }
</style>