---
title: 版本记录
description: EasyClick 自动化脚本 鸿蒙Next脚本开发
版本记录 keywords: [ EasyClick 自动化脚本 鸿蒙Next脚本开发 版本记录 ]
---

## 最新发布版本

### 2.5.0

**发布日期: 2025-2-17**

```text showLineNumbers
- 升级jdk17运行环境
- 新增接入云控支持
- 新增ecloud云控模块功能
- 优化idea代码生成自定义模板功能
- 优化部分功能
- 云控文档: https://ieasyclick.com/docs/zh-cn/ecloud2/cloudchangelog
```

## 历史版本


### 2.4.0

**发布日期: 2025-2-6**

```text showLineNumbers
- 升级rhino js 引擎为1.8.0版本,支持大部分ES6语法特性
- 支持js的Optional Chaining功能，避免空值，用法obj?.length()，?代表可选模式
- 支持js的模板字符串功能
- 优化部分功能
- 更多语法功能请看：https://mozilla.github.io/rhino/compat/engines.html
[升级后版本后，需要重新编译脚本的iec文件，防止引擎改动造成的未知问题]
```

### 2.3.0

**发布日期: 2025-1-21**

```text showLineNumbers
- 新增微软的onnxruntime，支持yolov8的onnx模型，具体请看yolov8的文档
- 新增idea图色面板支持拖拽图片文件打开
- 新增找图找色带J结尾的函数，读取JSON文件找图找色，方便修改
- 新增idea图色面板生成JSON配置文件
- 扩展AutoImage函数的功能，可以使用AutoImage对象实例直接找图找色，无需使用image对象
- 拓展js的string、array功能，请看api_ext.js文件
- 修复资源文件无法感应多级目录的问题
- 修复mat模式下单点比色的逻辑问题
- 优化多点比色与文档注释结果保持一致
- 优化部分功能
```
### 2.2.0

**发布日期: 2025-1-10**

```text showLineNumbers
- 新增idea修复项目结构功能
- 修复启动idea编译ts慢的问题
- 新增图色范围参数检查,防止边界溢出
- 增加console.info等日志函数支持
- 优化部分功能
```

### 2.1.0

**发布日期: 2024-12-25**

```text showLineNumbers
- 新增idea基本设置可以选择tsc文件编译ts
- 新增企业版本开放api接口
- 修复部分函数返回值问题例如openurl等
- 优化部分功能
```

### 2.0.0

**发布日期: 2024-12-19**

```text showLineNumbers
- 新增 setDisplayLineNumber
- 新增idea以及APP的npm支持(工程鼠标右键-新增npm支持)
- 新增idea以及APP的TypeScript支持(工程鼠标右键-新增typescript支持)
- 新增idea自动编译typescript文件等
- 新增idea中readRes开头函数行标图标，点击可打开res的对应文件
- 优化require函数 
- 优化部分功能
```

### 1.2.0

**发布日期: 2024-12-05**

```text showLineNumbers
- 新增投屏设备列表关闭无线链接功能
- 新增useOpenMat函数内部初始化opencv
- 新增getLastToast函数获取toast数据
- 更改投屏默认点击为多点触摸方式
- 优化部分功能
```

### 1.0.0

**发布日期: 2024-12-03**

```text showLineNumbers
- 新增鸿蒙Next中控USB程序
- 新增鸿蒙Next投屏程序
- 新增鸿蒙Next IDEA开发插件
```
