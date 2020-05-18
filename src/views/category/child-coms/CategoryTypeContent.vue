<template>
  <div class="type-con">
    <div v-for="(item,index) in typeContent" :key="index" class="type">
      <img :src="item.image" alt="" class="con-img">
      <p class="con-title">{{item.title}}</p>
    </div>
  </div>
</template>

<script>
import BScroll from '../../../components/common/better-scroll/BetterScroll'
export default {
  name:'CategoryTypeContent',
  props:{
    typeContent:Array
  },
  components:{
    BScroll
  }
}
</script>

<style scoped>
  .type-con{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 20px;
  }
  .type{
    width: 30%;
    margin: 3px;
  }
  .con-img{
    width: 100%;
  }
  .con-title{
    text-align: center;
    font-size: 14px;
  }
  
</style>