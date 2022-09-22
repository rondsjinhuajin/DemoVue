<!--功能说明: KinHKin 柱状图-->
<template>
  <el-row style="padding: 30px 0 0 15px">
    <el-col :span="16">
      <div class="route-watch-bar" id="pieCharts" :key="1"></div>
    </el-col>
    <el-col :span="8">
      <Pie :list="barList" />
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { onMounted, Ref, ref } from "vue";
import Pie from "./Pie.vue";
import * as echarts from "echarts"; // 全部引入 按需引入 自行百度
// 模拟数据
const list = ref([
  {
    name: "1测试",
    total: "22311",
  },
  {
    name: "2测试",
    total: "5676",
  },
  {
    name: "3测试",
    total: "4176",
  },
  {
    name: "4测试",
    total: "1676",
  },
  {
    name: "5测试",
    total: "676",
  },
  {
    name: "6测试",
    total: "2176",
  },
]);
// 需要传值的bar数据
const barList = ref([
  {
    name: "bar测试1",
    value: "211",
  },
  {
    name: "bar测试2",
    value: "344",
  },
]);
// 类型
type EChartsOption = echarts.EChartsOption;
let myChart = null; // 初始化
let option: EChartsOption; // 类型
// 折线图 visualMap 的 pieces数据
const visualMapPieces = Array(5) // 背景色
  .fill([])
  .map((item, index) => {
    return {
      agt: index,
      lt: index + 1,
      color: "#D6F1FF",
    };
  });
// 画柱状图
const drawBarCharts = (list: any[]) => {
  // drawPieChart("skip", "");
  if (option) {
    myChart.dispose(); //释放图表
  }
  // 折线图 默认配置
  option = {
    grid: {
      top: 40,
    },
    yAxis: {
      type: "category",
      axisTick: {
        show: false,
      },
      data: list.map((i) => i.name).reverse(),
    },

    xAxis: {
      type: "value",
    },
    visualMap: {
      type: "piecewise",
      show: false,
      dimension: 1,
      seriesIndex: 1,
      pieces: [
        {
          gt: 4,
          lt: 5,
          color: "#FFD6D4",
        },
      ],
    },
    series: [
      {
        name: "",
        data: list.map((i) => i.total).reverse(),
        type: "bar",
        barWidth: "50%",
        color: "#0072ED",
        zlevel: 2,
      },
      {
        name: "line",
        type: "line",
        areaStyle: {
          // color: '#D6F1FF'
        },
        lineStyle: {
          color: "#E2F0FF",
        },
        data: list.map((i) => i.total).reverse(),
        zlevel: 1,
        symbol: "none",
        markLine: {
          silent: true,
          data: [
            [
              {
                lineStyle: { color: "#1890FF", type: "dashed", width: 2 },
                x: "10%",
                y: "22%",
              },
              {
                label: {
                  color: "#1890FF",
                  padding: [0, 15, 0, 0], // 重点在这里，这个地方就是定位
                  position: "insideEndTop",
                  formatter: `${list[1].name + "    " + list[1].total}`, // 默认第二个
                },
                lineStyle: { color: "#1890FF", type: "dashed", width: 2 },
                x: "98%",
                y: "22%",
              },
            ],
          ],
        },
      },
    ],
  };
  // 折线图 点击事件
  option && myChart.setOption(option);
};
// 初始化柱状图点击事件
const BarClick = () => {
  // 折线图 点击事件
  myChart.getZr().on("click", "series.line", (params) => {
    defaultClick(params, option, myChart, visualMapPieces, list.value);
    console.log(params, "params");
    barChangeList();
  });
};
// 点击事件重置柱状图的颜色区域
function defaultClick(
  params: { target: any; offsetY: number; offsetX: any },
  option: echarts.EChartsOption,
  myChart: {
    setOption: (arg0: {
      visualMap: {
        type: string;
        show: boolean;
        dimension: number;
        seriesIndex: number;
        pieces: any;
      };
      series: any;
    }) => void;
  },
  visualMapPieces: any[],
  list: Ref<{ name: string; total: string }[]> | { total: any }[]
) {
  // 折线图 点击事件
  console.log(params, "params");
  if (!params.target) {
    return;
  }
  let areaIndex = 0; // 值域：[0, 4]的正整数
  // 根据Y轴的值 预估区间
  if (params.offsetY >= 78 && params.offsetY < 125) {
    areaIndex = 4;
  } else if (params.offsetY >= 125 && params.offsetY < 148) {
    areaIndex = 3;
  } else if (params.offsetY >= 148 && params.offsetY < 197) {
    areaIndex = 2;
  } else if (params.offsetY >= 197 && params.offsetY < 270) {
    areaIndex = 1;
  } else if (params.offsetY >= 270 && params.offsetY < 296) {
    areaIndex = 0;
  } else {
    areaIndex = null;
  }
  if (areaIndex === null) return; // 控制第四个区域不能点击
  myChart.setOption({
    visualMap: {
      type: "piecewise",
      show: false,
      dimension: 1,
      seriesIndex: 1,
      pieces: visualMapPieces.map((item, index) => {
        // 根据点击区域，修改折线图区域的颜色
        return index === areaIndex
          ? {
              agt: index,
              lt: index + 1,
              color: "#FFD6D4",
            }
          : { ...item };
      }),
    },
    series: option.series.map((item, index) => {
      // 根据点击区域 画指示线
      return item.name === "line"
        ? {
            ...item,
            markLine: {
              silent: true,
              lineStyle: {
                type: "dashed",
                color: "#1890FF",
              },
              data: [
                [
                  {
                    lineStyle: { color: "#1890FF", type: "dashed", width: 1 },
                    x: params.offsetX,
                    y: params.offsetY,
                  },
                  {
                    label: {
                      color: "#1890FF",
                      padding: [0, 15, 0, 0], // 重点在这里，这个地方就是定位
                      position: "insideEndTop",
                      formatter: `${
                        list[areaIndex - 1 < 0 ? 0 : areaIndex - 1].name
                      }${list[areaIndex - 1 < 0 ? 0 : areaIndex - 1].total}`,
                    },
                    lineStyle: { color: "#1890FF", type: "dashed", width: 1 },
                    x: "98%",
                    y: params.offsetY,
                  },
                ],
              ],
            },
          }
        : { ...item };
    }),
  });
}
// 动态获取右侧饼图数据
function barChangeList() {
  let temp = [];
  for (let i = 0; i < Math.floor(Math.random() * 10 + 1); i++) {
    temp.push({
      name: "bar数据" + i + 1,
      value: 10 * (i + 1),
    });
  }
  barList.value = temp;
}
// 初始化
onMounted(() => {
  const chartDom = document.getElementById("pieCharts");
  myChart = echarts.init(chartDom);
  drawBarCharts(list.value);
  BarClick();
});
</script>

<style lang="less" scoped>
.route-watch-bar {
  width: 100%;
  height: 400px;
}
</style>
