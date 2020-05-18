<template>
  <div class="cart">
    <nav-bar class="nav">
      <div slot="center">
        购物车({{length}})
      </div>
    </nav-bar>
    <Bscroll class="content" :click="true">
      <CartList></CartList>
    </Bscroll>
    <CartBottomBar></CartBottomBar>
  </div>
</template>

<script>
import NavBar from '../../components/common/nav-bar/Navbar'
import Bscroll from '../../components/common/better-scroll/BetterScroll'

import CartList from './child-coms/CartList'
import CartBottomBar from './child-coms/CartBottomBar'

import {mapGetters} from 'vuex'

export default {
  name:'Cart',
  components:{
    NavBar,
    CartList,
    CartBottomBar,
    Bscroll
  },
  computed:{
    // ...mapGetters([
    //   'cartLength',
    //   'cartList'
    // ])
    ...mapGetters({
      length:'cartLength',
      list:'cartList'
    })
  },
  
}
</script>

<style scoped>
  .nav{
    background: hotpink;
    color: #FFF;
    text-align: center;
  }
  .cart{
    height: 100vh;
  }
  .content{
    height: calc(100% - 140px);
  }
</style>