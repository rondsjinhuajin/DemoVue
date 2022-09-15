<script setup lang="ts">
import { onMounted, ref } from "vue";
import layoutHeader from "./layoutHeader.vue";
import layoutMain from "./layoutMain.vue";
import layoutFooter from "./layoutFooter.vue";
import menu from "./menu";
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
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header
        ><layout-header :isPhoneOrNot="isPhoneOrNot"></layout-header
      ></el-header>
      <el-container>
        <el-aside width="150px" v-if="!isPhoneOrNot">
          <nav class="nav-class">
            <RouterLink
              v-for="(item, index) in menu"
              :key="'menu' + index"
              :to="item.url"
              >{{ item.title }}{{ index + 1 }}</RouterLink
            >
          </nav>
        </el-aside>
        <el-container>
          <el-main><layout-main></layout-main></el-main>
          <!-- <el-footer><layout-footer></layout-footer></el-footer> -->
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
}
.common-layout {
  height: 100vh;
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
  background-color: lightslategrey;
}
</style>
