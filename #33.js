// #33 数组拍平
// 编写一个 JavaScript 函数，接受一个仅包含数字的 多维数组 ，返回拍平以后的结果。例如传入：[1, [[2], 3, 4], 5]，返回 [1, 2, 3, 4, 5]。

// （本题来源：阿里巴巴前端笔试题）

const flatten = (arr) => (
    arr.length ? arr.toString().split(',').map(x => parseInt(x)) : []
)