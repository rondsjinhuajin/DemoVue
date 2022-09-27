<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";
import data from "./data.json";
// const footerList = ref([0, 1, 2, 3, 4, 5, 6]);
const footerList = ref();

const colors = ref([
  "#008B8B",
  "#00FFFF",
  "#FFEBCD",
  "#A52A2A",
  "#7FFF00",
  "#FF7F50",
  "#DC143C",
  "#00FFFF",
  "#00008B",
  "#00CED1",
  "#FF1493",
]);

// 数据模拟
const totalList = ref();
totalList.value = data.list1;
function handleClick(
  i: any,
  k: string | number,
  onei: { oneSub: string | any[] },
  onek: string | number,
  oneiSub: number,
  onekSub: number
) {
  console.log(i, k, onei, onek, oneiSub, onekSub, "测试");
  // 内层不能点击
  if (onekSub !== onei.oneSub.length - 1) {
    return false;
  }
  if (footerList.value.length === 7) {
    ElMessage.closeAll();
    ElMessage.error("挑战失败！");
    return false;
  }
  const { value } = totalList;

  let tempList = JSON.parse(JSON.stringify(value));
  for (let i = 0; i < tempList.length; i++) {
    const one = tempList[k].one;
    for (let j = 0; j < one.length; j++) {
      const oneSub = one[onek];

      for (let k = 0; k < oneSub.oneSub.length; k++) {
        if (onekSub === k) {
          const footItem = oneSub.oneSub.splice(onekSub);
          break;
        }
      }
    }
  }
  footerList.value.push(oneiSub);
  totalList.value = tempList;
  if (footerList.value.length > 2) {
    setTimeout(() => {
      footerList.value = eliminationFunction(footerList.value);
      if (
        !footerList.value.length &&
        tempList.find((x:any) => x.one.find((j:any) => j.oneSub.length === 0))
      ) {
        // debugger
        ElMessage.closeAll();
        ElMessage.success("恭喜您，挑战成功！进入下一关");
        totalList.value = data.list2;
        footerList.value = [];
      }
    }, 100);
  }

  console.log(footerList, tempList, "tempList");

  // if (
  //   !footerList.value.length &&
  //   tempList.map((x) => x.one.map((j) => j.oneSub.length === 0))
  // ) {
  //   // debugger
  //   ElMessage.closeAll();
  //   ElMessage.success("恭喜您，挑战成功！进入下一关");
  //   totalList.value = data.list2;
  //   footerList.value = [];
  // }
}
// 消除函数
function eliminationFunction(list: any[]) {
  for (let k = 0; k < list.length - 2; k++) {
    const temp = list;
    const arr = temp.slice(k, k + 3);
    console.log(k, arr);
    if (arr[0] === arr[1] && arr[1] === arr[2] && arr[0] === arr[2]) {
      list.splice(k + 2);
      list.splice(k + 1);
      list.splice(k, 1);
    }
  }

  return list;
}
</script>

<template>
  <div class="sheep-main">
    <div class="sheep-main-wrap">
      <template v-for="(i, k) in totalList" :key="'i' + k">
        <el-row v-if="i.one">
          <el-col :span="8" v-for="(onei, onek) in i.one" :key="'i' + onek">
            <div class="pic-list">
              <div
                class="pic-list-item"
                v-for="(oneiSub, onekSub) in onei.oneSub"
                :style="!onei.full ? `--i:${onekSub}` : `--i:0`"
                :class="onei.full && onei.oneSub.length > 1 ? 'true' : ''"
                :key="'i' + onekSub"
                @click="handleClick(i, k, onei, onek, oneiSub, onekSub)"
              >
                <el-icon class="fz" v-if="oneiSub === 0"
                  ><StarFilled :color="colors[0]"
                /></el-icon>
                <el-icon class="fz" v-if="oneiSub === 1"
                  ><Aim :color="colors[1]"
                /></el-icon>
                <el-icon class="fz" v-if="oneiSub === 2"
                  ><Grid :color="colors[2]"
                /></el-icon>
                <el-icon class="fz" v-if="oneiSub === 3"
                  ><HelpFilled :color="colors[3]"
                /></el-icon>
                <el-icon class="fz" v-if="oneiSub === 4"
                  ><Star :color="colors[4]"
                /></el-icon>
                <el-icon class="fz" v-if="oneiSub === 5"
                  ><Menu :color="colors[5]"
                /></el-icon>
                <el-icon class="fz" v-if="oneiSub === 6"
                  ><Camera :color="colors[6]"
                /></el-icon>
                <el-icon class="fz" v-if="oneiSub === 7"
                  ><Bicycle :color="colors[7]"
                /></el-icon>
                <el-icon class="fz" v-if="oneiSub === 8"
                  ><IceTea :color="colors[8]"
                /></el-icon>
                <el-icon class="fz" v-if="oneiSub === 9"
                  ><ColdDrink :color="colors[9]"
                /></el-icon>
                <el-icon class="fz" v-if="oneiSub === 10"
                  ><CoffeeCup :color="colors[10]"
                /></el-icon>
              </div>
            </div>
          </el-col>
        </el-row>
      </template>
    </div>

    <div class="sheep-footer flex-center">
      <div
        v-for="(ii, k) in footerList"
        :key="'ii' + k"
        class="sheep-footer-items"
      >
        <el-icon class="fz" v-if="ii === 0"
          ><StarFilled :color="colors[0]"
        /></el-icon>
        <el-icon class="fz" v-if="ii === 1"><Aim :color="colors[1]" /></el-icon>
        <el-icon class="fz" v-if="ii === 2"
          ><Grid :color="colors[2]"
        /></el-icon>
        <el-icon class="fz" v-if="ii === 3"
          ><HelpFilled :color="colors[3]"
        /></el-icon>
        <el-icon class="fz" v-if="ii === 4"
          ><Star :color="colors[4]"
        /></el-icon>
        <el-icon class="fz" v-if="ii === 5"
          ><Menu :color="colors[5]"
        /></el-icon>
        <el-icon class="fz" v-if="ii === 6"
          ><Camera :color="colors[6]"
        /></el-icon>
        <el-icon class="fz" v-if="ii === 7"
          ><Bicycle :color="colors[7]"
        /></el-icon>
        <el-icon class="fz" v-if="ii === 8"
          ><IceTea :color="colors[8]"
        /></el-icon>
        <el-icon class="fz" v-if="ii === 9"
          ><ColdDrink :color="colors[9]"
        /></el-icon>
        <el-icon class="fz" v-if="ii === 10"
          ><CoffeeCup :color="colors[10]"
        /></el-icon>
      </div>
    </div>
  </div>
</template>
<style scoped lang="less">
.flex-center {
  display: flex;
  align-items: center;
}
.el-row {
  // margin-top: 3rem;
  height: 28%;
}

.fz {
  font-size: 3rem;
  border: 1px solid #dfe5f9;
  // box-shadow: 2px 2px 10px #f3f6fe;

  background: #f3f6fe;
  border-radius: 5px;
}
.pic-list {
  position: relative;
  width: 100%;
  height: 100%;
  &-item {
    position: absolute;
    left: 10vw;
    cursor: pointer;
    transition: all 0.3s;
    &:nth-child(1n) {
      top: calc(var(--i) * 1.5rem);
    }
    &.true {
      box-shadow: 0 -55px 0 0 #dfe5f9 inset;
    }

    // &:nth-child(even) {
    //   top: 2rem;
    // }
  }
}
.sheep-main {
  flex: 1;
  &-wrap {
    height: calc(100% - 80px);
  }
}

.sheep-footer {
  height: 80px;
  width: 100%;
  // border: 2px solid #298df9;
  border: 2px solid #778899;
  background: #f3f6fe;
  .sheep-footer-items {
    height: 80px;
    width: calc(100% / 7);
    margin-left: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    // border-right: 1px solid #dfe5f9;
  }
}
</style>
