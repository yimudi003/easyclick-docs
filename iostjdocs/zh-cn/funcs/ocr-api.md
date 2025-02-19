---
title: OCR识别
description: EasyClick 自动化脚本 iOS免越狱 OCR识别 资源下载
keywords: [ EasyClick 自动化脚本 iOS免越狱 OCR识别 资源下载 ]
---


:::tip

- OCR模块是属于对图像进行识别
- OCR模块的对象前缀是ocr，例如 ocr.initOcr()这样调用
- 目前的OCR包含了 appleVision
- 3.18.0+ 新增了ocrMut作为多实例模式的ocr前缀
  :::

## 单实例模式

### ocr.initOcr 初始化

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
    let appleVision = {"type": "appleVision", "level": "accurate", "languages": "zh-Hans,en-US"}
    let inited = ocr.initOcr(appleVision)
    logd("初始化结果 -" + inited);
    if (!inited) {
        loge("error : " + ocr.getErrorMsg());
        return;
    }
    i

    for (var ix = 0; ix < 20; ix++) {

        //读取一个bitmap
        let img = image.captureFullScreen();
        if (img == null || img == undefined || img.uuid == null || img.uuid == undefined || img.uuid == "") {
            loge("读取图片失败");
            continue;
        }
        console.time("1")
        logd("start---ocr");
        // 对图片进行识别
        let result = ocr.ocrImage(img, 20 * 1000, {});
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
        image.recycle(img)
        sleep(1000);
        logd("ix = " + ix)
    }
    //释放所有资源
    ocr.releaseAll();
}

main();
```

### ocr.ocrImage 识别文字

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
* @return `{JSON}` JSON对象

```javascript showLineNumbers
代码例子常见
OCR初始化
```

### ocr.getErrorMsg 获取错误消息

* 获取OCR错误消息
*
* @return `{string}` null代表没有错误

```javascript showLineNumbers
代码例子常见
OCR初始化
```

### ocr.releaseAll 释放OCR资源

* 释放OCR占用的资源
*
* @return `{bool}` 成功或者失败

```javascript showLineNumbers
代码例子常见
OCR初始化
```

## 多实例模式

### ocrMut.initOcr 初始化

* 初始化OCR模块
* @param map map参数表
* key分别为：
* type : OCR类型，值分别为 appleVision = ios自带的Vision模块 ocrLite=ncnn神经网络的ocrLite paddleOcrOnline =
  EC自带的PC端的paddleOcr服务程序<br/>
* 如果类型是 appleVision, 参数设置为 : ```{"type":"appleVision","level":"fast","languages":"zh-Hans,en-US"}```<br/>
* level: fast,代表快速的，accurate:代表精准的<br/>
* languages: 识别的语言，默认是zh-Hans,en-US中文简体和英文，<br/>
* 支持的有 ```["en-US", "fr-FR", "it-IT", "de-DE", "es-ES", "pt-BR", "zh-Hans", "zh-Hant"]```<br/>
* 如果类型设置是: `ocrLite`，参数为:<br/>

```json showLineNumbers
   {
  "type": "ocrLite",
  "padding": 10,
  "maxSideLen": 0,
  "boxScoreThresh": 0.6,
  "boxThresh": 0.3,
  "unClipRatio": 1.6,
  "doAngle": 0,
  "mostAngle": 0
}
```

```text
*  padding 图像外接白框，用于提升识别率，文字框没有正确框住所有文字时，增加此值。默认50。<br/>
*  maxSideLen 按图像长边进行总体缩放，放大增加识别耗时但精度更高，缩小减小耗时但精度降低，maxSideLen为0表示不缩放。<br/>
*  boxScoreThresh 文字框置信度门限，文字框没有正确框住所有文字时，减小此值 <br/>
*  boxThresh 同上，自行试验。<br/>
*  unClipRatio 单个文字框大小倍率，越大时单个文字框越大。<br/>
*  doAngle 启用(1)/禁用(0) 文字方向检测，只有图片倒置的情况下(旋转90~270度的图片)，才需要启用文字方向检测，默认关闭。<br/>
*  mostAngle 启用(1)/禁用(0) 角度投票(整张图片以最大可能文字方向来识别)，当禁用文字方向检测时，此项也不起作用，默认关闭。<br/>
```

* 如果类型设置为: `paddleOcrOnline` 请到网盘中下载**EasyClick-PaddleOcr.zip文件解压运行**<br/>

```json showLineNumbers
  {
  "type": "paddleOcrOnline",
  "ocrType": "ONNX_PPOCR_V3",
  "padding": 50,
  "maxSideLen": 0,
  "boxScoreThresh": 0.5,
  "boxThresh": 0.3,
  "unClipRatio": 1.6,
  "doAngleFlag": 0,
  "mostAngleFlag": 0
}
```

```text
*  ocrType : 模型 ONNX_PPOCR_V3,ONNX_PPOCR_V4,NCNN_PPOCR_V3
*  serverUrl：paddle ocr服务器地址，可以在其他电脑部署，然后中控链接，例如 192.168.2.8:9022，部署在电脑就改ip地址即可，端口是 9022 可以不写
*  padding 图像外接白框，用于提升识别率，文字框没有正确框住所有文字时，增加此值。默认50。<br/>
*  maxSideLen 按图像长边进行总体缩放，放大增加识别耗时但精度更高，缩小减小耗时但精度降低，maxSideLen为0表示不缩放。<br/>
*  boxScoreThresh 文字框置信度门限，文字框没有正确框住所有文字时，减小此值 <br/>
*  boxThresh 同上，自行试验。<br/>
*  unClipRatio 单个文字框大小倍率，越大时单个文字框越大。<br/>
*  doAngleFlag 启用(1)/禁用(0) 文字方向检测，只有图片倒置的情况下(旋转90~270度的图片)，才需要启用文字方向检测，默认关闭。<br/>
*  mostAngleFlag 启用(1)/禁用(0) 角度投票(整张图片以最大可能文字方向来识别)，当禁用文字方向检测时，此项也不起作用，默认关闭。<br/>
*  limit 代表每1秒执行ocr请求个数 默认1000。可以适当降低减少cpu占用<br/>
*  checkImage 检查数据是否是图像(1是 0否)默认关闭。<br/>
```

* @return `{bool}` 布尔型 成功或者失败

```javascript showLineNumbers
function main() {

    logd("开始执行脚本...")

    // 初始化一个实例
    let ocrtest = ocrMut.newOcr();
    let vision = {"type": "appleVision", "level": "accurate", "languages": "zh-Hans,en-US"}
    //paddleOcr参数
    let paddleOcrOnline = {
        "type": "paddleOcrOnline",
        "ocrType": "ONNX_PPOCR_V3",
        "serverUrl": "192.168.2.13:9022",
        "limit": 12,
        "checkImage": "1",
        "padding": 200
    }
    let ocrLite = {"type": "ocrLite"}

    let inited = ocrtest.initOcr(ocrLite)
    if (!inited) {
        loge("inited ocr error : " + ocrtest.getErrorMsg())
        return
    } else {
        logd("ocr inited ok")
    }
    for (let i = 0; i < 3; i++) {
        let img = image.captureFullScreen()
        let ocrResult = ocrtest.ocrImage(img, 20000, null)
        logd("ocrResult " + JSON.stringify(ocrResult));
        if (ocrResult) {
            logd("ocr结果-》 " + JSON.stringify(ocrResult));
            for (var j = 0; j < ocrResult.length; j++) {
                var value = ocrResult[j];
                logd("文字 : " + value.label + " x: " + value.x + " y: " + value.y + " width: " + value.width + " height: " + value.height);
            }
        } else {
            logw("未识别到结果");
        }
        image.recycle(img)

        sleep(2000)
    }
    //脚本运行完成了释放即可 不需要每次用完都释放
    ocrtest.releaseAll()
}

main();
```

### ocrMut.ocrImage 识别文字

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
* @return `{JSON}` JSON对象

```javascript showLineNumbers
代码例子常见
OCR初始化
```

### ocrMut.getErrorMsg 获取错误消息

* 获取OCR错误消息
*
* @return `{string}` null代表没有错误

```javascript showLineNumbers
代码例子常见
OCR初始化
```

### ocrMut.releaseAll 释放OCR资源

* 释放OCR占用的资源
*
* @return `{bool}` 成功或者失败

```javascript showLineNumbers
代码例子常见
OCR初始化
```

## PaddleOcrOnline Http调用

- 低于3.18.0+的EC，可以通过HTTP方式调用ocr
- 前提是需要下载**EasyClick-PaddleOcr.zip文件解压运行**

```javascript showLineNumbers
function httpPaddleOcr(filePath) {
    // ocr的服务地址
    // 其他参数参考上面的说明
    let url = "http://192.168.2.13:9022/devapi/uploadOcr"
    let ocrType = "ONNX_PPOCR_V3"
    let limit = "1000"
    let ocrParam = {
        "padding": 50,
        "maxSideLen": 0,
        "boxScoreThresh": 0.5,
        "boxThresh": 0.3,
        "unClipRatio": 1.6,
        "doAngleFlag": 0,
        "mostAngleFlag": 0
    }
    ocrParam = utils.base64Encode(JSON.stringify(ocrParam));
    let param = {
        "ocrType": ocrType,
        "limit": limit,
        "ocrParam": ocrParam
    };
    let files = {
        "file": filePath
    }
    let result = http.httpPost(url, param, files, 20 * 1000, {"User-Agent": "test"});
    if (result == null || result == undefined || result == "") {
        return null;
    }

    try {
        result = JSON.parse(result)
        return result["data"]
    } catch (e) {
        return null;
    }

}

function callPaddleOcrTest() {
    let img = image.captureFullScreen()
    if (!img) {
        loge("截图失败");
        return
    }
    let filePath = file.getSandBoxFilePath("ocrtmp.jpg")
    image.saveTo(img, filePath)
    let result = httpPaddleOcr(filePath);
    logd("result " + JSON.stringify(result));


}

callPaddleOcrTest()
```

