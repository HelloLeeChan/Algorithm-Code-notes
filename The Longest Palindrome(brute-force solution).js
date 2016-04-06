/**
 * Created by licheng on 16/4/5.
 */


function findPalindrome(str){
    // extend String method to reverse the character like Array
    String.prototype.reverse = function(){
        return this.split('').reverse().join('')
    }
    // extend String method to splice(delete) the character like Array
    String.prototype.splice = function(index,num,insert){
        var that = this.split('')
        that.splice(index,num,insert)
        return that.join('')
    }

    //if a string is a palindrome
    function judge(str){
        if(str === str.reverse()){
            return true
        }
        else{
            return false
        }
    }
    // wether to continue the function
    var  stop = false

    // the function to enumerate the charater to be deleted
    // c is the number of characters to be deleted
    function del(str,c){
        if(c ===0 && !stop){
            if(judge(str)){
                stop = true
                console.log('Got it:'+str.length +' '+str)
                return str.length
            }
        }
        else if(c === 1 && !stop){
            var string = str
            var strlen = str.length
            for(var i =0;i < strlen;i++){
                var after = string.splice(i,1)
                // console.log(after+'  '+ i)   //ex
                if(judge(after)){
                    stop = true
                    console.log('Got it:'+after.length +' '+after)
                    return after.length
                }
            }
        }
        else if(c > 1 && !stop){
            var str = str
            var len = str.length
            for(var j = 0;j<len&&!stop;j++){
                // console.log(j)
                var count = c
                mystr = str.splice(j,1)
               // console.log('Count: '+count+'str: '+mystr+' J: '+j)
                del(mystr,--count)

            }
        }
        else{
            throw new error('error argument')
        }
    }

//enumerate the number of characters to be deleted
    var i = 0
    while (i < str.length && !stop ){
            del(str,i)
        i++
    }
}

findPalindrome('abbaccsf')
