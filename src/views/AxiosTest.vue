<template>
  <div class="axios-wrap">
    <el-button @click="getUrl">get请求</el-button>
    <el-button @click="postUrl">post请求</el-button>
    <el-button @click="instanceFun">实例请求</el-button>
    <el-button @click="httpFun">封装http请求</el-button>
    <div :key="'s' + index" v-for="(item, index) in list" class="list">
      <div>{{ item.id }}</div>
      <div>{{ item.firstName }}{{ item.id }}</div>
      <div>{{ item.name }}</div>
      <div>{{ item.message }}</div>
      <div>{{ item.code }}</div>
      <div>{{ item.data }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import "./mock";
import http from "../services/http";
interface ListModel {
  id: number;
  name: string;
  firstName: string;
}
// const list = ref<ListModel[]>([]);
const list: any = ref<any>();
async function getUrl() {
  const res = await axios.get("/getData", {
    params: {
      id: 1, //需要携带参数
    },
  });
  list.value = res.data.list;
}

function postUrl() {
  axios
    .post("/postData", {
      name: "Fred",
      age: 18,
    })
    .then(function (response) {
      console.log(response.data.message);
      list.value = [response.data];
    })
    .catch(function (error) {
      console.log(error);
    });
}
// 发送多个并发请求
function getUserInfo() {
  return axios.get("/userInfo");
}
function getToken() {
  return axios.get("/getToken");
}
//同步
Promise.all([getUserInfo(), getToken()]).then((res) => {
  console.log(res, "res");
});
//异步
Promise.race([getUserInfo(), getToken()]).then((res) => {
  console.log(res, "res1111");
});

// 生成实例
const instance = axios.create({
  baseURL: "/",
  timeout: 1000,
  headers: { "Content-Type": "multipart/form-data;charset=utf-8" },
});
// 请求的拦截器
instance.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    console.log(config, "config");
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);
// 返回的拦截器
instance.interceptors.response.use(
  function (res) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    console.log(res, "res");

    return res;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);
// 实例请求
function instanceFun() {
  instance.get("/userInfo").then((res) => {
    console.log(res, "测试实例请求");
    list.value = [res.data];
  });
}
// 封装http公共请求 KinHKin
function httpFun() {
  http.get("/getToken").then((res) => {
    console.log(res, "测试接口类名称");
    list.value = [res];
  });
}
</script>
<style>
.axios-wrap {
  color: #333;
  font-size: 16px;
}

.list {
  display: flex;
  align-items: center;
  justify-content: center;
}

.list div {
  margin: 8px 20px;
  text-align: left;
}
</style>
