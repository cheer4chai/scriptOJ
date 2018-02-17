/*
编写一个 JavaScript 函数 uniqueNums，该函数有一个参数 n（一个不大 31 的整数），其返回值是一个数组，该数组内是 n 个随机且不重复的整数，且整数取值范围是 [2, 32]。

请你完成 uniqueNums 的编写。*/

const uniqueNums = (n) => {
    if(n>31) {return [];}
    let arr = [];
    while(n>arr.length) {
        let num = Math.floor(Math.random()*31+2)
        if(arr.indexOf(num)<0) {
            arr.push(num)
        }
    }
    return arr
}

//优雅
const uniqueNums = (n) =>
    [...(new Array(31)).keys()]
        .map((i) => i + 2)
        .sort(() => Math.random() - Math.random())
        .slice(0, n)