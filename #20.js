/*#20 正则表达式删除两端多余空白字符

完成正则表达式 TRIM_REGX，可以用它来删除一个字符串前后多余的空白字符。

例如：

' ScriptOJ   '.replace(TRIM_REGX, '') // => ScriptOJ
注意：你只需要完成正则表达式的编写。*/

const TRIM_REGX = /(^\s+)|(\s+$)/g