
const factorial=function(num,result=1){
    
    if(num===1){return console.log(result)}
    result+=(result*(num-1))
   
    factorial(num-1,result)  

}

//factorial(8)


const reverse = function(str,reversed ='',i=1){
    
if(str.length<i){ return console.log(reversed)}
reversed= reversed.concat(str.charAt(str.length-i))
i++
reverse(str,reversed,i)
}

//reverse('cat')


const arr1 = [1, 2, 3]
const arr2 = []

const swap=function(arr1,arr2){
if(arr1.length===0){return arr1,arr2}
arr2.push(arr1.splice(-1,1)[0])

swap(arr1,arr2)
}

swap(arr1, arr2)
console.log(arr1) //[]
console.log(arr2) //[1, 2, 3]