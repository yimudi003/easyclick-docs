---
title: OCR识别-手机内执行
description: EasyClick 自动化脚本 iOS免越狱 OCR识别 资源下载
keywords: [ EasyClick 自动化脚本 iOS免越狱 OCR识别 资源下载 ]
---

## 说明

- OCR模块是属于对图像进行识别
- OCR模块的对象前缀是 ocrAgent，例如 ocrAgent.initOcr()这样调用
- 目前的OCR包含了 appleVision

:::tip

- 这个模块运算是在手机内执行的，数据也是存在手机内
  :::

## ocrAgent.initOcr 初始化

* 初始化OCR模块
* @param map map参数表
* key分别为：
* type : OCR类型，值分别为 appleVision = ios自带的Vision模块
* 如果类型是 appleVision, 参数设置为 : ```{"type":"appleVision","level":"fast","languages":"zh-Hans,en-US"}```<br/>
* level: fast,代表快速的，accurate:代表精准的
* languages: 识别的语言，默认是zh-Hans,en-US中文简体和英文，
* 支持的有 ```["en-US", "fr-FR", "it-IT", "de-DE", "es-ES", "pt-BR", "zh-Hans", "zh-Hant"]```
* @return `{bool}` 布尔型 成功或者失败

- appleVision OCR例子

```javascript showLineNumbers
function main() {
    let appleVision = {
        "type": "appleVision"
    }
    let inited = ocrAgent.initOcr(appleVision)
    logd("初始化结果 -" + inited);
    if (!inited) {
        loge("error : " + ocrAgent.getErrorMsg());
        return;
    }

    for (var ix = 0; ix < 20; ix++) {

        //读取一个bitmap
        let img = imageAgent.captureFullScreen();
        if (!img) {
            loge("读取图片失败");
            continue;
        }
        console.time("1")
        logd("start---ocr");
        // 对图片进行识别
        let result = ocrAgent.ocrImage(img, 20 * 1000, {});
        logd(result)
        if (result) {
            logd("ocr结果-》 " + JSON.stringify(result));
            for (var i = 0; i < result.length; i++) {
                var value = result[i];
                logd("文字 : " + value.label + " x: " + value.x + " y: " + value.y + " width: " + value.width + " height: " + value.height);
            }
        } else {
            logw("未识别到结果");
        }

        logd("耗时: " + console.timeEnd(1) + " ms")
        imageAgent.recycle(img)
        sleep(1000);
        logd("ix = " + ix)
    }
    //释放所有资源
    ocrAgent.releaseAll();
}

main();
```

## ocrAgent.ocrImage 识别文字

* 对 AutoImage 进行OCR，返回的是JSON数据，其中数据类似于与：

```json showLineNumbers
  [
  {
    "label": "奇趣装扮三阶盘化",
    "confidence": 0.48334712,
    "x": 11,
    "y": 25,
    "width": 100,
    "height": 100
  }
]
```

* label: 代表是识别的文字
* confidence：代表识别的准确度
* x: 代表X开始坐标
* Y: 代表Y开始坐标
* width: 代表宽度
* height: 代表高度
* @param bitmap 图片
* @param timeout 超时时间 单位毫秒
* @param extra 扩展参数，map形式，例如 ```{"token":"xxx"}```
* @return `{json}` JSON对象

```javascript showLineNumbers
代码例子常见
OCR初始化
```

## ocr.getErrorMsg 获取错误消息

* 获取OCR错误消息
*
* @return `{string}` null代表没有错误

```javascript showLineNumbers
代码例子常见
OCR初始化
```

## ocrAgent.releaseAll 释放OCR资源

* 释放OCR占用的资源
*
* @return `{bool}` 成功或者失败

```javascript showLineNumbers
代码例子常见
OCR初始化
```

