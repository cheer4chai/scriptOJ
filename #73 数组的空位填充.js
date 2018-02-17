/*
JavaScript 数组有空位的概念，也就数组的一个位置上没有任何的值。例如：

[ , , 'Hello'] // => 0, 1 都是空位, 3 不是空位
空位并不等于 undefined 或者 null。一个位置上如果是 undefined 那么它依然有值，例如 [, , undefined]，0 和 1 都是空位，而 2 不是空位。

请你完成一个函数 fillEmpty，它接受一个数组作为参数，可以把数组里面的所有空位都设置为 'Hello'，例如：

const a = [, , null, undefined, 'OK', ,]
fillEmpty(a)
// a 变成 ['Hello', 'Hello', null, undefined, 'OK', 'Hello']
注意，你要原地修改原先的数组，而不是返回一个新的数组。*/

const fillEmpty = (arr) => {
    [...arr].map((item, index) => index in arr?'':arr[index]='Hello')
}
