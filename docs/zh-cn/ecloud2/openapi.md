---
title: EasyClick云控文档_安卓云控_iOS云控_抖音云控_快手云控_游戏云控_云控开放API
hide_title: false
hide_table_of_contents: false
sidebar_label: 云控开放API
description: EasyClick 云控平台专门用于用于管理脚本、任务, 安装云控非常简单，使用宝塔一键安装mysql，redis套件，然后复制云控程序到网站目录，更改mysql配置，启动ecloud二进制文件即可
keywords: [EasyClick,手机自动化脚本,自动化软件,云控平台安装,抖音云控,快手云控,游戏云控]
---
# 云控开放API

:::tip 提示
- 如果需要全站的api接口请做如下操作
- 1、进入云控的config/文件夹下，打开config.toml文件，找到`no_limit_token`字段，设置最高的请求密钥，自己随便写一串字符串即可，设置好后重启云控服务
- 2、在Google浏览器或者Firefox浏览器打开开发者模式，进入`网络`进行请求抓包
- 3、模拟请求云控接口的时候，在http请求头header里面加上`no_limit_token`字段，值为步骤1设置的字符串
:::


## 获取任务信息接口

POST : 云控地址/openapi/getTask
例如: http://192.168.1.182:8099/openapi/getTask
Content-Type: application/json

```json showLineNumbers
{
  "dataSecret": "后台配置的API云控通信密钥"
  // 配置在config.toml文件中的appkey选项，默认是 test123
}
```
- 返回数据:
```json showLineNumbers
[
  {
    "cacheScript": 1,
    "delaySecond": 0,
    "execNumber": 9999,
    "cronText": "* * * * * ?",
    "deviceNos": "006,001,003x,test222", // 任务执行设备
    "downloadUrl": "http://192.168.2.7:8098/pub_upload/2022-10-07/cnfdy1l2biiwpl8qcm.iec",
    "execType": 1,
    "scheduleTime": null,
    "scheduleType": 0,
    "execStatus": 1,
    "endTime": null,
    "scriptId": 16, 
    "scriptMd5": "b7ec603dffd9527c98e505bdd0eea137",
    "scriptName": "html5",
    "scriptVersion": "1",
    "sort": 1,
    "taskId": 11, // 任务的ID 一般只关心这个即可
    "taskName": "23", // 任务名称
    "tenantId": 1, // 租户的id
    // 参数配置
    "valueConfig": "[{\"id\":3,\"key\":\"我是多选框\",\"options\":[\"111\",\"2222\",\"333\"],\"type\":\"3\",\"value\":[\"111\",\"222\",\"333\"]},{\"id\":2,\"type\":\"2\",\"key\":\"b\",\"value\":\"111\",\"options\":[\"111\",\"2\"]},{\"id\":1,\"type\":\"\",\"key\":\"a\",\"value\":\"111333\",\"options\":\"111\"},{\"id\":1,\"key\":\"我是文本\",\"options\":\"\",\"type\":\"\",\"value\":\"我是文本的值\"},{\"id\":2,\"key\":\"我是单选框\",\"options\":[\"我是选中\",\"2222\"],\"type\":\"2\",\"value\":\"我是选中\"}]",
    // 参数格式化的值
    "valueJson": {
      "a": "111333",
      "b": "111",
      "我是单选框": "我是选中",
      "我是多选框": [
        "111",
        "222",
        "333"
      ],
      "我是文本": "我是文本的值"
    }
  },
  {
    "cacheScript": 1,
    "delaySecond": 222,
    "execNumber": 133,
    "cronText": "* * * * * ?",
    "deviceNos": "003,test222,001,002",
    "downloadUrl": "http://192.168.2.7:8098/pub_upload/2022-10-07/cnfdy1l2biiwpl8qcm.iec",
    "execType": 2,
    "scheduleTime": null,
    "scheduleType": 3,
    "execStatus": 1,
    "endTime": null,
    "scriptId": 16,
    "scriptMd5": "b7ec603dffd9527c98e505bdd0eea137",
    "scriptName": "html5",
    "scriptVersion": "1",
    "sort": 1,
    "taskId": 10,
    "taskName": "33",
    "tenantId": 1,
    "valueConfig": "[{\"id\":3,\"key\":\"我是多选框\",\"options\":[\"111\",\"2222\",\"333\"],\"type\":\"3\",\"value\":[\"111\",\"222\",\"333\"]},{\"id\":2,\"type\":\"2\",\"key\":\"b\",\"value\":\"111\",\"options\":[\"111\",\"2\"]},{\"id\":1,\"type\":\"\",\"key\":\"a\",\"value\":\"111333\",\"options\":\"111\"},{\"id\":1,\"key\":\"我是文本\",\"options\":\"\",\"type\":\"\",\"value\":\"我是文本的值\"},{\"id\":2,\"key\":\"我是单选框\",\"options\":[\"我是选中\",\"2222\"],\"type\":\"2\",\"value\":\"我是选中\"}]",
    "valueJson": {
      "a": "111333",
      "b": "111",
      "我是单选框": "我是选中",
      "我是多选框": [
        "111",
        "222",
        "333"
      ],
      "我是文本": "我是文本的值"
    }
  }
]

```


## 任务控制接口

- 可以执行任务
- 可以停止任务
- 可以移出、增加执行设备
- 可以移出、增加参数等

POST : 云控地址/openapi/changeTask
例如: http://192.168.1.182:8099/openapi/changeTask
Content-Type: application/json

```json showLineNumbers
{
  "dataSecret":"后台配置的API云控通信密钥", // 配置在config.toml文件中的appkey选项，默认是 test123
  "taskId":"1",// 任务ID，在云控建好的
	"status":"0",// 1 停止本地，2 停止远程 0 开启
	"addDevices":"001,002,003",//需要增加执行的设备
    "removeDevices":"007,009",//需要减少执行的设备
  // 要增加的参数解释
  //key = 代表参数名称
  //type = 参数类型，1代表是文本 2 代表是单选框  3代表是多选框
  // value = 代表是参数值，如果是文本情况下，直接就是字符串
  // 如果是单选框，也填写字符串
  // 如果是多选框，填写json数组，因为是多选，必须是数组
  // options = 代表是候选选择，如果是文本，请忽略
  // 如果是单选框，请填写json数组
  // 如果是多选框，请填写json数组
  "addParamEx":[
    {
      "key":"我是文本",
      "type":"1",
      "value":"我是文本的值"
    },
    {
      "key":"我是单选框",
      "type":"2",
      "value":"2222",
      "options":["我是选中","2222"]
    },
    {
      "key":"我是多选框",
      "type":"3",
      "value":["111","222"],
      "options":["111","2222","333"]
    }
  ],
  "removeParam":["ke1"]
}


```



```sequence
title: 下单自动执行流程
participant 客户
participant 下单系统
participant 云控系统
participant 设备

客户->下单系统: 客户下单并支付完成
下单系统->云控系统: 调用(/api/changeTask) 执行任务某个任务，\n并加入某写设备和参数
云控系统->云控系统: 改变任务状态\n参数、设备等
云控系统->设备: 下发任务到设备
设备->设备: 循环执行脚本
设备->云控系统: 调用(/api/changeTask)达到条件\n将自己从任务的设备中移出


```



