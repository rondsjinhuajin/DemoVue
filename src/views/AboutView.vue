<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
    <div class="animation"></div>
  </div>
</template>
<style>
.animation {
  width: 40px;
  height: 40px;
  animation: move 3s infinite;
  background-color: aquamarine;
}
@keyframes move {
  to {
    left: 100px;
  }
  from {
    left: 0;
  }
}
</style>
