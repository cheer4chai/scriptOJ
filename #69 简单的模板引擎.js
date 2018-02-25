// #69 简单的模版引擎
// 模版引擎是在前端是非常常用的一种工具。请你完成一个简单的模版引擎的 render 函数，它可以接受模版字符串和一个数据对象作为参数。函数执行返回渲染以后的模版字符串，例如：

// const templateStr = `
// <ul class="users">
//   <% users.forEach((user) => { %>
//     <li class="user-item">
//       <%= 'My name is ' + user.name %>
//     </li>
//   <% }) %>
// </ul>
// `

// const data = {
//   users: [
//     { name: 'Jerry', age: 12 },
//     { name: 'Lucy', age: 13 }, 
//     { name: 'Tomy', age: 14 }
//   ]
// }

// render(templateStr, data)
// /*返回结果：

// <ul class="users">
//   <li class="user-item">
//     My name is Jerry
//   </li>
//   <li class="user-item">
//     My name is Lucy
//   </li>
//   <li class="user-item">
//     My name is Tomy
//   </li>
// </ul>

// */
// <% 和 %> 之间可以放置任意的 JavaScript 代码，而 <%= 和 %> 之间执行任意的 JavaScript 表达式并且输出在模版上；传入的 data 可以作为模版引擎执行的上下文进行数据的引用，请你完成 render 函数。

// （提示：你可以结合 执行任意表达式 来实现）

var render = (template, data) => {
    const result =
        `var p=[];with(data){p.push('` + template
        .replace(/[\r\n\t]/g, '')
        .replace(/<%=(.*?)%>/g, `');p.push($1);p.push('`)
        .replace(/<%/g, `');`)
        .replace(/%>/g, `;p.push('`) +
        `');} p.join('');`;
    return result
    return eval(result);
}

const spliter = /\<\%.*?\%\>/g

const render = (template, data) => {
    const plain = template.split(spliter)
    const dynamic = template.match(spliter).map(str => str.startsWith(`<%=`) ? `yield(${str.slice(3, -2).trim()})` : str.slice(2, -2).trim())
    const code = plain.map((txt, i) => i in dynamic ? `yield(${JSON.stringify(txt)})\n${dynamic[i]}\n` : `yield(${JSON.stringify(txt)})\n`).join('')
    const params = Object.getOwnPropertyNames(data)
    const output = []
    new Function(...params, "yield", code)(...params.map(name => data[name]), t => output.push(t))
    return output.join('')
}

// new Function(...params, "yield", code) 

// function(...params,yield) {
//     plain.map((txt, i) => i in dynamic ? `yield(${JSON.stringify(txt)})\n${dynamic[i]}\n` : `yield(${JSON.stringify(txt)})\n`).join('')
// }