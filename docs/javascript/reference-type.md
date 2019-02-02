---
id: reference-type
title: 引用类型
sidebar_label: 引用类型
---

## Object类型

通过对象字面量定义对象时，实际上不会调用Object构造函数
```js
var obj = new Object()
```

## Array

### 创建数组

```js
Array(20), new Array(20) // length为20
new Array('a', 'b') // 包含2个元素
```

### 检测数组

```js
var a = []
a instanceof Array // true
Array.isArray(a) // true
```

### 转换方法

```js
var a = ['red', 'blue', 'green']
a.toString() // red,blue,green
a.valueOf() // ['red','blue','green']
alert(a.valueOf()) // red,blue,green，alert接受字符串类型参数
alert(a) // red,blue,green
```

### 栈方法 & 队列方法

```js
var a = [1,2,3]
var b = a.push('a') // 4，返回修改后数组长度
var c = a.pop() // a，返回弹出项
var d = a.shift() // 1，移除第一项并返回该项
var e = a.unshift('b', 'c') // 4，返回新数组长度
```

### 重排序方法

```js
var a = [1,2,3]
a.sort((v1, v2) => v2 - v1) // 升序
a.reverse() // 反转
```

### 操作方法

```js
var colors = ["red", "green", "blue", "yellow", "purple"]

// slice基于原数组创建新的数组
colors.slice(1) // ["green", "blue", "yellow", "purple"]
colors.slices(1, 4) // ["green", "blue", "yellow"]

//splice会改变原数组
colors.splice(0, 2) // 删除前两项，返回删除项
colors.splice(2, 0, 'red', 'green') // 从位置2开始插入两项，返回删除项，返回的是空数组
colors.splice(1, 1, 'red', 'purple') // 插入两项，删除一项，返回删除项
```

### 位置方法
位置方法：`indexOf`, `lastIndexOf`

### 迭代方法
```js
every // 每项返回true则返回true，用来查询项是否满足某个条件
filter // 返回true的项组成的数组
forEach
map
some // 任一项返回true则返回true，用来查询项是否满足某个条件
```

### 归并方法
```js
var arr = []
arr.reduce((prev, cur, index, array) => {})
reduceRight // 方向相反
```

## Date

`Date.now()`, `+new Date()`均返回时间的毫秒数
```js
var date1 = new Date(2007, 0, 1); //"January 1, 2007"
var date2 = new Date(2007, 1, 1); //"February 1, 2007"
date1 < date2 // true，日期的比较会调用Date对象的valueOf方法，返回的是日期的毫秒表示
```

## RegExp

需要转义的元字符：`( [ { \ ^ $ | ) ? * + .]}`
其他待整理

## Function

函数是对象，函数名是指向函数对象的指针，和函数不绑定

使用Function构造函数定义函数，最后一个参数始终是函数体，前面的参数则枚举出了新函数的参数
```js
var sum = new Function('num1', 'num2', 'return num1 + num2')
```
不推荐这样定义函数，会导致两次解析，第一次是常规的代码解析，第二次是解析传入的函数体字符串，从而影响性能



