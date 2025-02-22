---
title: 安装桥接程序[非必选]
description: EasyClick 自动化脚本 iOS免越狱 安装桥接程序 资源下载
keywords: [EasyClick 自动化脚本 iOS免越狱 安装桥接程序  资源下载 ]
---

:::tip
- 这篇文档已经过期，直接去网盘的iOS资源文件夹-USB版本-下载最新版本的中控，解压即可运行
:::
  
:::tip
下载中控程序会自带桥接，如果你不是分布式部署，跳过这个章节，直接下载中控即可
:::

### 桥接程序用途

> 桥接重新是链接手机和中控程序的中间桥梁，也是核心部件



### 下载桥接程序

> 请到资源区的网盘，下载中控程序
>
> 该程序支持Windows，macos，linux等系统
>
> 请下载对应的版本, 解压到英文目录，中文目录可能会有不可预计的问题



<img src="/iosimg/image-20220320213338751.png" alt="image-20220320213338751" style={{zoom:'50%'}} />







### 启动桥接程序

> 这里以mac系统为例子，Windows系统类似

<img src="/iosimg/image-20220320213531804.png" alt="image-20220320213531804" style={{zoom:'50%'}}/>

- config: 是配置文件夹

- DeveloperDiskImage: ios系统的开发者镜像文件，用于iPhone启动后自动刷入开发者镜像的文件
- ios-bridge :  中控的二进制文件，直接运行



> Windows直接双击 ios-bridge.exe 就可以运行
>
> mac、linux用终端执行
>
> 有8020端口出现 ，代表启动成功
>

<img src="/iosimg/image-20220320213819393.png" alt="image-20220320213531804" style={{zoom:'50%'}} />



### 桥接程序配置(可选)

- 记事本或者editpad++编辑 `config/config.toml`

> ```toml
> [site]
> ### 中控程序部署的地址，支持本机，局域网，以及远程服务器部署
> ### 默认都是本机的地址
> remote = "ws://127.0.0.1:8019"
> 
> ```





### 启动iTunes

- 由于ios的封闭性，请在 Windows上安装`iTunes`，并打开，保证能找到iphone设备

- 启动后即可进入下一个步骤，启动中控程序
