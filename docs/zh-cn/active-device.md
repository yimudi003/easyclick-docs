---
title: EasyClick安卓文档_安卓手机自动化脚本_激活设备
hide_title: false
hide_table_of_contents: false
sidebar_label: 激活安卓设备
description: EasyClick手机自动化脚本,激活安卓设备的方式，包括OTG激活、电脑激活、USB激活、IDEA激活
keywords: [EasyClick,手机自动化脚本,自动化软件,EasyClick脚本激活,otg激活设备,USB激活代理]
---

# 激活安卓设备

## IDEA开发工具激活
- 进入IDEA，选择EasyClick开发工具 - 激活设备 - 激活模式1或者激活模式2 点击即可
- 打开EasyClick运行日志，如果提示激活成功就可以了
<br/>
<img src='/androidimg/idea-active.png' width='400' />
<br/>
<img src='/androidimg/idea-active-ok.png' width='400' />

## APP激活自己
- 开启设备的USB 调试
- 开启设备的ADB WIFI 调试
- 进入EC APK的系统设置页面，点击激活自己
- 进入后会自动激活，如果弹出USB授权，请勾选 一律允许，点击同意<br/>
<img src='/androidimg/active-usb-debug.png' width='200' />
<br/>
- 激活成功<br/>
<img src='/androidimg/active-self-ok.png' width='200' />
<br/>
- 当1，2条件满足了，可以调用脚本activeSelf函数激活自己
- 手动开启ADB WIFI: [https://www.jianshu.com/p/a9543f2e89de](https://www.jianshu.com/p/a9543f2e89de)
- 修改ROM永久开启ADB，可以百度一下
- 可以使用独立的批量打开ADB WIFI程序


## 电脑批量激活

- 到下载EasyClick开发插件的网盘，下载批量激活工具，解压后，直接运行对应的exe程序即可
<br/>
<img src='/androidimg/pc-active.png' width='400' />

## 设备激活其他设备

- 演示视频 https://www.bilibili.com/video/BV1zA411L7hy
- 名词解释：EC安装上的手机简称为A， 被激活的手机简称为B
- 使用一根OTG数据线，EC安装到手机A上
- 将OTG数据线公头连接到手机A，母头连接手机B，打开EC系统设置 - 激活其他设备，会自动扫描并激活
- 如果手机B弹出USB授权，请同意即可
## 操作教程

- 打开OTG
<br/>
<img src='/androidimg/otg-open.jpg' width='400' />

- 认识OTG数据线
<br/>
<img src='/androidimg/otg-usb.png' width='400' />


- 链接设备
<br/>
<img src='/androidimg/otg-con.png' width='400' />



- 如有USB调试框弹出，请运行
<br/>
<img src='/androidimg/otg-usb-dev.png' width='400' />

- 激活传输文件
<br/>
<img src='/androidimg/otg-file.png' width='400' />

- 激活成功
<br/>
<img src='/androidimg/ot-acive-ok.png' width='400' />

- 如果中间连接不上设备，可以拔插数据线多试一次



## 无障碍保活
- 进入IDEA，选择EasyClick开发工具 - 激活保活设备 -无障碍保活
- 输入打包后的apk包名

## 批量开启ADB WIFI
- 进入IDEA，选择EasyClick开发工具 - 激活保活设备 -批量开启ADB WIFI 调试





## ROM内置激活器

- 1、下载V1.12.0-EC激活设备-无障碍保活.zip，解压，找到agent文件夹下面的手机cpu对应的激活二进制文件（百度查看cpu是arm还是x86的）
- 2、将文件放入到手机中的某个目录。例如 /data/local/tmp/agent
- 3、使用adb命令执行adb shell /data/local/tmp/agent -mode=runagent -dport=19901,19902,19903 --password=123 & 即可后台运行
        - password : 密码
        - dport : 运行端口号，请写多个，用,号隔开

- 4、使用adb shell netstat -ant 如果有运行的 19901端口 代表成功
- 5、如果是ROM直接拉起二进制文件，可以将文件放在/system/bin/下面, 开机启动命令/system/bin/agent -mode=runagent -dport=19901,19902,19903 --password=123 & 即可后台运行

