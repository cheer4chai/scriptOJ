//在前端开发中会遇到一些频繁的事件触发，比如：window 的 resize、scroll、mousedown、mousemove、keyup、keydown
//防抖的原理即：你尽管触发事件，但是我一定在事件触发 n 秒后才执行，如果你在一个事件触发的 n 秒内又触发了这个事件，那我就以新的事件的时间为准，n 秒后才执行，总之，就是要等你触发完事件 n 秒内不再触发事件，我才执行，真是任性呐!

function debouce(func, wait, immediate) {
    var timeout, result;
    return function () {
        var context = this;
        var args = arguments;

        if (timeout) {
            clearTimeout(timeout);
        }
        if (immediate) {
            var callNow = !timeout;
            timeout = setTimeout(function () {
                timeout = null;
            }, wait)
            if (callNow) result = func.apply(context, args)
        } else {
            timeout = setTimeout(function () {
                func.apply(context, args)
            }, wait);
        }
        return result;
    }
}