<script lang='ts' setup>
import { useSheepStore } from "@/stores/sheep";
const store = useSheepStore();
</script>

<template>
  <div class="sheep-header">
    <div>第{{ store.step + 1 }}关</div>
    <div>
      <span class="l">羊了个羊🐑vue3版本</span
      ><span
        style="font-size: 14px;font-family: 'Times New Roman', Times, serif';"
        >（KinHKin）</span
      >
    </div>
  </div>
</template>
<style scoped lang="less">
.flex-center {
  display: flex;
  align-items: center;
}
.sheep-header {
  padding-top: 2rem;
  text-align: center;
  letter-spacing: 0.2rem;
  font-size: 1.5rem;
  color: #fff;
  border-bottom: 1px solid #1d9614;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
  div .l {
    background-image: -webkit-linear-gradient(
      left,
      #1d9614,
      #fff 25%,
      #666 50%,
      #e6d205 75%,
      #fff
    );
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-background-size: 200% 100%;
    -webkit-animation: maskedAnimation 4s infinite linear;
    padding-right: 8px;
  }
}
@keyframes maskedAnimation {
  0% {
    background-position: 0 0;
  }

  100% {
    background-position: -100% 0;
  }
}
</style>
