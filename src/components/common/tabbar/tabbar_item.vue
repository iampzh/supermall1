<template>
  
      <!-- <div class="tabbar-item"><div><img src="../../assets/img/tabbar/home.svg"></div>首页</div> -->
     <div class="tabbar-item" @click="itemClick">
         <!-- <img src="../../assets/img/tabbar/home.svg" alt="">
       <div>首页</div>   -->
       <div v-if="!isActive">
            <slot name="item_icon"></slot>
       </div>
      <div v-else>
           <slot name="item_active_icon"></slot>
      </div>
      <div :style="activeStyle">
           <slot name="item_text"></slot>
      </div>
     
         </div>
 
 
</template>

<script>
export default {
name:"tabbar_item",
props:{
    path:String,
    activeColor:{
        type:String,
        default:"red"
    }
},
computed:{
    isActive(){
       // return this.$route.path.indexOf(this.path)
       return this.$route.path==this.path
    },
    activeStyle(){
        return this.isActive?{color:this.activeColor}:{}
    }
},
data(){
    return{
        // isActive:false,
        
    }
},
methods:{
    itemClick(){
       // this.$router.replace(this.path)
       // alert(this.path)
         this.$router.replace(this.path)
    }
}
}
</script>

<style>
.tabbar-item{
    flex: 1;
    text-align: center;
    height: 49px;
}
.tabbar-item img{
    width: 24px;
    height: 24px;
}
/* .active{
    color: red
} */
</style>