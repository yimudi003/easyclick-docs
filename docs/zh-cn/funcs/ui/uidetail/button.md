---
title: Button按钮
description: EasyClick 自动化脚本 android免root Button按钮
keywords: [EasyClick 自动化脚本 android免root Button按钮]
---


## 说明
按钮
## 使用示例
```xml showLineNumbers
 <Button android:layout_height="wrap_parent"
             android:layout_width="match_parent"
             android:tag="btn"
             android:text="按钮"
             android:textColor="#669999"
             android:textSize="14dp"
             android:gravity="center"
/>
```

## 属性说明

### 公有属性
请参考 [公有属性](/zh-cn/funcs/ui/ui-native-view.md#公有属性)

### 私有属性

| 属性名 | 说明 | 可选值 |
| :------: | :------: | :------: |
| layout_weight | 子元素权重 | 数字<br/>当父级为LinearLayout的时候，子控件可以设置权重|
| gravity | 内部的控件对齐方式 |[用法参考](https://blog.csdn.net/gaojinshan/article/details/44917205)<br/>top<br/>bottom<br/>left<br/>right<br/>center_vertical<br/>fill_vertical<br/>center_horizontal<br/>fill_horizontal<br/>center<br/>fill<br/>clip_vertical<br/>clip_horizontal<br/> |
| text | 按钮文字 | 字符串 |
| textColor | 文字颜色 | 16进制，例如#FFFFFF |
| textSize | 文字大小 | 具体数字+dp |
| maxLength | 文字最大长度 | 具体数字 |
