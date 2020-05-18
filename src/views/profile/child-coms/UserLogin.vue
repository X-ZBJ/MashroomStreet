<template>
 <div class="user-login">
   <div class="login-left">
    <img src="../../../assets/img/user/user.jpg" alt="">
   </div>
   <div class="login-center"><div>登录/注册</div><div><span class="phone"></span>暂无绑定手机号</div></div>
   <div class="login-right"><span></span></div>
 </div>
</template>

<script>
export default {
  name: "UserLogin"
};
</script>

<style scoped>
.user-login{
  padding:10px;
  display: flex;
  height: 100px;
  background-color: hotpink;
  color: #fff;
}
.login-left img{
  width: 60px;
  margin-right: 10px;
  margin-top: 10px;
}
.phone{
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url('../../../assets/img/user/phone.png');
  background-size: cover;
  vertical-align: middle;
}
.login-center{
  flex: 1;
  padding-top: 15px;
  line-height: 25px;
  font-size: 14px;
}
.login-right{
  flex: 1;
  position: relative;
}
.login-right span{
  position: absolute;
  top: 40%;
  right: 20px;
  display: inline-block;
  width: 15px;
  height: 15px;
  border: transparent;
  border-right: 2px solid #fff;
  border-top: 2px solid #fff;
  transform: rotate(45deg);
}
</style>
