<template>
  <div>
    <div class="outside">
      <img :src="item.image" v-show="index===activeIndex" v-for="(item, index) in banners" :key="index">
      <ul class="picture">
        <li v-for="(item, index) in banners" :key="index" :class="{active:index===activeIndex}">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        activeIndex: 0,
      }
    },
    components: {},
    mounted() {
      setInterval(() => {
        this.activeIndex++;
        if (this.activeIndex === this.banners.length) this.activeIndex = 0;
      }, 2000);
    },
    methods: {}
  }
</script>

<style>
  .outside {
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: center;
    min-height: 130px;
  }

  .outside img {
    width: 100%;
  }

  .picture {
    display: flex;
    position: absolute;
    bottom: 10px;
    list-style: none;
  }

  .picture li {
    width: 12px;
    height: 12px;
    background-color: #ccc;
    border-radius: 50%;
    margin: 0 10px;
  }

  .picture li.active {
    background-color: #ffffff;
  }
</style>
