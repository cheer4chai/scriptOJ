// 现在有一批手机，其中颜色有［'白色','黑色','金色','粉红色'］；内存大小有［'16G','32G','64G','128G'］，版本有［'移动','联通','电信'］，要求写一个算法，实现［［'白色','16G','移动'］, ['白色','16G','联通'] ...］这样的组合，扩张，如果后面还有参数，比如再加一个［'国行','港版','美版'］，不改程序一样可以执行！
console.time("测试 fn1 速度: ")

var garr = [
    ['a', 'b', 'c'],
    ['1', '2', '3'],
    ['x', 'y', 'z'],
]

function doExchange(arr) {
    if (arr.length > 2) {
        let len1 = arr[0].length;
        let len2 = arr[1].length;
        let newLen = len1 * len2;
        let items = new Array(newLen);
        let index = 0;
        for (let i = 0; i < len1; i++) {
            for (let j = 0; j < len2; j++) {
                items[index] = arr[i] + '|' + arr[j];
                index++;
            }
        }
        var newArr = new Array(arr.length - 1);
        for (let i = 2; i < arr.length; i++) {
            newArr[i - 1] = arr[i]
        }
        newArr[0] = items;
        return doExchange(newArr);
    } else {
        return arr[0];
    }
}
doExchange(garr)
console.timeEnd("测试 fn1 速度: ")

console.time("测试 fn2 速度: ")

function doExchange2(arr, depth) {
    for (var i = 0; i < arr[depth].length; i++) {
        result[depth] = arr[depth][i]
        if (depth != arr.length - 1) {
            doExchange2(arr, depth + 1)
        } else {
            results.push(result.join('|'))
        }
    }
}

function test(arr) {
    results = [];
    result = [];
    doExchange2(arr, 0);
    console.log(results.length, results.join(','));
}
var garr = [
    ['a', 'b', 'c'],
    ['1', '2', '3'],
    ['x', 'y', 'z'],
]
test(garr)
console.timeEnd("测试 fn2 速度: ")