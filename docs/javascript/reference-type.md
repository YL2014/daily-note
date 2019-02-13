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

### 属性和方法

- length: 参数的长度

- prototype: ECMAScript中的引用类型，`prototype` 是保存它们所有实例方法的真正所在，诸如`toString()`和`valueOf()`等方法实际上都保存在`prototype` 名下，只不过是通过各自对象的实例访问罢了。在ECMAScript 5 中，`prototype` 属性是不可枚举的，因此使用`for-in` 无法发现

- call, apply, bind

- 每个函数继承的`toLocaleString()`和`toString()`方法始终都返回函数的代码。返回代码的格式则因浏览器而异。另外一个继承的`valueOf()`方法同样也只返回函数代码。

## 基本包装类型

Boolean、Number、String

每当读取一个基本类型值的时候，后台就会创建一个对应的基本包装类型的对象，从而让我们能够调用一些方法来操作这些数据

引用类型与基本包装类型的主要区别就是对象的生存期。使用new 操作符创建的引用类型的实例，在执行流离开当前作用域之前都一直保存在内存中。而自动创建的基本包装类型的对象，则只存在于一行代码的执行瞬间，然后立即被销毁。这意味着我们不能在运行时为基本类型值添加属性和方法

### Boolean

```js
var falseObject = new Boolean(false)
var falseValue = false

alert(typeof falseObject); //object
alert(typeof falseValue); //boolean
alert(falseObject instanceof Boolean); //true
alert(falseValue instanceof Boolean); //false
```

### Number

```js
var numberObject = new Number(10)
var numberValue = 10

alert(typeof numberObject); //"object"
alert(typeof numberValue); //"number"
alert(numberObject instanceof Number); //true
alert(numberValue instanceof Number); //false
```

### String

```js
var stringValue = "hello world";
alert(stringValue.slice(3)); //"lo world"
alert(stringValue.substring(3)); //"lo world"
alert(stringValue.substr(3)); //"lo world"
alert(stringValue.slice(3, 7)); //"lo w"
alert(stringValue.substring(3,7)); //"lo w"
alert(stringValue.substr(3, 7)); //"lo worl"
```