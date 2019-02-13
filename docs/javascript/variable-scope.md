---
id: variable-scope
title: 变量、作用域和内存
sidebar_label: 变量、作用域和内存
---

## 引用类型判断
使用`instanceof`操作符检测基本类型的值，则该操作符始终会返回 false，因为基本类型不是对象
```js
var a = [], b = {}, c = new RegExp(), d = function () {}
a instanceof Array // true
a instanceof Object // true
b instanceof Object // true
c instanceof Object // true
c instanceof RegExp // true
d instanceof Object // true
```

## 垃圾收集
JavaScript中最常用的垃圾收集方式是**标记清除**，变量进入环境时标记为“进入环境”，离开环境时标记为“离开环境”
另一种不太常见的垃圾收集策略叫**引用计数**，引用计数的含义是跟踪记录每个值被引用的次数，引用次数为0的值在垃圾收集器下次运行时会释放其内存
