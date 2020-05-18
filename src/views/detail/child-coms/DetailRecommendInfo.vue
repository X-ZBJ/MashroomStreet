<template>
  <div class="recommend-info">
    <p class="info-hot">热门推荐</p>
    <div class="goods">
      <GoodsListItem v-for="(item,index) in recommendInfo" :key="index" :goodsItem='item'></GoodsListItem>
    </div>
  </div>
</template>

<script>
import GoodsListItem from '../../../components/content/goods/GoodsListItem'

export default {
  name:'DetailRecommendInfo',
  props:{
    recommendInfo:Array
  },
  components:{
    GoodsListItem
  }
}

</script>
<style scoped>
  .info-hot{
    font-size: 16px;
    line-height: 40px;
    padding-left: 15px;
    color: #333;
  }
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 3px 3px 50px 3px;
  }

</style>