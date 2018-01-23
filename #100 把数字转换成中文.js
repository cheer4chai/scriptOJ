// #100 把数字转换成中文
// 完成将 toChineseNum， 可以将数字转换成中文大写的表示，处理到万级别，例如 toChineseNum(12345)，返回 一万二千三百四十五。

const toChineseNum = (num) => {
    let numToCn = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九']
    let unit = ['', '十', '百', '千'];
    let section = ['', '万'];
    let sectionPos = 0;
    let result = '';
    let piece, needZero = false;

    function toCNum(n) {
        let bitPos = 0,
            rs = '',
            zeroNum = 0;
        while (n > 0) {
            let curNum = n % 10;
            if (curNum === 0) {
                zeroNum++;
                bitPos++;
            } else {
                if (bitPos === zeroNum)
                    zeroNum = 0;
                else if (zeroNum > 0) {
                    rs = '零' + rs;
                    zeroNum = 0;
                }
                rs = numToCn[curNum] + unit[bitPos++] + rs;
            }
            n = Math.floor(n / 10);
        }
        return rs;
    }
    while (num > 0) {
        piece = num % 10000;
        result = toCNum(piece) + section[sectionPos] + (needZero ? "零" : '') + result;
        needZero = piece < 1000 && piece > 0;
        sectionPos++;
        num = Math.floor(num / 10000);
    }
    return result
}