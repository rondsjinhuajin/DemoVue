<script setup lang="ts">
import { onMounted, ref } from "vue";

import menu from "./menu";
import { RouterLink } from "vue-router";
const show = ref(false);
const showPopup = () => {
  show.value = !show.value;
};
const props = withDefaults(
  defineProps<{
    isPhoneOrNot?: boolean;
  }>(),
  {
    isPhoneOrNot: false,
  }
);

onMounted(() => {});
</script>
<template>
  <div class="common-layout-header">
    <div>demo演示</div>
    <a
      href="https://blog.csdn.net/weixin_42974827?spm=1010.2135.3001.5421"
      class="kin-class"
      >@KinHKin</a
    >
    <el-tooltip
      class="box-item"
      effect="dark"
      content="菜单"
      placement="bottom-start"
    >
      <el-icon @click="showPopup" v-if="props.isPhoneOrNot"><Menu /></el-icon>
    </el-tooltip>
  </div>
  <van-popup v-model:show="show" position="left">
    <div class="van-popup-class">
      <nav class="nav-class1">
        <RouterLink
          v-for="(item, index) in menu"
          :key="'menu' + index"
          :to="item.url"
          >{{ item.title }}{{ index + 1 }}</RouterLink
        >
      </nav>
    </div>
  </van-popup>
</template>
<style>
.el-header {
  margin: 0;
  padding: 0 !important;
  height: 35px !important;
  background-color: aliceblue;
  text-align: center;
  line-height: 35px !important;
  color: #333;
}
.common-layout-header {
  display: flex;
  align-items: center;
  justify-content: center;
}
.kin-class {
  margin: 0 8px;
}
.van-popup-class {
  height: 100vh;
  margin: 0 20px;
}
.nav-class1 {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
}
.nav-class1 a {
  min-height: 35px;
  line-height: 35px;
  color: #333;
}
.nav-class1 a:hover {
  color: rgb(151, 219, 50);
}
.nav-class1 a:focus {
  color: rgb(151, 219, 50);
}
</style>
