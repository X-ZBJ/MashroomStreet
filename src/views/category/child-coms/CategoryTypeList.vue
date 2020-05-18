<template>
  <div class="type-list">
    <BScroll class="content" :click="true">
      <ul>
        <li class="type" v-for="(item,index) in typeList" :key="index" @click="changeActive(index)" :class="{active:currentIndex == index}">{{item.title}}</li>
      </ul>
    </BScroll>
  </div>
</template>

<script>
import BScroll from '../../../components/common/better-scroll/BetterScroll'
export default {
  name:'CategoryTypeList',
  components:{
    BScroll
  },
  data(){ 
    return {
      currentIndex:0
    }
  },
  props:{
    typeList:Array
  },
  methods: {
    changeActive(index){
      this.currentIndex = index
      this.$emit('changeType',this.typeList[index].maitKey)
    }
  },

}
</script>

<style scoped>
  .type{
    line-height: 50px;
    font-size: 14px;
    text-align: center;
    background: #eee;
    border-left: 2px solid #eee;
  }
  .active{
    background: #fff;
    color: hotpink;
    border-left: 2px solid hotpink;
  }
  .type-list{
    height: 100vh;
  }
  .content{
    height: calc(100% - 93px);
  }
</style>