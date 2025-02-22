---
title: 脱机无线中控投屏教程
description: EasyClick 自动化脚本 iOS脚本,iOS免越狱,iOS免硬件 iOS免越狱 脚本函数 资源下载
keywords: [EasyClick自动化脚本,iOS脚本,iOS免越狱,iOS免硬件,脚本函数,资源下载 ]
---
:::tip
中控投屏需要win10以及以上系统，如果运行不了请运行安装MicrosoftEdgeWebview2Setup.exe这个程序
:::
## 下载软件
- 下载地址：[资源区](/iostjdocs/zh-cn/tools/download_resources)
- 在网盘进入开发包 - iOS资源 - 脱机版本 - 脱机无线投屏中控 文件夹, 下载对应版本的文件夹压缩文件即可
  <img src="/index/tjc/1.png" width="300"/>
- 下载压缩文件后解压，里面 EasyClick脱机无线投屏.exe 代表是投屏程序，EasyClick脱机无线中控.exe代表是中控程序，可以根据需要进行启动

## 安装IPA
- 在网盘进入开发包 - iOS资源 - 脱机版本文件夹，下载高于v3.8.0的IPA主程序(easyclick-tj-main开头的)和代理程序(easyclick-tj-agent开头)
- 代理程序不支持免费的appleid签名，主程序支持，签名后可以通过爱思或者其他安装软件安装到手机中
- 签名问题可以群里找签名商或者自己有P12证书自己签名，也可以去论坛搜索 使用牛蛙或者轻松签完成签名动作

## 设备授权
- 无线投屏功能是需要授权后才能使用，可以联系官方或者代理商购买卡号
- USB插入电脑，打开中控，点击 ***授权初始化*** 按钮,即可进行授权
<br/><img src="/index/tjc/4.png" width="300"/>
- 如果不会初始化，可以参考脱机版本激活器教程，这个功能和激活器是一模一样的使用方式
  [激活器初始化设备教程](/iostjdocs/zh-cn/advance/tjcenter#初始化设备)

## 链接中控
- 启动中控或者投屏，需要自己 **注册账户并登录**，界面右上角
- 如果有多个网卡，会提示选择网卡，请选择和你手机处于同一个局域网的网卡，否则可能链接不上
  <br/><img src="/index/tjc/2.png" width="300"/>
- 点击 ***局域网扫描*** 按钮，等待设备链接，如果没有设备链接可以 点击***刷新列表*** 按钮  
- 如果以上动作设备依然无法识别，请在手机上打开主程序，进入设置界面，找到中控投屏设置
- 填写你的中控所在的电脑IP+8025端口号，填写后保存，杀死主程序进程，然后重新打开主程序，例如：<br/>
  <img src="/index/tjc/3.png" width="300"/>

## 运行脚本
- 中控或者投屏点击 ***执行脚本*** 按钮，然后选择一个脚本iec文件,也可以选择脚本的附加参数，这样就能够不用写UI，直接获取参数,点击执行按钮即可
<br/>
  <img src="/index/tjc/5.png" width="500"/>
- 执行脚本实时查看日志
  <br/>
  <img src="/index/tjc/6.png" width="500"/>
## 投屏操作
- 进入投屏程序，点击投屏按钮，即可投屏,前提是设备授权正常，自动服务也正常
  <br/>
  <img src="/index/tjc/7.png" width="500"/>
- 设置主控
  - 可以小屏幕上面鼠标移动到回形针按钮，设置主屏，这样即可将某个设备设置为主屏
- 同步操作
  - 在主屏幕上面选中 ***控*** 这个按钮，即可进行同步操作
    <br/>
    <img src="/index/tjc/8.png" width="500"/>
- 上传图片视频
  - 选择***上传图片***或者***上传视频***按钮
  - 选择图片或者视频文件，再进行发送即可  
    <br/>
    <img src="/index/tjc/9.png" width="500"/>
## 激活脱机授权
### 授权管理
- 左侧工具栏 - 授权管理按钮
### 激活手机授权信息
- 左侧工具栏 - 授权初始化按钮，使用起来和 脱机激活器一样的 [激活器初始化设备](/iostjdocs/zh-cn/advance/tjcenter#初始化设备)
## 常见问题
### 无法投屏
  - 自动未启动，手机上点击代理程序启动自动化
  - 授权问题，点击***授权管理***，对设备进行授权，然后点击更新授权，看下授权时间是否正确
### 授权问题
  - 跑脚本需要购买脱机设备授权，投屏需要购买脱机投屏授权
  - 跑脚本购买了脱机设备授权，也可以使用中控，但是只能使用执行脚本、停止脚本、参数管理、分组等功能，投屏无法使用
