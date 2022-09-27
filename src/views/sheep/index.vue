<script setup lang='ts'>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
</script>

<template>
  <div class="sheep-wrap">
    <div class="sheep">
      <Header />
      <Main />
    </div>
  </div>
</template>
<style scoped lang='less'>
.sheep-wrap {
  .sheep {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    padding-bottom: 20px;
  }
  width: 100%;
  height: calc(100vh - 60px);
  background: url("../../assets/images/sheep.png") center no-repeat;
  background-size: cover;
}
</style>