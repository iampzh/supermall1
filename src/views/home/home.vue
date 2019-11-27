<template>
<div id="home">
 <NavBar  id="navbar_slot"><div slot="center">购物街</div></NavBar>
  <div>首页</div>
</div>

</template>

<script>
import NavBar from "components/common/navbar/navbar.vue"
export default {
name:"home",
components:{
  NavBar
}
}
</script>

<style>
#navbar_slot{
  background-color: deeppink;
  color: black;
}
</style>