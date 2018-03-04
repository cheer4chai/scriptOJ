// 题目：有一个二维数组(n*n),写程序实现从右上角到左下角沿主对角线方向打印。 
// 给定一个二位数组arr及题目中的参数n，请返回结果数组。

// 测试样例： 
// [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]] , 4

// 返回：[4,3,8,2,7,12,1,6,11,16,5,10,15,9,14,13]

function printer(arr) {
    var rows = arr.length;
    var cols = arr[0].length;
    var total = rows + cols -1;
    var result = [];
    for (var i=0;i<total;i++) {
        var j = 0;
        while(j<rows && cols-i+j-1<cols){
            arr[j][cols-i+j-1]?result.push(arr[j][cols-i+j-1]):'';
            j++;
        }
        
    }
    return result
}