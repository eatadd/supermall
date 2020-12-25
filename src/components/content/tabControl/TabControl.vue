<template>
  <div class="tab-control">
    <div class="tab-control-item"
         v-for="(item,index) in titles"
         :key="index"
         @click="itemClick(index)"
         :class="{active: index == currentIndex}">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentIndex: 0
      }
    },
    created() {
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index;
      }
    }
  }
</script>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
    background: #FFF;
  }

  .tab-control-item {
    line-height: 40px;
    height: 40px;
    flex: 1;
    border-bottom: 1px solid #FFF;
  }

  .tab-control-item span {
    color: #666;
    padding: 8px;
  }

  .active {
  }
  .active span{
    color: red!important;
    border-bottom: 2px solid red;
  }
</style>