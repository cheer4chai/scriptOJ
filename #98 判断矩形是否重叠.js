// 主页   题目   判断两个矩形是否重叠
// #98 判断两个矩形是否重叠
// 用一个对象的数据来表示一个矩形的位置和大小：

// {
//   x: 100,
//   y: 100,
//   width: 150,
//   height: 250
// }
// 它表示一个宽为 150 高为 250 的矩形在页面上的 (100, 100) 的位置。

// 请你完成一个函数 isOverlap 可以接受两个矩形作为参数，判断这两个矩形在页面上是否重叠。例如：

// const rect1 = { x: 100, y: 100, width: 100, height: 100 }
// const rect2 = { x: 150, y: 150, width: 100, height: 100 }
// isOverlap(rect1, rect2) // => true

const isOverlap = (rect1, rect2) => {
    let r1 = rect1.x > rect2.x + rect2.width || rect1.y > rect2.y + rect2.height;
    let r2 = rect2.x > rect1.x + rect1.width || rect2.y > rect1.y + rect1.height;
    return !(r1 || r2);
}