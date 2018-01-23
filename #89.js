// #89 数组去重
// 编写一个函数 unique(arr)，返回一个去除数组内重复的元素的数组。例如：

// unique([0, 1, 2, 2, 3, 3, 4]) // => [0, 1, 2, 3, 4]
// unique([0, 1, '1', '1', 2]) // => [0, 1, '1', 2]

const unique = (arr) => {
    let result = []
    for (let index = 0; index < arr.length; index++) {
        result.indexOf(arr[index]) === -1 && result.push(arr[index])
    }
    return (result)
}

//使用新特性
const unique = (arr) => [...new Set(arr)];