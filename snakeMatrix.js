/**
 * Created by licheng on 16/4/4.
 */

function snake(n){
    function createMatrix(n) {
        var matrix = new Array(n)
        for (var i = 0; i < n; i++) {
            matrix[i] = new Array(n)
        }
        return matrix
    }

    var matrix = createMatrix(n)
    padding(matrix,n)
    console.log(matrix.toString())

     function padding(m,n){
         var d = 1 // 控制填充方向，初始化向右（1） ，向下（2），向左（3） 向上（4）
         var a = 0,  //a，b为二维数组索引
             b = 0,
             c = 1, // 方向改变变量，控制向右
             i=1,  //填充数字，从1到n*n
             e = n, //控制改变方向的变量，控制向下
             f=0   //方向改变变量，控制向左

         while(i<= n*n){
   //console.log(m)
             if(d === 1){
                 if(!m[a][b]){
                     m[a][b] = i++
                     b++
                     if(b === e){
                         d = 2 //down
                         b--
                         a++
                         //console.log(a+'and'+b)

                     }
                 }else{
                        e--
                        a++ ;b++;
                 }

             }else if(d === 2){
                 if(!m[a][b]){
                     m[a][b] = i++
                     a++
                     if(a === e){
                         d = 3 //left
                         b--
                         a--
                     }
                 }
             }else if(d === 3){
                     if(!m[a][b]){
                         m[a][b] = i++
                         b--
                         if(b < f){
                             d = 4 //up
                             f++
                             a--
                             b++ //回到首位

                         }
                     }
                 }
                 else if(d === 4){
                     if(!m[a][b]){
                       //  console.log(a+'and'+b)
                         m[a][b] = i++
                         a--
                         if(a<c){
                             c++
                             d = 1 //right
                         }
                     }
                 }
             }
         }

}
snake(3)