<script setup lang="ts">
import { onMounted, ref, type Ref } from "vue";
import layoutHeader from "./layoutHeader.vue";
import layoutMain from "./layoutMain.vue";
import layoutFooter from "./layoutFooter.vue";
import {menu} from "../router/menu";
import { RouterLink } from "vue-router";

const isPhoneOrNot = ref(false);
const isPhone = () => {
  if (
    navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  ) {
    console.log("移动端");
    isPhoneOrNot.value = true;
    return true;
  } else {
    console.log("pc端");
    isPhoneOrNot.value = false;

    return false;
  }
};
onMounted(() => {
  isPhone();
});

const activeRouter: Ref<string | undefined> = ref("/");
let routerList: string[] = menu.map((x) => x.url);
routerList.shift();
const t = routerList.find((item) => window.location.href.includes(item));
console.log(t, "t");
activeRouter.value = t || "/";
function selectClick(index: any) {
  activeRouter.value = index;
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="272px" v-if="!isPhoneOrNot">
        <div class="logo-class"></div>
        <el-menu
          class="el-menu-vertical-demo"
          background-color="transparent"
          text-color="#fff"
          active-text-color="#298DF9"
          @select="selectClick"
          router
          :default-active="activeRouter"
        >
          <RouterLink
            v-for="(item, index) in menu"
            :key="'menu' + index"
            :to="item.url"
          >
            <el-menu-item :index="item.url">
              <span :class="`icon icon-1 icon-${index + 1}`"></span>
              <span slot="title">{{ item.title }}</span>
            </el-menu-item>
          </RouterLink>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header
          ><layout-header :isPhoneOrNot="isPhoneOrNot"></layout-header
        ></el-header>
        <el-main><layout-main></layout-main></el-main>
        <!-- <el-footer><layout-footer></layout-footer></el-footer> -->
      </el-container>
    </el-container>
  </div>
</template>
<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}
.common-layout {
  height: 100vh;
}
.el-main {
  padding: 0;
}
.el-container {
  overflow: hidden;
}
.el-container.is-vertical {
  height: 100%;
}
.nav-class {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
}
.nav-class a {
  min-height: 35px;
  line-height: 35px;
  color: #fff;
}
.nav-class a:hover {
  color: rgb(151, 219, 50);
}
.nav-class a:focus {
  color: rgb(151, 219, 50);
}

.el-aside {
  background-color: #1f263e;
}

.el-container {
  height: 100%;
  width: 100%;
}
.logo-class {
  font-size: 30px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #ffffff;
  width: 100%;
  height: 88px;
  background: url(@/assets/images/logo.png) center no-repeat;
  border-bottom: 1px solid rgba(248, 249, 251, 0.3);
}
.icon {
  display: inline-block;
  width: 26px;
  height: 26px;
  margin-right: 11px;
}
.el-menu {
  border: none;
}
.icon-1 {
  background: url(@/assets/images/icon-1.png) center no-repeat;
}
.icon-2 {
  background: url(@/assets/images/icon-2.png) center no-repeat;
}
.icon-3 {
  background: url(@/assets/images/icon-3.png) center no-repeat;
}
.el-menu-item {
  margin: 8px 0;
}
.el-menu-item.is-active {
  background: #303750;
  position: relative;
}
.el-menu-item.is-active::before {
  content: "";
  width: 3px;
  background: #298df9;
  height: 100%;
  position: absolute;
  left: 0;
}
.el-menu-item:hover {
  background: #303750;
}
.el-menu-item:hover a {
  color: #298df9;
}

a:hover {
  color: #298df9;
}
</style>
