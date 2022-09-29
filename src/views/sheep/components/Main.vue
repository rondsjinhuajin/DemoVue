<script setup lang="ts">
import { ref, type Ref } from "vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { useSheepStore } from "@/stores/sheep";
// 关卡数据
import data from "./data.json";
// 颜色
import constants from "./constants";
// pinia 控制关卡
const store = useSheepStore();
// 七个槽位
// const footerList = ref([0, 1, 2, 3, 4, 5, 6]);
const footerList: Ref<Array<any> | [any]> = ref([]);

const colors = ref(constants.colors);

// 关卡响应式
const totalList: Ref<Array<any> | [any]> = ref([]);
totalList.value = data["list1"]; // 默认第一关

// 控制动画效果结束才能点击
const isNotClick = ref(false);

// 点击消除 控制等事件
function handleClick(
  i: number,
  k: number,
  onei: { oneSub: string | Array<string> },
  onek: number,
  oneiSub: Array<number>,
  onekSub: number
) {
  console.log(i, k, onei, onek, oneiSub, onekSub, "测试");
  if (isNotClick.value) {
    return false;
  }
  // 内层不能点击
  if (onekSub !== onei.oneSub.length - 1) {
    return false;
  }

  // 前置点击如果槽位满了还没有消除完
  fullFun()

  // 关卡的消除
  let tempList = fixFun(k, onekSub, onek, oneiSub)

  // 消除动作 和 添加爆炸效果
  if (footerList.value.length > 2) {
    isNotClick.value = true
    const { list, flag } = eliminationFunction(footerList.value)
    footerList.value = list;
    if (flag) {
      footerList.value = addBoomFunction(footerList.value);
    }
    setTimeout(() => {
      const { list, flag } = eliminationFunction(footerList.value)
      footerList.value = list;
      isNotClick.value = false
    }, 1000);

    // 进入下一关
    nextFun(tempList)
  }
  // 挑战失败
  failFun(tempList)

  console.log(footerList, tempList, "tempList");
}
// full
function fullFun() {
  if (footerList.value.length === 7) {
    ElMessage.closeAll();

    ElMessageBox.alert("挑战失败，点击确定返回！", "Warning", {
      confirmButtonText: "确定",
      type: "warning",
      showClose: false,
    }).then(() => {
      location.reload();
    });
    return false;
  }
}
// fix
function fixFun(k: number, onekSub: number, onek: number, oneiSub: Array<number>) {
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
  return tempList
}
//fail
function failFun(tempList: any[]) {
  setTimeout(() => {
    if (footerList.value.length > 0 && !jugeList(tempList)) {
      ElMessage.closeAll();

      ElMessageBox.alert("挑战失败，点击确定返回！", "Warning", {
        confirmButtonText: "确定",
        type: "warning",
        showClose: false,
      }).then(() => {
        location.reload();
      });
      return false;
    }
  }, 1002)
}
// next
function nextFun(tempList: any[]) {
  setTimeout(() => {
    if (!footerList.value.length && !jugeList(tempList)) {
      // debugger
      ElMessage.closeAll();
      ElMessage.success("恭喜您，挑战成功！进入下一关");
      store.step++;
      const inStep: string = "list" + (store.step + 1);
      totalList.value = JSON.parse(JSON.stringify(data))[inStep];
      footerList.value = [];
    }
  }, 1001)
}
// 判断是否过关
function jugeList(list: any[]) {
  let temp: any = [];
  list.forEach((oeni: { one: any }) => {
    oeni.one.forEach((sub: { oneSub: any }) => {
      temp = [...temp, ...sub.oneSub];
    });
  });
  return temp.length;
}

// 消除函数
function eliminationFunction(list: any[]) {
  let flag: boolean = false;
  for (let k = 0; k < list.length - 2; k++) {
    const temp = list;
    const arr = temp.slice(k, k + 3);
    console.log(k, arr);
    if (arr[0] === arr[1] && arr[1] === arr[2] && arr[0] === arr[2]) {
      list.splice(k + 2);
      list.splice(k + 1);
      list.splice(k, 1);
      flag = true
      break;
    }
  }

  return { list, flag };
}

// 实现爆炸💥效果
function addBoomFunction(list: any[]) {
  const temp = JSON.parse(JSON.stringify([...list, ...['boom', 'boom', 'boom']]))
  return temp;
}
</script>

<template>
  <div class="sheep-main">
    <div class="sheep-main-wrap">
      <template v-for="(i, k) in totalList" :key="'i' + k">
        <el-row v-if="i.one">
          <el-col :span="8" v-for="(onei, onek) in i.one" :key="'i' + onek">
            <div class="pic-list">
              <div class="pic-list-item" v-for="(oneiSub, onekSub) in onei.oneSub"
                :style="!onei.full ? `--i:${onekSub}` : `--i:0`"
                :class="onei.full && onei.oneSub.length > 1 ? 'true' : ''" :key="'i' + onekSub"
                @click="handleClick(i, k, onei, onek, oneiSub, onekSub)">
                <el-icon class="fz" v-if="oneiSub === 0">
                  <StarFilled :color="colors[0]" />
                </el-icon>
                <el-icon class="fz" v-if="oneiSub === 1">
                  <Aim :color="colors[1]" />
                </el-icon>
                <el-icon class="fz" v-if="oneiSub === 2">
                  <Grid :color="colors[2]" />
                </el-icon>
                <el-icon class="fz" v-if="oneiSub === 3">
                  <HelpFilled :color="colors[3]" />
                </el-icon>
                <el-icon class="fz" v-if="oneiSub === 4">
                  <Star :color="colors[4]" />
                </el-icon>
                <el-icon class="fz" v-if="oneiSub === 5">
                  <Menu :color="colors[5]" />
                </el-icon>
                <el-icon class="fz" v-if="oneiSub === 6">
                  <Camera :color="colors[6]" />
                </el-icon>
                <el-icon class="fz" v-if="oneiSub === 7">
                  <Bicycle :color="colors[7]" />
                </el-icon>
                <el-icon class="fz" v-if="oneiSub === 8">
                  <IceTea :color="colors[8]" />
                </el-icon>
                <el-icon class="fz" v-if="oneiSub === 9">
                  <ColdDrink :color="colors[9]" />
                </el-icon>
                <el-icon class="fz" v-if="oneiSub === 10">
                  <CoffeeCup :color="colors[10]" />
                </el-icon>
              </div>
            </div>
          </el-col>
        </el-row>
      </template>
    </div>

    <div class="sheep-footer flex-center">
      <div v-for="(ii, k) in footerList" :key="'ii' + k" class="sheep-footer-items">
        <el-icon class="fz" v-if="ii === 0">
          <StarFilled :color="colors[0]" />
        </el-icon>
        <el-icon class="fz" v-if="ii === 1">
          <Aim :color="colors[1]" />
        </el-icon>
        <el-icon class="fz" v-if="ii === 2">
          <Grid :color="colors[2]" />
        </el-icon>
        <el-icon class="fz" v-if="ii === 3">
          <HelpFilled :color="colors[3]" />
        </el-icon>
        <el-icon class="fz" v-if="ii === 4">
          <Star :color="colors[4]" />
        </el-icon>
        <el-icon class="fz" v-if="ii === 5">
          <Menu :color="colors[5]" />
        </el-icon>
        <el-icon class="fz" v-if="ii === 6">
          <Camera :color="colors[6]" />
        </el-icon>
        <el-icon class="fz" v-if="ii === 7">
          <Bicycle :color="colors[7]" />
        </el-icon>
        <el-icon class="fz" v-if="ii === 8">
          <IceTea :color="colors[8]" />
        </el-icon>
        <el-icon class="fz" v-if="ii === 9">
          <ColdDrink :color="colors[9]" />
        </el-icon>
        <el-icon class="fz" v-if="ii === 10">
          <CoffeeCup :color="colors[10]" />
        </el-icon>
        <div class="boom-class" v-if="ii === 'boom'">💥</div>
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
  background: #010206;

  .sheep-footer-items {
    height: 80px;
    width: calc(100% / 7);
    margin-left: 8px;
    display: flex;
    align-items: center;
    justify-content: center;

    .boom-class {
      font-size: 3rem;
      animation: myMove 3s ease-in-out infinite;
    }

    @keyframes myMove {
      0% {
        opacity: 1;
      }

      100% {
        opacity: 0;
      }
    }

    // border-right: 1px solid #dfe5f9;
  }
}
</style>
