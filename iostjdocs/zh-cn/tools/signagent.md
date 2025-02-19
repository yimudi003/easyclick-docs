---
title: 安装主程序和代理ipa
description: EasyClick 自动化脚本 iOS免越狱 iOS免硬件 iOS脚本 安装代理ipa 资源下载
keywords: [EasyClick 自动化脚本 iOS免越狱 iOS免硬件 iOS脚本 安装代理ipa  资源下载 ]
---
:::tip
- 脱机版本支持iOS 15+版本，低于这个版本不用尝试了,支持 15 - 18+
- 代理IPA签名可以使用苹果付费开发者账户申请的证书或者企业签名或者巨魔等
:::
## 下载主程序
- 到资源区的网盘下载主程序压缩包 [资源区地址](/iostjdocs/zh-cn/tools/download_resources)
- 找到网盘目录下载 **easyclick-ios-脱机版本安装包-源码.zip**，
  里面包含了主程序、代理程序打好的ipa和代理的xcode工程源码,后缀的1.0.0代表是当前发布的版本号<br/>  
  <img src="/iostjimg/download_main_zip.png" alt="download_main_zip" style={{zoom:'30%'}} />
- 解压 **easyclick-ios-脱机版本安装包-源码.zip**,可以得到三个文件
    - easyclick-tj-main-1.0.0.ipa
      - 脱机版的主程序
    - easyclick-tj-agent-1.0.0.ipa
      - 脱机版代理程序
    - easyclick-tj-agent-source-1.0.0.zip
      - 脱机版代理程序源码xcode工程

## 签名主程序并安装
- 主程序是正常的应用，支持个人免费账户签名、开发者签名、企业签名等
- 正常开发调试可以使用个人免费账户签名即可
- 可以使用爱思签名，sideloadly签名,自行下载签名工具: sideloadly官网 [https://sideloadly.io/](https://sideloadly.io/)
- 理论上主程序也是支持 TrollStore永久签名工具 进行免费签名的，具体可以自己百度，软件的用法
- 签名主程序后，爱思或者其他工具安装ipa到手机后即可
- 安装后手机上会有**易点云测**图标，打开app：<br/>  
  <img src="/iostjimg/tj-index.jpg" alt="tj-index.jpg" style={{zoom:'30%'}} />
### 主程序授权
- 地理位置授权,首次运行会弹出请求你的位置，点击使用期间允许
- 进入手机的设置，找到易点云测，点击进入<br/>
  <img src="/iostjimg/tj-sys-setting.jpg" alt="tj-setting.jpg" style={{zoom:'30%'}} />
- 如下图，位置选择始终允许，后台App刷新选择允许，无线数据选择 WLAN与蜂窝网络,Siri与搜索全部选择允许 <br/>
<img src="/iostjimg/tj-ec-auth.jpg" alt="tj-setting.jpg" style={{zoom:'30%'}} />
## 签名代理程序并安装
- 代理程序IPA比较特殊，市面上的爱思等可能无法签名完成，可以到EC论坛搜索**签名**关键字，寻找在线签名方案
- 如果是使用代理程序的源码，直接使用xcode运行到手机即可,具体可以参考 **EasyClick iOS USB版** 代理签名方案，链接地址: [/iosdocs/zh-cn/tools/signagent](/iosdocs/zh-cn/tools/signagent)
- 把代理程序安装都手机上后,点击图标，手机系统上会出现 **Automation Running** 白色字样，只要出现了，说明代理程序是正常的
- 巨魔也可以进行签名了，具体可以论坛搜索 巨魔  关键字 http://bbs.ieasyclick.com
- 下一步安装开发插件进行开发吧

