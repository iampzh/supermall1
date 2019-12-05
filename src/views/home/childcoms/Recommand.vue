<template>
  <div class="recommand">
      <div v-for="item in recommands" :key="item.id">
          <a :href="item.link">
              <img :src="item.imgpath" >
              {{item.title}}
          </a>
      </div>

  </div>
</template>

<script>
export default {
name:"RecommandView",
props:{
   recommands:{
       type:Array,
       default(){
           return [];
       }
   }
}
}
</script>

<style>
.recommand{
    width: 100%
}
</style>