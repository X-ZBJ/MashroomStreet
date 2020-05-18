<template>
  <div id="detail">
    <!-- 创建顶部导航 -->
    <DetailNavBar @titleClick="titleClick" ref="nav"></DetailNavBar>
    <BScroll class="content" ref="scroll" @bsscroll="bScroll" :probeType="3">
      <!-- 创建轮播图展示  -->
      <DetailSwiper :top-images="topImages"></DetailSwiper>
      <!-- 商品基本信息展示  -->
      <DetailBaseInfo :goods="goodsInfo"></DetailBaseInfo>
      <!-- 商家基本信息展示  -->
      <DetailShopInfo :shop="shopInfo"></DetailShopInfo>
      <!-- 商品详情展示 -->
      <DetailGoodsInfo :detail-info="detailInfo" @imageLoad="imageLoad"></DetailGoodsInfo>
      <!-- 商品参数信息展示  -->
      <DetailParamsInfo :params-info="paramsInfo" ref="goods"></DetailParamsInfo>
      <!-- 评论信息展示 -->
      <DetailCommentInfo :commentInfo="comment" ref="comment"></DetailCommentInfo>
      <!-- 热门推荐展示 -->
      <DetailRecommendInfo :recommendInfo="recommendInfo" ref="recommend"></DetailRecommendInfo>
    </BScroll>
    <!-- 底部导航 -->
    <DetailBottomBar @addCart="addCart"></DetailBottomBar>
    <BackTop v-show="isShowTop" @click.native="backTop"></BackTop>
  </div>
</template>

<script>
import BScroll from '../../components/common/better-scroll/BetterScroll'

import {getDetailData,GoodsInfo,GoodsParams,getRecommendData} from '../../network/detail'
import DetailNavBar from './child-coms/DetailNavBar'
import DetailSwiper from './child-coms/DetailSwiper'
import DetailBaseInfo from './child-coms/DetailBaseInfo'
import DetailShopInfo from './child-coms/DetailShopInfo'
import DetailGoodsInfo from './child-coms/DetailGoodsInfo'
import DetailParamsInfo from './child-coms/DetailParamsInfo'
import DetailCommentInfo from './child-coms/DetailCommentInfo'
import DetailRecommendInfo from './child-coms/DetailRecommendInfo'
import DetailBottomBar from './child-coms/DetailBottomBar'
import {debounce} from '../../commont/fangdou'
import {backTopMixin} from '../../commont/mixin'

export default {
  name:'Detail',
  data(){
    return {
      iid:null,
      topImages:[],
      goodsInfo:{},
      shopInfo:{},
      detailInfo:{},
      paramsInfo:{},
      comment:{},
      recommendInfo:[],
      positionY:[],
      getPositionY:null,
      currentIndex:0
    }
  },
  mixins:[backTopMixin],
  components:{
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    DetailRecommendInfo,
    BScroll,
    DetailBottomBar
  },
  created(){
    this.iid = this.$route.params.id
    //请求详情页基本数据
    getDetailData(this.iid).then(res=>{
      console.log(res)
      let data = res.result
      //获取轮播图数据
      this.topImages = data.itemInfo.topImages
      // 获取商品信息
      this.goodsInfo = new GoodsInfo(data.columns,data.itemInfo,data.shopInfo)
      //获取商家信息
      this.shopInfo = data.shopInfo;
      //获取商品详情展示
      this.detailInfo = data.detailInfo;
      //获取商品参数信息
      this.paramsInfo = new GoodsParams(data.itemParams.info,data.itemParams.rule)
      //获取评论数据
      if(data.rate.list){
        this.comment = data.rate.list[0]
      }
    })
    //请求热门推荐数据
    getRecommendData().then(res=>{
      this.recommendInfo = res.data.list
    })
    this.getPositionY = debounce(()=>{
      this.positionY = []
      this.positionY.push(0)
      this.positionY.push(-this.$refs.goods.$el.offsetTop+44)
      this.positionY.push(-this.$refs.comment.$el.offsetTop+44)
      this.positionY.push(-this.$refs.recommend.$el.offsetTop+44)
    },300)
  },
  methods: {
    imageLoad(){
      this.$refs.scroll.bs.refresh()
      this.getPositionY()
    },
    titleClick(index){
      console.log(this.positionY[index])
      this.$refs.scroll.bs.scrollTo(0,this.positionY[index],1000)
    },
    bScroll(position){
      let y = position.y
      for(let i in this.positionY){
        if(this.currentIndex !== i && (y <= this.positionY[+i] && y > this.positionY[+i+1] && i < this.positionY.length - 1 || i == this.positionY.length - 1 && y <= this.positionY[i])){
          // console.log(i)
          this.currentIndex = i
          this.$refs.nav.currentIndex = i
        }
      }
      this.getBackTopShow(position)
    },
    addCart(){
      // 获取购物车需要展示的信息
      let cartInfo = {}
      cartInfo.img = this.topImages[0]
      cartInfo.title = this.goodsInfo.title
      cartInfo.desc = this.goodsInfo.desc
      cartInfo.price = this.goodsInfo.highNowPrice
      cartInfo.iid = this.iid
      //将商品加入到购物车
      this.$store.dispatch('addCart',cartInfo)
    }
  },
}

</script>

<style scoped>
  #detail{
    height: 100vh;
    position: relative;
    z-index: 100;
    background: #FFF;
    padding-top: 44px;
  }
  .content{
    height: calc(100% - 94px);
  }
</style>