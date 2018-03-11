// 节流的原理很简单：

// 如果你持续触发事件，每隔一段时间，只执行一次事件。

// 根据首次是否执行以及结束后是否执行，效果有所不同，实现的方式也有所不同。
// 我们用 leading 代表首次是否执行，trailing 代表结束后是否再执行一次。

// 关于节流的实现，有两种主流的实现方式，一种是使用时间戳，一种是设置定时器。

//1.时间戳

function throttle(func, wait) {

    var lastTime = 0;
    return function() {
        var nowTime = + new Date();
        var context = this;
        var arg = arguments;
        if(nowTime - lastTime > wait) {
            func.apply(context,arg);
            lastTime = now;
        }
    }
}

//2.定时器
function throttle(func, wait) {
    var timeout;

    return function() {
        var context = this;
        var arg = arguments;
        if(!timeout) {
            timeout = setTimeout(function() {
                timeout = null;
                func.apply(context,arg)
            },wait)
        }
    }
}

//完善

function throttle(func, wait) {
    var lastTime = 0;
    var timeout, context, args, result;

    var later = function() {
        lastTime = +new Date();
        timeout = null;
        func.apply(context, args)
    }

    var throttled = function() {
        var now = +new Date();
        //计算可以触发下一个func剩余时间
        var remaining = wait - (now - lastTime);
        context = this;
        args = arguments;
        if(remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(context, args);
        } else if(!timeout) {
            timeout = setTimeout(later, remaining)
        }
    }
    return throttled;
}