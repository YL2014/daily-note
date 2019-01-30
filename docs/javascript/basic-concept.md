---
id: basic-concept
title: 基本概念
sidebar_label: 基本概念
---

## 数据类型

es5有5中简单数据类型（也称为基本数据类型）：Undefined、 Null、Boolean、Number、String，还有一种复杂数据类型Object。
es6引入了新的原始数据类型Symbol，表示独一无二的值，也是JavaScript语言的第七种数据类型

### Symbol
```js
let s = Symbol()
typeof s // 'symbol'
```
尽管函数不是一种数据类型，不过函数调用typeof操作符会返回'function'，可以用来区分函数和其他对象。

### Null & Undefined
```javascript
typeof null // 'object' null为控对象指针，故返回'object'

var age
typeof age // 'undefined'
typeof message // 'undefined' 未声明也是undefined

null == undefined // true 类似的值
null === undefined // false 类型不同
```

### Number
```js
0/0 // NaN
1/0 // Infinity
-1/0 // -Infinity

```
在基于对象调用 isNaN()函数时，会首先调用对象的 valueOf()方法，然后确定该方法返回的值是否可以转换为数值。如果不能，则基于这个返回值再调用 toString()方法，再测试返回值。而这个过程也是 ECMAScript 中内置函数和操作符的一般执行流程

### String
数值、布尔值、对象和字符串值都有 toString()方法。但 null 和 undefined 值没有这个方法
```js
1.toString() // Uncaught SyntaxError: Invalid or unexpected token
var a = 1
a.toString() // '1'
Number(1).toString() // '1'
null.toString() // Uncaught TypeError: Cannot read property 'toString' of null
String(null) // 'null'
```

## 逗号操作符
```js
var num = (5, 1, 4, 8, 0) // 0，在用于赋值时，逗号操作符总会返回表达式中的最后一项
```

## for in
遍历对象，如果是数组，则 `key` 为数组的索引
如果表示要迭代的对象的变量值为 `null` 或 `undefined`， es5开始不执行循环体，遍历前最好检查类型

## with
with 语句的作用是将代码的作用域设置到一个特定的对象中
```js
with(location){
  var qs = search.substring(1);
  var hostName = hostname;
  var url = href;
}
```
> 大量使用with会导致性能下降，调试困难，不建议使用