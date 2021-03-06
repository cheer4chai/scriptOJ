// 字符串匹配。给你两个字符串，寻找其中一个字符串是否包含另一个字符串，如果包含，返回包含的起始位置。

    function kmpGetStrPartMatchValue(str) {
      var prefix = [];
      var suffix = [];
      var partMatch = [];
      for (var i = 0, j = str.length; i < j; i++) {
        var newStr = str.substring(0, i + 1);
        if (newStr.length == 1) {
          partMatch[i] = 0;
        } else {
          for (var k = 0; k < i; k++) {
            //取前缀
            prefix[k] = newStr.slice(0, k + 1);
            suffix[k] = newStr.slice(-k - 1);
            if (prefix[k] == suffix[k]) {
              partMatch[i] = prefix[k].length;
            }
          }
          if (!partMatch[i]) {
            partMatch[i] = 0;
          }
        }
      }
      return partMatch;
    }



function KMP(sourceStr, searchStr) {
    //生成匹配表
    var part         = kmpGetStrPartMatchValue(searchStr);
    var sourceLength = sourceStr.length;
    var searchLength = searchStr.length;
    var result;
    var i = 0;
    var j = 0;

   for (; i < sourceStr.length; i++) { //最外层循环，主串

        //子循环
        for (var j = 0; j < searchLength; j++) {
            //如果与主串匹配
            if (searchStr.charAt(j) == sourceStr.charAt(i)) {
                //如果是匹配完成
                if (j == searchLength - 1) {
                  result = i - j;
                  break;
                } else {
                  //如果匹配到了，就继续循环，i++是用来增加主串的下标位
                  i++;
                }
            } else {
              //在子串的匹配中i是被叠加了
              if (j > 1 && part[j - 1] > 0) {
                i += (i - j - part[j - 1]);
              } else {
                //移动一位
                i = (i - j)
              }
              break;
            }
        }

        if (result || result == 0) {
          break;
        }
    }


    if (result || result == 0) {
      return result
    } else {
      return -1;
    }
}

  var s = "BBC ABCDAB ABCDABCDABDE";
  var t = "ABCDABD";


 show('indexOf',function() {
    return s.indexOf(t)
  })

  show('KMP',function() {
    return KMP(s,t)
  })

  function show(bf_name,fn) {
    var myDate = +new Date()
    var r = fn();
    var div = document.createElement('div')
    console.log(bf_name +'算法,搜索位置:' + r + ",耗时" + (+new Date() - myDate) + "ms");
  }
