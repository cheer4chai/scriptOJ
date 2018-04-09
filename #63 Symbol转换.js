// 请你完成 convertSymbolToNormalStr 函数，它会把一个键全是 Symbol 的对象转换成键全是 String 的对象，而同时值保持不变。例如：

// convertSymbolToNormalStr({ [Symbol('name')]: 'Jerry' }) // => { name: 'Jerry' }

const convertSymbolToNormalStr = obj => {
    Object.getOwnPropertySymbols(obj).forEach(symbol => {
        (typeof obj[symbol] === 'object') && convertSymbolToNormalStr(obj[symbol]);
        let key = symbol.toString().match(/\((.*)\)/)[1];
        obj[key] = obj[symbol];
        delete obj[symbol]
    })
    return obj
}