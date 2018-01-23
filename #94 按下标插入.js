// #94 按下标插入
// 现在有一个数组存放字符串数据：

// ['item1', 'item2', 'item3', 'item4', 'item5']
// 有另外一个数组存放一组对象：

// [
//   { content: 'section1', index: 0 },
//   { content: 'section2', index: 2 }
// ]
// 它每个对象表示的是会往原来的数组的 index 坐标插入 content 数据（index 不会重复）：

//        0      1      2      3      4
//      item1  itme2  item3  item4  item5
//     ^             ^ 
//     |             |
//  section1     section2  

// 最后结果是：['section1', 'item1', 'item2', 'section2', 'item3', 'item4', 'item5']
// 请你完成 injectSections 函数，可以达到上述的功能：

// injectSections(
//   ['item1', 'item2', 'item3', 'item4', 'item5'],
//   [
//     { content: 'section1', index: 0 },
//     { content: 'section2', index: 2 }
//   ]
// ) // => ['section1', 'item1', 'item2', 'section2', 'item3', 'item4', 'item5']

const injectSections = (items, sections) => {
    sections.sort(function(a, b) {
        return b.index - a.index;
    })
    sections.forEach(element => {
        items.splice(element.index, 0, element.content)
    });
    return items
}