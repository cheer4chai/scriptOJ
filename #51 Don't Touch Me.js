// #51 Don't Touch Me
// Tomy 非常敏感，不喜欢别人碰他的东西。一旦有人碰他就会大喊 Don't Touch Me.。

// 完成 tomy 这个对象，禁止对 tomy 的内容进行修改（增加、修改、删除）。一旦有人对 tomy 进行任何的修改，都用 console.log 打印 Don't Touch Me.。

const tomy = new Proxy({},{
    set: function(target, key, value, receiver) {
        console.log("Don't Touch Me.")
    },
    deleteProperty: function(target, propKey) {
        console.log("Don't Touch Me.")
    }
})