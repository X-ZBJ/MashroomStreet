<template>
 <div class="user-mes">
   <div class="money">
     <div class="mes-mon"><span class="num">{{banlance}}</span>元</div>
     <span>我的余额</span>
   </div>
   <div class="sale">
     <div class="mes-sale"><span class="num">{{discounts}}</span>个</div>
     <span>我的优惠</span>
   </div>
   <div class="point">
     <div class="mes-point"><span class="num">{{integral}}</span>分</div>
     <span>我的积分</span>
   </div>
 </div>
</template>

<script>
export default {
  name: "UserMes",
  data() {
    return {
      banlance:'0.00',
      discounts:0,
      integral:0
    }
  },
  methods: {},
};
</script>

<style scoped>
  .user-mes{
    display: flex;
    height: 100px;
    font-size: 12px;
    border-bottom: 15px solid #eee;
  }
  .money,.sale,.point{
    text-align: center;
    flex: 1;
    border-right: 1px solid #ddd;
  }
  .mes-mon,.mes-sale,.mes-point{
    margin-top: 20px;
  }
  .num{
    font-size: 30px;
    color:orange;
    font-weight: 600;
  }
</style>
