// 实现一个函数 where，它返回它被调用的时候所在的函数的名字，例如：

// function main () {
//   where() // => 'main'
// }

// function a () {
//   function b () {
//     where() // => 'b'
//   }
//   b()
// }

// main()
// a()
function where() {
    return where.caller.name
}