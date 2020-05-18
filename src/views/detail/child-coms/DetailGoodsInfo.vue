<template>
  <div class="goods-info" v-if='Object.keys(detailInfo).length !== 0'>
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">
      {{detailInfo.detailImage[0].key}}
    </div>
    <div class="info-list">
      <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" :src="item" alt="" @load="imageLoad">
    </div>
  </div>

</template>

<script>
export default {
  name:'DetailGoodsInfo',
  data(){
    return {
      imageLength:0,
      num:0
    }
  },
  props:{
    detailInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    imageLoad(){
      this.num++
      if(this.num == this.imageLength){
        this.$emit('imageLoad')
      }
    }
  },
  watch:{
    detailInfo(){
      this.imageLength = this.detailInfo.detailImage[0].list.length
    }
  }

}
</script>

<style scoped>
  .info-desc{
    padding: 5px;
    font-size: 14px;
  }
  .info-list img{
    width: 100%;
  }
</style>