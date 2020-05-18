<template>
  <div class="comment-info">
    <div class="comment-top">
        <div class="top-title">用户评论</div>
        <div class="top-more">更多</div>
    </div>
    <div class="info-user">
      <img :src="userLogo" alt="" class="userLogo">
      <span class="username">{{username}}</span>
    </div>
    <div class="info-detail">
      <p class="comment-content">{{commentInfo.content}}</p>
      <div class="info-other">
        <span>{{commentInfo.created | showData}}</span>
        <span class="other-style">{{commentInfo.style}}</span>
      </div>
    </div>
    <div class="info-imgs">
      <img :src="item" alt="" v-for="(item,index) in commentInfo.images" :key="index">
    </div>
  </div>
</template>

<script>
import {dateFormat} from '../../../commont/data'
export default {
  name:'DetailCommentInfo',
  data(){
    return {
      userLogo:'',
      username:''
    }
  },
  props:{
    commentInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters:{
    showData(value){
      return dateFormat(new Date(value*1000),'yyyy-MM-dd')
    }
  },
  watch:{
    commentInfo(){
      this.userLogo = this.commentInfo.user.avatar
      this.username = this.commentInfo.user.uname
    }
  }
}

</script>
<style scoped>
  .comment-top{
    display: flex;
    justify-content: space-between;
  }
  .top-more{
    font-size: 14px;
  }
  .userLogo{
    width: 50px;
    vertical-align: middle;
  }
  .username{
    vertical-align: middle;
    margin-left: 20px;
    font-size: 14px;
  }
  .comment-content{
    text-indent: 2em;
    line-height: 20px;
    padding: 5px;
  }
  .info-other{
    font-size: 12px;
    padding: 5px;
    color: #999;
  }
  .other-style{
    margin-left: 15px;
  }
  .info-imgs img{
    width: 50px;
    height: 50px;
  }
</style>