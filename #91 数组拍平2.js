// #91 数组拍平（二）
// 编写一个 JavaScript generator 函数，接受一个仅包含数字的 多维数组 ，返回一个迭代器，可以遍历得到它拍平以后的结果。例如：

// const numbers = flatten2([1, [[2], 3, 4], 5])
// numbers.next().value // => 1
// numbers.next().value // => 2
// numbers.next().value // => 3
// numbers.next().value // => 4
// numbers.next().value // => 5

function* flatten2(arr) {
    for (let i of arr) {
        Array.isArray(i) ? yield* flatten2(i) : yield i
    }
}