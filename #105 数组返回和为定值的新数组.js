// 对于一个数组，纯数字，求和等于m
// import{arr,num,sum} getSum([3,1,2,8,5,11,6,45],4,16)
// export{newArr}   [3,2,5,6]

function getSum(arr, num, sum) {
    var result = result || [];
    if(num === 2) {
        let i = 0;
        let j = arr.length;
        while(i<j) {
            if(arr[i] + arr[j] === sum) {
                result.push(arr[i],arr[j]);
                i=j
            }else if(arr[i] + arr[j] < sum) {
                i++;
            }else{
                j++;
            }
        }
        return result;
    }
}

function getcombinationAndMatched(initval,array,targetValue,someGroup){
    var result=[];
    var matched=[];
    var startIndex;
    if(someGroup.index.length===0){
        startIndex=-1;
    }else{
        startIndex=someGroup.index[someGroup.index.length-1];
    }
    for(var i=startIndex+1;i<array.length;i++){
        if(initval+array[i]<=targetValue) {
            if(initval+array[i]===targetValue){
                matched.push(someGroup.index.slice(0).concat([i]));
                someGroup.value=targetValue;
                someGroup.index.push(i);
            }else{
                result.push({
                    value:initval+array[i],
                    index:someGroup.index.slice(0).concat([i])
                });
            }
        }else{
            break;
        }

    }
    return {
        matched:matched,
        result:result
    }
}

function getMatchedGroup(groupArray,orgArray,targetValue){
    var matched=[];
    for(var q=0;q<groupArray.length;q++){
        var groupResult=getcombinationAndMatched(groupArray[q].value,orgArray,targetValue,groupArray[q]);
        matched=matched.concat(groupResult.matched);
        if(groupResult.result.length!=0){
            var _matched_=getMatchedGroup(groupResult.result,orgArray,targetValue);
            matched=matched.concat(_matched_);
        }
    }

    return matched;

}


var orgArray=[1,2,3,4,5,6,7,8,9,20,30];
var targetValue=41;
orgArray.sort(function(a, b) {
    return a - b;
});
var subArray=[];
var findIndex=orgArray.findIndex(function(item){
    return item>targetValue;
});

if(findIndex===-1){
    subArray=orgArray;
}else{
    subArray=orgArray.slice(0,findIndex);
}

var result=getMatchedGroup([{
    value:0,
    index:[]
}],subArray,targetValue);
//console.log(result);

result.forEach(function(item){
   console.log(item.map(function(valueIndex){
       return orgArray[valueIndex];
   }).join(','));
});