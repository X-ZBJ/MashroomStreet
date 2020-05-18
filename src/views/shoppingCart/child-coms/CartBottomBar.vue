<template>
  <div class="bottom-bar">
    <div class="all-check left" @click="allChecked">
      <CheckedButton :isCheck="isCheck"></CheckedButton>
    </div>
    <div class="left bottom-info">
      <span class="all">全选</span>
      <span class="all-price">合计:￥{{allPrice}}</span>
      <span class="right buy">去结算({{cartCount}})</span>
    </div>
    
  </div>
</template>

<script>
import CheckedButton from './CheckedButton'
import { mapGetters } from 'vuex'

export default {
  name:'CartBottomBar',
  components:{
    CheckedButton
  },
  computed: {
    ...mapGetters([
      'cartList'
    ]),
    allPrice(){
      return this.cartList.filter(item=>{
        return item.check
      }).reduce((preVal,item)=>{
        return preVal + item.count*item.price
      },0).toFixed(2)
    },
    cartCount(){
      return this.cartList.filter(item=>{
        return item.check
      }).reduce((preVal,item)=>{
        return preVal + item.count
      },0)
    },
    isCheck(){
      return this.cartList.every(item=>{
        return item.check
      })
    }
  },
  methods: {
    allChecked(){
      if(this.cartList.length !== 0){
        //1.判断是否有未选中的按钮
        let boo = this.cartList.every(item=>item.check)
        //2. 有未被选中的按钮需要进行全部选中操作,没有未被选中全部取消操作
        if(boo){
          this.$store.commit('clearCheck')
        }else{
          this.$store.commit('allCheck')
        }
      }
    }
  },
}
</script>

<style scoped>
  .bottom-bar{
    width: 100%;
    height: 44px;
    background: #ddd;
    position: fixed;
    bottom: 50px;
    left: 0;
  }
  .all-check{
    width: 10%;
    position: relative;
    top: 12px;
    padding-left: 10px;
  }
  .bottom-info{
    width: 90%;
  }
  .all{
    margin-right: 25px;
  }
  span{
    line-height: 44px;
  }
  .all-price{
    font-size: 18px;
  }
  .buy{
    width: 100px;
    height: 44px;
    background: #FF4500;
    color: #FFF;
    text-align: center;
  }

</style>