<template>
  <div>
    <Swiper>
    <SwiperItem v-for="item in banner" :key="item.id">
   <a href="#">
     <img :src="item.pathimg" width="100%">
   </a>
    </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper"
export default {
name:"SwiperCom",
components:{
    Swiper,
    SwiperItem,
},
props:{
    banner:{
        type:Array,
        default(){
            return []
        }
    }
}

}
</script>

<style>

</style>