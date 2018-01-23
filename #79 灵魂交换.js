// #79 灵魂交换
// 有两个不同的人，他们有不同的灵魂（prototype）。

// class A {
//   constructor (name) {
//     this.name = name
//   }
//   sayHi () {
//     return `I am ${this.name}.`
//   }
// }

// class B {
//   constructor (name) {
//     this.name = name
//   }
//   sayHi () {
//     return `This is ${this.name}.`
//   }
// }


// const a = new A('Jerry') 
// const b = new B('Lucy')

// a.sayHi() // => 'I am Jerry.'
// b.sayHi() // => 'This is Lucy.'

// a instanceof B // => false
// b instanceof A // => false
// 请你完成 exchange，传入两个对象，可以交换他们的灵魂：

// exchange(a, b)
// a.sayHi() // => 'This is Jerry.'
// b.sayHi() // => 'I am Lucy.'

// a instanceof B // => true
// b instanceof A // => true
// 注意不要触碰到这两个对象原来的类，例如：

// exchange(a, b)
// a.sayHi() // => 'This is Jerry.'
// b.sayHi() // => 'I am Lucy.'

// const c = new A('Tomy')
// c.sayHi() // => 应该返回 'I am Tomy.'
// 你也不能使用 __proto__ 属性。

const exchange = (a, b) => {
    let ap = a.constructor.prototype
    Object.setPrototypeOf(a, b.constructor.prototype)
    Object.setPrototypeOf(b, ap)
}