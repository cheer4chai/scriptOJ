// #48 间谍活动
// 国家有重要的任务要托付给你：完成间谍函数 spy，它可以潜伏到任何一个函数当中，监听它们的所有活动。spy 接受一个函数作为参数，返回一个被间谍潜伏以后的函数。

// let america = (a, b) => a + b

// america = spy(america)
// america(1, 2) // => 3
// spy 返回的函数和原来的函数的功能一样，但是它悄悄记录了每一次执行的参数和执行结果，都存放到一个 calls 数组里面：

// america(1, 2)
// america(3, 4)

// america.calls[0].args // => [1, 2]
// america.calls[0].result // => 3

// america.calls[1].args // => [3, 4]
// america.calls[1].result // => 7
// 注意，spy 可以支持潜伏到对象方法当中：

// let user = {
//   name: 'Jerry',
//   getName () {
//     return this.name
//   }
// }

// user.getName = spy(user.getName)
// user.getName() // => 'Jerry'
// user.getName.calls[0].result // => 'Jerry'
// 另外，不要修改被 spy 的函数（你应该返回一个全新的函数），否则会被敌人发现。

const spy = function(fn) {
    let call = [];
    let f = function() {
        let obj = {
            args: [...arguments],
            result: fn.apply(this,arguments)
        }
        call.push(obj);
        return obj.result;
    }
    f.call = call;
    return f;
}