<template>
  <div class="swiper-slide">
    1
  </div>
</template>

<script>

  export default {
    name: "Swpier",
    data() {
      return {}
    },
    computed: {},
    mounted() {

    },
    components: {
    },
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      onSwiper(swiper) {
        console.log(swiper)
      },
      onSlideChange() {
        console.log('slide change')
      },
    }
  }
</script>

<style scoped>
  .swiper-slide img {
    width: 100%;
  }
</style>