<script setup lang='ts'>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
// import { KinesisContainer, KinesisElement } from "vue-kinesis"
</script>

<template>
  <div class="sheep-wrap">
    <div class="sheep">

      <div class="sheep-wrap">
        <div class="sheep">
          <Header />
          <Main />
        </div>
      </div>
      <!-- <kinesis-container>
        <kinesis-element :strength="10">
          <div>
            <Header />
          </div>

        </kinesis-element>
        <kinesis-element :strength="20">
          <div>
            <Main />
          </div>
        </kinesis-element>
      </kinesis-container> -->
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