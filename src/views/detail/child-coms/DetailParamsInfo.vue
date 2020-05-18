<template>
  <div class="params-info" v-if="Object.keys(paramsInfo).length !== 0">
    <table v-for="(item,index) in paramsInfo.size" :key="index" class="info-size"> 
      <tr v-for="(tr,index1) in item" :key="index1">
        <td v-for="(td,index2) in tr" :key="index2">
          {{td}}
        </td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(item,index) in paramsInfo.info" :key="index">
        <td class="param-key">{{item.key}}</td>
        <td class="param-value">{{item.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramsInfo.img.length!==0">
      <img :src="paramsInfo.img" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props:{
    paramsInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}

</script>
<style scoped>
  .info-size{
    width: 100%;
    line-height: 25px;
  }
  .info-param{
    margin-top: 20px;
  }
  .info-param td{
    height: 25px;
    line-height: 25px;
    overflow: hidden;
  }
  .param-key{
    width: 40px;
  }
  .param-value{
    padding-left: 16px;
    color: coral;
  }
  .info-img img{
    width: 100%;
  }
</style>