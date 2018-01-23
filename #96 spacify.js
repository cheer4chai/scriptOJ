// #96 spacify
// 请你给字符串都添加上原型方法 spacify，可以让一个字符串的每个字母都多出一个空格的间隔：

// "ScriptOJ".spacify() // => "S c r i p t O J"

String.prototype.spacify = function() {
    return this.split('').join(' ')
}