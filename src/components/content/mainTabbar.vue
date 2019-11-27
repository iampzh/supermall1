<template>
   <cmain>
      <!-- <div id="tab_bar">
      <div class="tabbar-item"><div><img src="./assets/img/tabbar/home.svg"></div>首页</div>
      <div class="tabbar-item"><div><img src="./assets/img/tabbar/category.svg"></div>详情</div>
      <div class="tabbar-item"><div><img src="./assets/img/tabbar/shopcart.svg"></div>购物车</div>
      <div class="tabbar-item"><div><img src="./assets/img/tabbar/profile.svg"></div>我的</div>
      </div>-->
      <tabbar_item path="/home" activeColor="blue">
        <img src="~assets/img/tabbar/home.svg" alt slot="item_icon" />

        <img src="~assets/img/tabbar/home_active.svg" alt slot="item_active_icon" />

        <div slot="item_text">首页</div>
      </tabbar_item>
      <tabbar_item path="/category">
        <img src="~assets/img/tabbar/category.svg" alt slot="item_icon" />
        <img src="~assets/img/tabbar/category_active.svg" alt slot="item_active_icon" />
        <div slot="item_text">详情</div>
      </tabbar_item>
      <tabbar_item path="/shopcart">
        <img src="~assets/img/tabbar/shopcart.svg" alt slot="item_icon" />
        <img src="~assets/img/tabbar/shopcart_active.svg" alt slot="item_active_icon" />
        <div slot="item_text">购物车</div>
      </tabbar_item>
      <tabbar_item path="/profile">
        <img src="~assets/img/tabbar/profile.svg" alt slot="item_icon" />
        <img src="~assets/img/tabbar/profile_active.svg" alt slot="item_active_icon" />
        <div slot="item_text">我的</div>
      </tabbar_item>
    </cmain>
</template>

<script>
import cmain from "../common/tabbar/tabbar_main";
import tabbar_item from "../common/tabbar/tabbar_item";
export default {
name:"mainTabbar",
components:{
    cmain,
    tabbar_item
}
}
</script>

<style>

</style>