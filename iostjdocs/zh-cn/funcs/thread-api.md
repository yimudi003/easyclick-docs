---
title: 线程函数
description: EasyClick 自动化脚本 iOS免越狱  线程函数 资源下载
keywords: [ EasyClick 自动化脚本 iOS免越狱 线程函数 资源下载 ]
---

## 说明
:::tip
  - iOS的js引擎天生是单线程模式，无法实现多线程。这里的thread底层实现是多jsvm虚拟机模式
  - 多jsvm代表这启动多个不同的js虚拟机，在iOS进程中运行，相互之间进程数据是隔离的。
  - 这里的线程是worker模块的简化版，可以直接执行代码片段的，比worker模块简单好用
  - 该模块从EC 脱机版本5.0.0+开始适配
:::



## thread.execCodeAsync 异步执行代码块

* 异步执行代码块
* 这个是封装好的，直接使用即可
* @param name 线程名称
* @param func 代码块
* @param callbackName 回调的函数名称
* @param callbackFunc 回调 函数
* @return `{string}` 返回的线程名称

```javascript showLineNumbers
function main() {
  // 子线程无法访问外部的变量，
  // 最好的方式 是 在一个js文件中写好业务逻辑，在线程中 直接调用，所有操作都在写得好的js文件中完成
  thread.execCodeAsync("thread1", function () {
    while (!isScriptExit()) {
      sleep(1000)
      logd("sub thread " + new Date())
      var url = "http://baidu.com";
      var pa = {"b": "22"};
      var x = http.httpGet(url, pa, 10 * 1000, {"User-Agent": "test"});
      logd(" result-    " + x);
      // 调用f1函数
      let backdata = thread.invokeCallback("f1", "百度的数据:" + x)
      logd("backdata " + backdata)
    }
  }, "f1", function (name, data) {
    logd("callback " + data)
    return "ok->"
  })
  let timex = 0
  while (!isScriptExit()) {
    logd("main " + new Date())
    sleep(1000)
    timex = timex + 1000
    if (timex > 8000) {
      break
    }
  }
  // 5秒后结束线程
  thread.cancelThread("thread1")
  thread.stopAll();
  sleep(1000)
  logd("thread1 cancel " + thread.isCancelled("thread1"))
  // 或者使用cancelThread
  // thread.cancelThread("thread1")
}

main();
```






## thread.invokeCallback 调用回调函数

* 调用 addCallback 设置的函数 ，通过funcName先找到，然后进行调用
* @param funcName 回调函数名称
* @param data 回调数据
* @return `{*}` 函数返回的数据

```javascript showLineNumbers
function main() {
    // 请看 thread.execCodeAsync 函数例子
}

main();
```


## thread.newThread 新的线程

* 创建一个新的线程封装类
* @param name 线程名称，不填写会自动生成随机数
* @return `{ThreadClient|null}`

```javascript showLineNumbers
function main() {
  let name = "thread2";
  let th = thread.newThread(name)
  // 增加回调，可以不写
  th.addCallback("f1", function (name, data) {
    logd("callback " + data)
    return "ok"
  });
  //异步执行
  th.execAsync(function () {
    var url = "http://baidu.com";
    var pa = { "b": "22" };
    var x = http.httpGet(url, pa, 10 * 1000, { "User-Agent": "test" });
    
    let backdata = thread.invokeCallback("f1",x)
    logd("backdata "+backdata)
    
  });
  sleep(5000);
  logd("结束 ");
}

main();
```
### addCallback 增加回调函数
- 在线程对象上, 增加回调函数
- @param name 函数名
- @param func 回调函数
```javascript showLineNumbers
function main() {
  // 请看 thread.newThread 函数例子
}

main();
```

## thread.cancelThread 取消线程

* 取消线程的执行
* @param t 线程对象ID
* @return boolean

```javascript showLineNumbers
function main() {
  // 请看 thread.execCodeAsync 函数例子
}

main();
```
## thread.stopAll 停止所有线程

* 取消所有正在运行的线程

```javascript showLineNumbers
function main() {
    // 请看 thread.execCodeAsync 函数例子
}

main();
```
## thread.isCancelled 取消判断

* 取消线程的执行
* @param t 线程对象ID
* @return boolean true代表已经取消了，false表示未取消

```javascript showLineNumbers
function main() {
  // 请看 thread.execCodeAsync 函数例子
}
main();
```
