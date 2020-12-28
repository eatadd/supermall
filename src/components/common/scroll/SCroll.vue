<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Bscroll from 'better-scroll'

  export default {
    name: "SCroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        scroll: null,
        aaa: '111'
      }
    },
    components: {},
    mounted() {
      this.scroll = new Bscroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType
      });
      this.scroll.on('scroll', (position) => {
        // console.log(position);
        this.$emit('scroll', position)
      })
    },
    methods: {
      scrollTo(x = 0, y = 0, time = 500) {
        this.scroll.scrollTo(x, y, time)
      }
    }
  }
</script>

<style scoped>

</style>