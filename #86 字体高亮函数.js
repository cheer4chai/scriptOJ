// #86 字体高亮函数
// 请你完成 highlight 函数，可以把模版字符串中的插入内容替换掉，并且插入文档以后显示红色。例如：

// const yourName = 'ScriptOJ'
// const myName = 'Jerry'
// document.body.innerHTML = highlight`Hello, ${yourName}. I am ${myName}.`

// 请你完成 highlight 函数的编写

const highlight = (literals, ...values) => {
    let output = '';
    for (let index = 0; index < literals.length - 1; index++) {
        output += `${literals[index]}<span class="red">${values[index]}</span>`
    }
    return output;
}