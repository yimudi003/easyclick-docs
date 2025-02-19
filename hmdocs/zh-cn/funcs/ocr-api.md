---
title: OCR识别
description: EasyClick 自动化脚本 鸿蒙Next自动化 OCR识别 资源下载
keywords: [EasyClick 自动化脚本 鸿蒙Next自动化 OCR识别 资源下载 ]
---

## 说明

- OCR模块是属于对图像进行识别
- OCR模块的对象前缀是ocr，例如 ocr.initOcr()这样调用
- 目前的OCR包含了 ocrLite,TesseractOCR


## ocr.newOcr 实例一个ocr

* 初始化一个ocr实例

```javascript showLineNumbers
function main() {
    let o = ocr.newOcr();
    // 这里做初始化和识别
    o.releaseAll()
}
```


## ocr.initOcr 初始化

* 初始化OCR模块
* @param map map参数表
* key分别为:
    * type : OCR类型，值分别为 ocrLite = ocrLite 模块， tess = tesseractOcr，paddleOcr=百度的飞桨OCR
* 如果类型是 ocrLite, 参数设置为 : `{"type":"ocrLite","cpuType:"","baseDir":""}`,
    * baseDir: ocrLite 类库存放路径，一般会和ec自带在同个目录下,文件夹名称是: OcrLiteNcnn
    * cpuType: 主机的cpu类型，分别是win-lib-cpu-x64，win-lib-cpu-x86,Linux-Lib-CPU,Darwin-Lib-CPU
    * single: 設置為0相当于每個設備都分配一個ocr實例 默认是 1 不同的機器可以是嘗試更改這個參數
    * matMode: 1 代表直接在内存中将图片转成opencv的mat格式，传递给ocr调用，0 代表不转换使用文件的方式
    * 如果baseDir和cpuType不填写，程序会自动查找
* 如果类型是 baiduOnline
    - 参数设置为 : `{"type":"baiduOnline","ak":"xxx","sk":"xx"}`
* 如果类型是:tess
    * 参数设置为: 需要设置 tesseract 的安装路径和tess的路径,<br/>
    * 例子 : `{"type":"tess","baseDir:"d:\\tesseract-ocr","path":"d:\\tesseract-ocr\\tessdata","language":"chi_sim","ocrEngineMode":3}`<br/>
    *  - baseDir: 代表是tesseract安装路径,安装包下载: https://github.com/tesseract-ocr/tesseract/releases 或者官方王下载jTessBoxEditor.zip包含了训练工具和tesseract的dll<br/>
    *  - path: 代表是tesseract 的 tesssdata 文件夹<br/>
    *  - language: 语言数据集文件， 例如 chi_sim.traineddata 代表是中文简体语言，参数就填写 chi_sim,多个可以用+链接，例如:chi_sim+eng+num<br/>
    *  - ocrEngineMode: 识别引擎类型，0 OEM_TESSERACT_ONLY ， 1 OEM_LSTM_ONLY,2 OEM_TESSERACT_LSTM_COMBINED,3 OEM_DEFAULT<br/>
    *  - rilLevel: PageIteratorLevel 参数，-1 自适应， 0: RIL_BLOCK, 1: RIL_PARA, 2: RIL_TEXTLINE, 3: RIL_WORD, 4:RIL_SYMBOL<br/>
* 如果类型设置为: paddleOcr <br/>
*  例子
```json showLineNumbers
{
  "type": "paddleOcr",
  "ocrType":"ONNX_PPOCR_V3",
  "padding": 50,
  "maxSideLen": 0,
  "boxScoreThresh": 0.5,
  "boxThresh": 0.3,
  "unClipRatio": 1.6,
  "doAngleFlag": 0,
  "mostAngleFlag": 0
}
```

```text showLineNumbers
  ocrType : 模型 ONNX_PPOCR_V3,ONNX_PPOCR_V4,NCNN_PPOCR_V3
  serverUrl：paddle ocr服务器地址，可以在其他电脑部署，然后中控链接，默认是 http://127.0.0.1:9022 部署在其他电脑就改ip地址即可，端口保留
  padding 图像外接白框，用于提升识别率，文字框没有正确框住所有文字时，增加此值。默认50。<br/>
  maxSideLen 按图像长边进行总体缩放，放大增加识别耗时但精度更高，缩小减小耗时但精度降低，maxSideLen为0表示不缩放。<br/>
  boxScoreThresh 文字框置信度门限，文字框没有正确框住所有文字时，减小此值 <br/>
  boxThresh 同上，自行试验。<br/>
  unClipRatio 单个文字框大小倍率，越大时单个文字框越大。<br/>
  doAngleFlag 启用(1)/禁用(0) 文字方向检测，只有图片倒置的情况下(旋转90~270度的图片)，才需要启用文字方向检测，默认关闭。<br/>
  mostAngleFlag 启用(1)/禁用(0) 角度投票(整张图片以最大可能文字方向来识别)，当禁用文字方向检测时，此项也不起作用，默认关闭。<br/>
  front 控制台(1)/托盘模式(0) ，默认关闭。<br/>
  daemon 守护ocr服务进程(1)/否(0) 默认关闭。<br/>
  limit 代表每1秒执行ocr请求个数 默认1000。可以适当降低减少cpu占用<br/>
  checkImage 检查数据是否是图像(1是 0否)默认关闭。<br/> 
 ```
* @return `{boolean}` 布尔型 成功或者失败






### tess OCR例子

```javascript showLineNumbers
function main() {
    let tess = {"type": "tess", "path": "d:/tesseract-ocr/tessdata", "baseDir": "d:\\tesseract-ocr"}
    // ocrlite
    let ocrLite = {
        "type": "ocrLite",
        "baseDir": "c:/ec/OcrLiteNcnn",
        "single": 0,
        "cpuType": "win-lib-cpu-x64"
    }


    // 入使用paddleocr，就自己改下参数即可
    let paddleOcr = {
        "type": "paddleOcr",
        "ocrType": "ONNX_PPOCR_V3"
    }

    let tocr = ocr.newOcr()
    let inited = tocr.initOcr(ocrLite)
    logd("初始化结果 -" + inited);
    if (!inited) {
        loge("error : " + tocr.getErrorMsg());
        return;
    }

    for (var ix = 0; ix < 20; ix++) {

        //读取一个bitmap
        let bitmap = image.readBitmap("D:/Screenshot_20210127_152932_com.huawei.android.lau.jpg");
        if (!bitmap) {
            loge("读取图片失败");
            continue;
        }
        console.time("1")
        logd("start---ocr");
        // 对图片进行识别
        let result = tocr.ocrBitmap(bitmap, 30 * 1000, {"matMode": 1});
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
        image.recycle(bitmap)
        sleep(1000);
        logd("ix = " + ix)
    }
    //释放所有资源
    // paddleOcr会关闭ocr程序，如果不考虑关闭 不用调用这个函数
    tocr.releaseAll();
}

main();
```

## ocr.ocrBitmap 识别文字
* 对 BufferedImage 进行OCR，返回的是JSON数据，其中数据类似于与：
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

## ocr.ocrImage 识别文字

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

## ocr.releaseAll 释放OCR资源

* 释放OCR占用的资源
*
* @return `{bool}` 成功或者失败

```javascript showLineNumbers
代码例子常见
OCR初始化
```

