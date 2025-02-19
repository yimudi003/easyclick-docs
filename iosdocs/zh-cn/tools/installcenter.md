---
title: 安装中控程序
description: EasyClick 自动化脚本 iOS免越狱 安装中控程序 资源下载
keywords: [EasyClick 自动化脚本 iOS免越狱 安装中控程序  资源下载 ]
---

:::tip
- 这篇文档已经过期，直接去网盘的iOS资源文件夹-USB版本-下载最新版本的中控，解压即可运行
:::

### 中控程序用途

- 中控程序是用于执行脚本和自动化环境维护的核心


### 下载中控

- 请到资源区的网盘，下载中控程序
- 该程序支持Windows，macos，linux等系统
- 请下载对应的版本, 解压到英文目录，中文目录可能会有不可预计的问题



<img src="/iosimg/dl-ios-center.png" alt="image-20220208110050592" style={{zoom:'50%'}} />

### 启动中控程序

> 这里以Windows 为例


- runtime_config: 是配置文件夹，可以更改站点名称
- OcrLiteNcnn: OCR类库
- win-start-ios-center.bat：Windows的启动中控程序文件，直接双击就能运行
- linux-start-ios-center.sh：linux的启动中控程序文件，需要在终端运行
- macos-start-ios-center.sh：macos的启动中控程序文件，需要在终端运行
- mac下没有带jdk，可以自己安装jdk1.8，Windows和linux都随程序带了jdk1.8版本
- Windows直接双击 exe可执行文件 就可以运行





<img src="/iosimg/dl-ios-center2.png" alt="image-20220320214851172" style={{zoom:'50%'}} />



### 中控配置(可选)

- 如果你修改了agent的源码bundleid，这里一定要进行修改`bundleID`属性，填写agent的bundleID的前缀

<img src="/iosimg/dl-ios-center3.png" alt="image-20220320215029162" style={{zoom:'50%'}} />



### 登录中控
- 中控主界面-个人中心
- 默认是需要登录的，如果你是开发者 请选择开发者身份注册并登录
- 如果是你是普通用户 请选择普通用户注册并登录

<img src="/iosimg/dl-ios-center4.png" alt="image-20220320215118697" style={{zoom:'50%'}} />



### 测试自动化启动状态(可选)

> 如果设备链接了，中控的设备监控会自动出现
> 选择设备 - 操作 - 测试自动化状态 

<img src="/iosimg/dl-ios-center5.png" alt="image-20220208112514521" style={{zoom:'50%'}} />



> 点击测试启动自动化
>
> 一般很快就可以启动

<img src="/iosimg/dl-ios-center6.png" alt="image-20220208112853175" style={{zoom:'50%'}} />


### 执行脚本

> 中控界面上，鼠标右键，选择执行脚本，选择iec文件即可
> 
<img src="/iosimg/dl-ios-center7.png" alt="image-20220208112853175" style={{zoom:'50%'}} />

