<template>
  <div id="profile">
    <Navbar class="nav-bar">
      <div slot="center">商城</div>
    </Navbar>
    <UserLogin></UserLogin>
    <UserMes></UserMes>
    <UserList></UserList>
  </div>
  
</template>

<script>
import Navbar from '../../components/common/nav-bar/Navbar'
import UserLogin from './child-coms/UserLogin'
import UserMes from './child-coms/UserMes'
import UserList from './child-coms/UserList'

export default {
  name:'Profile',
  components:{
    Navbar,
    UserLogin,
    UserMes,
    UserList
  }
}

</script>
<style scoped>
  .nav-bar{
    background: hotpink;
    text-align: center;
    font-weight: bold;
    color: white;
  }
</style>