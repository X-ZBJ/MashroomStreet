<template>
  <div class="shop-info">
    <!-- 店铺名称及图标 -->
    <div class="shop-top">
      <img :src="shop.shopLogo" alt="">
      <span class="shop-title">{{shop.name}}</span>
    </div>
    <!-- 店铺详情 -->
    <div class="shop-middle">
      <div class="shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{shop.cSells | sellsFilter}}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-all">
          <div class="all-count">
            {{shop.cGoods}}
          </div>
          <div class="all-text">
            全部宝贝
          </div>
        </div>
      </div>
      <div class="shop-middle-right">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="score" :class="{'score-more':item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{'better-more':item.isBetter}">{{item.isBetter?'高':'低'}}</td>
          </tr>
        </table>
      </div>
      
    </div>
    <div class="shop-bottom">
      <div>
        进店逛逛
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailShopInfo',
  props:{
    shop:{
      type:Object
    }
  },
  filters:{
    sellsFilter(value){
      return value<10000?value:(value/10000).toFixed(1)+'万'
    }
  }
}

</script>

<style scoped>
  .shop-title{
    vertical-align: middle;
    margin-left: 20px;
  }
   .shop-top img{
    margin-left: 20px;
    width: 50px;
    vertical-align: middle;
  }
  .shop-middle{
    margin-top: 15px;
    display: flex;
    justify-content: space-around;
  }
  .shop-middle-left{
    display: flex;
    line-height: 30px;
    text-align: center;
    border-right: 1px solid #CCC;
    padding-right: 20px;
  }
  .sells-count,.all-count{
    font-size: 20px;
  }
  .sells-text,.all-text{
    font-size: 14px;
  }
  .info-sells{
    margin-right: 20px;
  }
  .better{
    background: crimson;
    color: #FFF;
  }
  .better-more{
    background: chartreuse;
  }
  .score{
    color: crimson;
  }
  .score-more{
    color: chartreuse;
  }
  .shop-bottom{
    padding-bottom: 20px;
  }
  .shop-bottom div{
    background: #CCC;
    color: rgb(80, 68, 68);
    width: 30%;
    text-align: center;
    margin: auto;
    margin-top: 20px;
    padding: 5px;
    text-decoration: underline;
  }
</style>