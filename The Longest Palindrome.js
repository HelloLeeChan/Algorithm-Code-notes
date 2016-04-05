/**
 * Created by licheng on 16/4/5.
 */

var jishu = 0
function findPalindrome(str){
    String.prototype.reverse = function(){
        return this.split('').reverse().join('')
    }
    String.prototype.splice = function(i,n,c){
        var that = this.split('')
        that.splice(i,n,c)
        return that.join('')
    }
    function judge(str){
        if(str === str.reverse()){
            return true
        }
        else{
            return false
        }
    }
    var  stop = false

    function del(str,c){
   // console.log(jishu++)
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
            //ex
            var str = str
            var len = str.length
            for(var j = 0;j<len&&!stop;j++){
                // console.log(j)
                var count = c
                mystr = str.splice(j,1)
               // console.log('C: '+count+'str: '+mystr+' J: '+j)
                del(mystr,--count)

            }
        }
        else{
            var num = 1
            console.log ('end')
            throw new error('error argument')
        }
    }

    var i = 0
    while (i < str.length && !stop ){
            del(str,i)
        i++
       // console.log('last:'+i)
    }
}

findPalindrome('abbacc')
