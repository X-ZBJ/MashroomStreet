<template>
  <div id="category">
    <Navbar class="nav-bar">
      <div slot="center">商品分类</div>
    </Navbar>
    <CategoryTypeList :typeList="typeList" @changeType="changeType" class="type-list left"></CategoryTypeList>
    <BScroll class="better-scroll right" ref="scroll">
      <CategoryTypeContent :typeContent="currentContent" class="type-content"></CategoryTypeContent>
      <TabControl :titles="['流行','新款','精选']" class="tab-control" @tabClick="tabClick" v-show="!isTabFixed" ref="tabContent"></TabControl>
      <GoodsList :goods="goods[currentType].list" class="goods"></GoodsList>
    </BScroll>
  </div>
</template>

<script>
import Navbar from '../../components/common/nav-bar/Navbar'
import CategoryTypeList from './child-coms/CategoryTypeList'
import CategoryTypeContent from './child-coms/CategoryTypeContent'
import {getCategoryData,getCategoryCon} from '../../network/category'
import TabControl from '../../components/content/tabControl/TabControl'
import {getHomeGoods} from '../../network/home'
import GoodsList from '../../components/content/goods/GoodsList'

import BScroll from '../../components/common/better-scroll/BetterScroll'


export default {
  name:'Category',
  data(){
    return {
      typeList:[],
      currentMaitKey:3627,
      currentContent:[],
      goods:{
        pop:{page:0,list:[]},
        new:{page:0,list:[]},
        sell:{page:0,list:[]}
      },
      currentType:'pop',
      isTabFixed:false
    }
  },
  components:{
    Navbar,
    CategoryTypeList,
    CategoryTypeContent,
    BScroll,
    TabControl,
    GoodsList
  },
  methods: {
    getCategoryData(){
      getCategoryData().then(res=>{
        this.typeList = res.data.category.list
      })
    },
    getCategoryCon(key){
      getCategoryCon(key).then(res=>{
        console.log(res)
        this.currentContent = res.data.list
      })
    },
    changeType(maitKey){
      this.currentMaitKey = maitKey
      this.getCategoryCon(this.currentMaitKey)
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1;
      getHomeGoods(type,page).then(res=>{
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      }).catch((err)=>{
      })
    },
    tabClick(index){
      switch(index){
        case 0:this.currentType = 'pop'
          break;
        case 1:this.currentType = 'new'
          break;
        case 2:this.currentType = 'sell'
          break;
      }
    },
  },
  created() {
    this.getCategoryData()
    this.getCategoryCon(this.currentMaitKey)
    this.getHomeGoods('pop'),
    this.getHomeGoods('new'),
    this.getHomeGoods('sell')
  },
}
</script>

<style scoped>
  #category{
    height: 100vh;
  }
  .nav-bar{
    background: hotpink;
    text-align: center;
    font-weight: bold;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
  }
  .type-list{
    margin-top: 44px;
  }
  .better-scroll{
    width: 80%;
    margin-top: 44px;
  }
  .tab-control{
    clear: both;
    position: sticky;
    top: 44px;
    z-index: 100;
  }
</style>