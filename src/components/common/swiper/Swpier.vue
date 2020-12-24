<template>
  <swiper
          :slides-per-view="1"
          :space-between="50"
          navigation
          :pagination="{ clickable: true }"
          :scrollbar="{ draggable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(item,index) in banners" :key="item.index">
      <img style="width: 100%"
           :src="item.image"
           alt="">
    </swiper-slide>
  </swiper>
</template>

<script>
  import SwiperCore, {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
  import {Swiper, SwiperSlide} from 'swiper/vue';
  import 'swiper/swiper.min.css'
  import 'swiper/components/pagination/pagination.min.css'

  SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
  export default {
    name: "Swpier",
    data() {
      return {
      }
    },
    components: {
      Swiper,
      SwiperSlide,
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
      onSlideChange(e) {//滑动监听
        // console.log('slide change')
      },
    }
  }
</script>

<style scoped>

</style>