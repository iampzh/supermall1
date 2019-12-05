<template>
<div id="home">
 <NavBar  id="navbar_slot"><div slot="center">购物街</div></NavBar>
  <SwiperCom :banner="banner"></SwiperCom>
  <RecommandView :recommands="recommands"></RecommandView>
</div>

</template>

<script>
import NavBar from "components/common/navbar/navbar.vue"
import {getHomeBannerDate,getHomeRecommands} from "network/home_net.js"
import SwiperCom from "./childcoms/swipercom"
import RecommandView from "./childcoms/Recommand"
export default {
name:"home",
components:{
  NavBar,
  SwiperCom,
  RecommandView
  
},
data(){
 return{
banner:[],
recommands:[]
 }
},
created(){
getHomeBannerDate().then(res=>{
this.banner=res.data;

}),

getHomeRecommands().then(res=>{
  this.recommands=res.data;
})
},
}
</script>

<style>
#navbar_slot{
  background-color: deeppink;
  color: black;
  display: flex;
  top: 0;
  left:0;
  right:0;
  z-index: 9;

}
</style>