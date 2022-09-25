<script setup lang="ts">
import { reactive, ref } from "vue";
import type { Ref } from "vue";

import type { TabsPaneContext } from "element-plus";

const activeName: Ref<string | number> = ref("1");

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event);
};
const count: Ref<number> = ref(0);
function countClick() {
  count.value++;
}
interface TypeForm {
  name: string;
  num: number;
  list?: Array<number>;
}
const formInline: TypeForm = reactive({
  name: "",
  num: 0,
});
function updateFormInline() {
  formInline.name = "KinHKin";
  formInline.num = 100;
  formInline.list = [1, 2, 3, 4];
}
function openWin() {
  window.open(
    "https://blog.csdn.net/weixin_42974827/article/details/127021357?spm=1001.2014.3001.5501",
    "_blank"
  );
}
</script>
<template>
  <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="setup" name="1">
      <el-button @click="openWin">setup源码解析</el-button>
    </el-tab-pane>
    <el-tab-pane label="ref" name="2">
      <el-button @click="countClick">count++</el-button>
      <div>{{ count }}</div>
    </el-tab-pane>
    <el-tab-pane label="reactive" name="3">
      <el-button @click="updateFormInline">updateFormInline</el-button>
      <div v-for="(i, k) in Object.keys(formInline)" :key="'k' + k">
        {{ i || "--" }}:
        {{ Object.values(formInline)[k] || "--" }}
      </div>
    </el-tab-pane>
  </el-tabs>
</template>
