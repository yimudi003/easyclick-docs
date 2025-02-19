---
title: YOLO函数
description: EasyClick 自动化脚本 iOS免越狱 YOLO函数 YOLO函数
keywords: [ EasyClick 自动化脚本 iOS免越狱 YOLO函数 YOLO函数 ]
---

## 说明

- [YOLO使用说明](/docs/zh-cn/advance/yolov8) 请看安卓版本的，训练教程都是一样

## yolov8Api.newYolov8 初始化yolov8实例

* 初始化yolov8实例
* 适配EC 脱机 4.3.0+
* @return  `Yolov8Util` 对象

```javascript showLineNumbers
function main() {
    // 初始化YOLO实例
    let yolov8s = yolov8Api.newYolov8();
    // 初始化配置选项
    let config = yolov8s.getDefaultConfig("yolov8s-640", 640, 0.25, 0.35, "ALL", 0, [
        "aixin",
        "pinglun"
    ])
    // 设置占用CPU线程数量，越小 占用CPU越少，不设置默认是4，建议设置为1或者2
    config["num_thread"] = 1;
    logd("config : " + JSON.stringify(config))
    // 初始化 训练过的模型
    // 这里仅仅是是做演示的，例如把模型文件放到脚本的res目录
    // 运行的时候复制到手机的存储，进行使用  也可以从 网络下载
    let param = file.getSandBoxFilePath("model.ncnn.param")
    let bin = file.getSandBoxFilePath("model.ncnn.bin")
    let img1 = file.getSandBoxFilePath("1.png")
    let img2 = file.getSandBoxFilePath("2.png")
    saveResToFile("model.ncnn.param", param)
    saveResToFile("model.ncnn.bin", bin)
    // 模拟复制测试图片
    saveResToFile("1.png", img1)
    saveResToFile("2.png", img2)

    let inted = yolov8s.initYoloModel(config, param, bin);
    if (inted) {
        logd("初始化yolov8s成功");
    } else {
        logd("初始化yolov8s失败: " + yolov8s.getErrorMsg());
        return;
    }
    // 读图片
    let bitmap = image.readImage(img1);
    // 或者 开启自动化服务后  抓屏幕图片
    //let bitmap = image.captureFullScreenEx({type:1,quality:100})
    let result = yolov8s.detectImage(bitmap, []);
    // 或者用 
    // let img = image.readImage("c:/a.png")
    // let result2 = yolov8s.detectImage("c:/a.png", [])
    image.recycle(bitmap);
    // 这个带参数的代表只过滤pinglun的分类数据
    //let result = yolov8s.detectBitmap(bitmap, ["pinglun"]);
    if (result == null || result == "") {
        logd("yolov8s 无结果: " + yolov8s.getErrorMsg());
    } else {
        logd("yolov8s 结果: " + result);
    }
    // 在需要的时候释放，不要用一次释放一次
    yolov8s.release();
}

main();
```

## Yolov8Util.getDefaultConfig 获取 yolov8 默认配置

* 获取 yolov8 默认配置
* 适配EC 脱机 4.3.0+
* @param model_name 模型名称 默认写 yolov8s-640 即可
* @param input_size yolov8训练时候的imgsz参数，默认写640即可
* @param box_thr 检测框系数，默认写0.25即可
* @param iou_thr 输出系数，，默认写0.35 即可
* @param bind_cpu 是否绑定CPU，选项为ALL,BIG,LITTLE 三个,默认写ALL
* @param use_vulkan_compute 是否启用硬件加速，1是，0否 默认写0即可
* @param obj_names JSON数组，训练的时候分类名称例如 ["star","common","face"]
* @return JSON数据

```text
   代码例子请看 `初始化yolov8实例`
```

## Yolov8Util.initYoloModel 初始化yolov8模型

* 初始化yolov8模型
* 具体如何生成param和bin文件，请参考文件的yolo使用章节，通过yolo的pt转成ncnn的param、bin文件
* 适配EC 脱机 4.3.0+
* @param map 参数表 参考 getDefaultConfig函数获取默认的参数
* @param paramPath param文件路径
* @param binPath bin文件路径
* @return boolean true代表成功 false代表失败

```text
   代码例子请看 `初始化yolov8实例`
```

## Yolov8Util.detectBitmap 检测图片

* 检测图片 UIImage 的 iOS图片对象
* 适配EC 脱机 4.3.0+
* 返回数据例如
* `[{"name":"heart","confidence":0.92,"left":957,"top":986,"right":1050,"bottom":1078}]`
* name: 代表是分类，confidence:代表可信度，left,top,right,bottom代表结果坐标选框
* @param bitmap 安卓的bitmap对象
* @param obj_names JSON数组，不写代表不过滤，写了代表只取填写的分类
* @return string 字符串数据

```text
   代码例子请看 `初始化yolov8实例`
```

## Yolov8Util.detectImage 检测AutoImage

* 检测图片
* 适配EC 脱机 4.3.0+
* 返回数据例如
* `[{"name":"heart","confidence":0.92,"left":957,"top":986,"right":1050,"bottom":1078}]`
* name: 代表是分类，confidence:代表可信度，left,top,right,bottom代表结果坐标选框
* @param image AutoImage对象
* @param obj_names JSON数组，不写代表不过滤，写了代表只取填写的分类
* @return string 字符串数据

```text
   代码例子请看 `初始化yolov8实例`
```

## Yolov8Util.release 插入数据

* 释放yolov8资源
* 适配EC 脱机 4.3.0+
* @return boolean

```text
   代码例子请看 `初始化yolov8实例`
   释放函数在脚本结束的的时候释放，无需要每次使用都释放
```

## Yolov8Util.getErrorMsg 获取YOLOV8错误消息

* 获取YOLOV8错误消息
* 适配EC 脱机 4.3.0+
* @return string 字符串

```text
   代码例子请看 `初始化yolov8实例`
```
