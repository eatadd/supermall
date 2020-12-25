<template>
  <div>
    <p>{{dKeyword.currentTime}}</p>
  </div>
</template>

<script>
  export default {
    name: "FeatureView",
    props:{
      dKeyword:{
        type: Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  img{
    width: 100%;
  }
</style>