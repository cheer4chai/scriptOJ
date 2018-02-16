/**
 * 完成 cookieJar 单例，它有三个方法：

 set(name, value, days)：设置 cookie 的值，days 为多少天以后过期。
 get(name)：获取 cookie 的值。
 remove(name)：删除 cookie 的值。
 （本题来源：阿里巴巴前端笔试题）
 */

const oneDaySecond = 1000 *　60 * 60 * 24;

const cookieJar = {
    set (name, value, days) {
        let sCookie = name+'='+value+';';
        if (days!=0) {
            let nowDate = new Date();
            nowDate.setTime(nowDate.getTime() + parseInt(days) * oneDaySecond );
            sCookie += "expires=" + nowDate.toUTCString() + ";";
        }
        document.cookie = sCookie;
    },
    get (name) {
        let cookie = document.cookie;
        let reg = new RegExp(`${name}=([^;]+)`)
        var result=reg.exec(cookie)
        return result[1];
    },
    remove (name) {
        this.set(name, '', -1)
    }
}
