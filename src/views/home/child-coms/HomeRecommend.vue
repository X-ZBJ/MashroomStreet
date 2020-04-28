<template>
  <div class="home-recommend">
    <div v-for="(item,index) in recommend" :key="index" class="recommend-item">
      <img :src="item.image" alt="">
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    recommend:{
      typr:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
  .home-recommend{
    width: 100%;
    display: flex;
    text-align: center;
    font-size: 1px;
    padding: 10px 0 20px;
    border-bottom: 10px #CCC solid;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    width: 60px;
  }
</style>
