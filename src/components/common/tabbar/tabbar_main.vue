<template>
<div id="app">
  <div id="tab_bar">
    <!--   <div class="tabbar-item"><div><img src="../../assets/img/tabbar/home.svg"></div>首页</div>
      <div class="tabbar-item"><div><img src="../../assets/img/tabbar/category.svg"></div>详情</div>
      <div class="tabbar-item"><div><img src="../../assets/img/tabbar/shopcart.svg"></div>购物车</div>
      <div class="tabbar-item"><div><img src="../../assets/img/tabbar/profile.svg"></div>我的</div>-->
       <slot></slot>
  </div> 
 
  </div>
</template>

<script>
export default {
name:"cmain"
}
</script>

<style>
#tab_bar{
    display: flex;
    background: #cccccc;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -3px 1px rgba(100, 100, 100, .5);
    
}

</style>