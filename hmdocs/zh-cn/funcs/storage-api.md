---
title: 存储函数
description: EasyClick 自动化脚本 鸿蒙Next自动化 存储函数
keywords: [ EasyClick 自动化脚本 鸿蒙Next自动化 存储函数 ]
---

## 说明

- 存储模块函数主要是存储相关数据，key-value结构
- 工具类模块的对象前缀是 storages，例如 storages.create()这样调用

## 创建存储对象

### storages.create 创建存储

* 创建存储对象

* @param name 存储对象名称
* @return `{StorageApiWrapper}` 存储对象实例

```javascript showLineNumbers
function main() {
    let storage = storages.create("123");
    logd(storage);
}

main();
```

## 存储数据

### storage.keys 所有key获取

* 所有key获取

* @return `{string}` JSON字符串

```javascript showLineNumbers
function main() {
    let storage = storages.create("123");
    logd(storage);
    //存储数据
    let r = storage.putString("key", "sdfasfd");
    logd(r);
    logd(storage.keys());
}

main();
```

### storage.all 获取所有的key和值

* 获取所有的key和值
* @return `{string}` JSON字符串

```javascript showLineNumbers
function main() {
    let storage = storages.create("123");
    logd(storage);
    //存储数据
    let r = storage.putString("key", "sdfasfd");
    logd(r);
    logd(storage.all());
}

main();
```

### storage.putString 存储字符串

* 存储字符串
* @param key 键
* @param value 字符串
* @return `{bool}` true成功 false 失败

```javascript showLineNumbers
function main() {
    let storage = storages.create("123");
    logd(storage);
    //存储数据
    let r = storage.putString("key", "sdfasfd");
    logd(r);
    //获取数据,暂时有bug,需 +""
    logd(storage.getString("key", "") + "");
}

main();
```

### storage.putInt 存储整型数据

* 存储整型数据

* @param key 键
* @param value 整型数据
* @return `{bool}` true成功 false 失败

```javascript showLineNumbers
function main() {
    let storage = storages.create("123");
    logd(storage);
    //存储数据
    let r = storage.putInt("key", 1);
    logd(r);
    //获取数据
    logd(storage.getInt("key", 0));
}

main();
```

### storage.putBoolean 存储布尔型数据

* 存储布尔型数据
* @param key 键
* @param value 布尔型数据
* @return `{bool}` true成功 false 失败

```javascript showLineNumbers
function main() {
    let storage = storages.create("123");
    logd(storage);
    //存储数据
    let r = storage.putBoolean("key", true);
    logd(r);
    //获取数据
    logd(storage.getBoolean("key", false));
}

main();
```

### storage.putFloat 存储浮点型数据

* 存储浮点型数据
* @param key 键
* @param value 浮点型数据
* @return `{bool}` true成功 false 失败

```javascript showLineNumbers
function main() {
    let storage = storages.create("123");
    logd(storage); //存储数据 
    // let r = storage.putFloat("key", 1.0);
    logd(r); //获取数据 
    // logd(storage.getFloat("key", 0)); 
}

main();
```

## 获取数据

### storage.getString 获取字符串数据

* 获取字符串数据
* @param key 键
* @return `{string}` 字符串

```javascript showLineNumbers
function main() {
    let storage = storages.create("123");
    logd(storage); //存储数据 
    let r = storage.putString("key", "sdfasfd");
    logd(r); //获取数据,暂时有bug,需 +""
    logd(storage.getString("key", "") + "");
}

main();
```

### storage.getInt 获取整型数据

* 获取整型数据
* @param key 键
* @return `{string}` 整型

```javascript showLineNumbers
function main() {
    let storage = storages.create("123");
    logd(storage);
    //存储数据
    let r = storage.putInt("key", 1);
    logd(r);
    //获取数据
    logd(storage.getInt("key", 0));
}

main();
```

### storage.getBoolean 获取布尔型数据

* 获取布尔型数据
* @param key 键
* @return `{string}` 布尔型

```javascript showLineNumbers
function main() {
    let storage = storages.create("123");
    logd(storage);
    //存储数据
    let r = storage.putBoolean("key", true);
    logd(r);
    //获取数据
    logd(storage.getBoolean("key", false));
}

main();
```

### storage.getFloat 获取浮点型数据

* 获取浮点型数据
* @param key 键
* @return `{string}` 浮点型

```javascript showLineNumbers
function main() {
    let storage = storages.create("123");
    logd(storage); //存储数据 
    let r = storage.putFloat("key", 1.0);
    logd(r); //获取数据 
    logd(storage.getFloat("key", 0));
}

main();
```

## 清理和其他

### storage.clear 清空存储

* 清空存储
* @return `{bool}` true成功 false 失败

```javascript showLineNumbers
function main() {
    let storage = storages.create("123");
    logd(storage);
    //存储数据 
    let r = storage.putEncrypt("key", "3232");
    logd(r); //获取数据 
    logd(storage.getDecryptString("key"));
    logd(storage.clear());
    logd(storage.getDecryptString("key"));
}

main();
```

### storage.remove 移出key对应的值

* 移出key对应的值
* @return `{bool}` true成功 false 失败

```javascript showLineNumbers



function main() {
    let storage = storages.create("123");
    logd(storage);
    //存储数据 
    let r = storage.putEncrypt("key", "3232");
    logd(r);
//获取数据 
    logd(storage.getDecryptString("key"));
    logd(storage.remove("key"));
    logd(storage.getDecryptString("key"));
}

main();
```

### storage.contains 是否包含某个key

* 是否包含某个key
* @return `{bool}` true成功 false 失败

```javascript showLineNumbers
function main() {
    let storage = storages.create("123");
    logd(storage); //存储数据 let r = storage.putEncrypt("key", "3232");
    logd(r);
    //获取数据
    logd(storage.getDecryptString("key"));
    logd(storage.contains("key"));
    logd(storage.getDecryptString("key"));
}

main();
```
