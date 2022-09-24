import Mock from "mockjs";
Mock.mock(RegExp("/getData" + ".*"), "get", function () {
  const datas = Mock.mock({
    "list|100": [
      {
        "id|+1": 1,
        "name|+1": "@cname",
        "firstName|1": "KinHKin",
      },
    ],
  });
  return datas;
});

Mock.mock(RegExp("/postData" + ".*"), "post", function () {
  const datas = { message: "请求成功", code: 0, data: 1 };
  return datas;
});

Mock.mock("/userInfo", "get", function () {
  const datas = { message: "实例请求成功", code: 0, data: 2 };
  return datas;
});
Mock.mock("/getToken", "get", function () {
  const datas = { message: "封装请求成功", code: 0, data: 3 };
  return datas;
});
