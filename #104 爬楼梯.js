// 爬楼梯类型,共rest阶楼梯,一次最多爬maxSpan阶，共有多少种走法？
function stair(rest, maxSpan) {
    var count = 0;
    if (rest === 0) {
        return 1;
    }
    if (rest >= maxSpan) {
        for (let i = 1; i <= maxSpan; i++) {
            count += stair(rest - i, maxSpan)
        }
    } else {
        count += stair(rest, rest);
    }
    return count
}

//本质为斐波那契数列问题