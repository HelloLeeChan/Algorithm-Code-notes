/**
 * Created by licheng on 16/4/5.
 */


function logestPalindrome(str){
    if(!str){
        throw new error('no string')
    }
    if(str.length === 1){
        return 1
    }
    function helper(string,begin,end){
        while(begin >= 0 && end <= string.length-1 && string[begin] === string[end]){
            begin--
            end++
        }
        return string.substring(begin+1,end)
    }
    var longest = str.substring(0,1)
    for(var i = 0; i <str.length ; i++){
         var tmp = helper(str,i,i)
        if(tmp.length > longest.length){
            longest = tmp
            //console(tmp)
        }
        //console.log(i)
        tmp = helper(str,i,i+1)
        //console.log(tmp)
        if(tmp.length >longest.length){
            longest = tmp
        }
    }
    return longest.length

}
console.log(logestPalindrome('abba'))