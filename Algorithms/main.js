
let numbers = [23, 23, 23, 23, 23] //should find 23

let smallestNumber=numbers[0] //our 'number stored in memory'

for(let num of numbers){ //going over each number

  if(num < smallestNumber){

    smallestNumber = num //forget the number stored in memory and store num instead
  }
}

//console.log("Smallest number is " + smallestNumber)


const printStars=function(num){
    let star=''
for(let i=1;i<=num;i++){
    star+='*'
console.log(star)
}
    
}
//printStars(5)

const printBackwardsStars=function(num){
    let star=''
    let str="*"
    for(let i=1;i<=num;i++){
       star= star.concat(str)
   
    }
    for (let x=num;x>0;x--){
     star= star.slice(0,x)
      console.log(star)
    }
   
}

//printBackwardsStars(6)

const printStarSeries=function(num,count){
  for (let y=0;y<count;y++){
    printStars(num)
    printBackwardsStars(num)
    
  }
}
//printStarSeries(10, 3)

const reverse = function(str){
    
  let reversed = ''
  for (let i=0;i<=str.length;i++){
    reversed= reversed.concat(str.charAt(str.length-i))
    //console.log(reversed)
  }
  console.log(reversed)
  return reversed
}

//reverse("dog") //should return "god"
//reverse("race car") //should return "rac ecar"

const isPalindrom=function(str){
  str = str.replace(/\s/g, '')
  let s=str.toLowerCase()
 
if(reverse(s)===s){
  console.log(true)
}else{console.log(false)}
}

//isPalindrom('Taco Cat')


const encrypt=function(str){

for (let i=0;i<str.length;i++){
 str=str.replace(str.charAt(i),String.fromCharCode(str.charCodeAt(i)+1))
}
console.log(str)
}

//encrypt('cat')

const decrypt=function(str){
  for (let i=0;i<str.length;i++){
    str=str.replace(str.charAt(i),String.fromCharCode(str.charCodeAt(i)-1))
   }
   console.log(str)
   }
  
   //decrypt('dbu')
  
   const colors = ["red", "indigo", "white", "teal", "yellow"];
   const foods = ["bread", "cheese", "cucumber"];

const jumble=function(arr1,arr2){
  let jumbledArr =[]
  for (let i=0;i<arr1.length;i++ ){
    jumbledArr.push(arr1[i])
   if(arr2[i]===undefined){
    
   }else{jumbledArr.push(arr2[i])}
  }
  console.log(jumbledArr)
}

//jumble(colors, foods)


const rawDist = {
  A: 60,
  B: 10,
  C: 10,
  D: 20
}

const getLetter=function(){
  let x=Math.random()*100
  console.log(x)
  if(x<=rawDist.A){console.log('A')}
  if(x<=rawDist.B){console.log('B')}
  if(x<=rawDist.C){console.log('C')}
  if(x<=rawDist.D){console.log('D')}
}

//getLetter()


class UniqueArray{
constructor(){
  this.arr=[],
  this.obj={}
}
  add(item){
if( this.exists(item)===true){}
else{ 
  this.arr.push(item)
  this.obj.item=item
}
  }
  showAll(){
console.log(this.arr)
  }
  exists(item){
   if (this.obj.item===item){
     console.log(true)
     return true
   }
  }
  get(index){
 return this.arr[index]
  }
}
/*
const uniqueStuff = new UniqueArray()
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.add("toy")
uniqueStuff.showAll() //prints ["toy"]
uniqueStuff.exists("toy") //returns true
uniqueStuff.add("poster")
uniqueStuff.add("hydrogen")
console.log(uniqueStuff.get(2)) //prints "hydrogen"
*/

//Stacks & Queues

class Stack{
  constructor(){
    this.arr=[]
    this.minvalue=[]
  }
  push(x){
    this.arr[this.arr.length]=x
    if(x>this.minvalue[this.minvalue.length-1]){}
    else{
      this.minvalue[this.minvalue.length]=x
    }
  }
  isEmpty(){
    if(this.arr.length===0){
      return true
    }else{return false}
  }
  peek(){
return this.arr[this.arr.length-1]
  }
  pop(){
    if(this.arr[this.arr.length-1]===this.minvalue[this.minvalue.length-1]){
      this.minvalue.splice(-1,1)
    }
    this.arr.splice(-1,1)
    
    
  }
  print(){
    console.log(this.arr)
  }
}
/*
let myStack = new Stack()
console.log(myStack.isEmpty())    //true
myStack.print()                    //[]
myStack.push(2)      
console.log(myStack.isEmpty())     //false
myStack.push(4)      
myStack.print()                    //[2,4]
console.log(myStack.peek())        //4
myStack.pop()
myStack.pop()
console.log(myStack.peek())       //null
console.log(myStack.isEmpty())    //true
*/

class Queue{
  constructor(){
    this.arr=[]
  }
  enqueue(x){
    this.arr[this.arr.length]=x
  }
  isEmpty(){
    if(this.arr.length===0){
      return true
    }else{return false}
  }
  peek(){
    return this.arr[0]
  }
  dequeue(){
    this.arr.splice(0,1)
  }
  print() {
    console.log(this.arr)
  }
}
/*
let q = new Queue()
console.log(q.isEmpty())    //true
q.print()                   //[]
q.enqueue(2)
console.log(q.isEmpty())    //false
q.enqueue(4)
q.print()                   //[4,2]
console.log(q.peek())       //2
q.dequeue()
q.dequeue()
console.log(q.peek())       //null
console.log(q.isEmpty())    //true
*/

class MinStack extends Stack{
  constructor(){
super()

  }
  getMin(){
  return  this.minvalue[this.minvalue.length-1]
  }
}
/*
let ms = new MinStack()
ms.push(17)
ms.push(12)
ms.push(31)
console.log(ms.getMin())    //12
ms.pop()
ms.pop()
ms.pop()
console.log(ms.getMin())  //null
ms.push(19)
ms.push(21)
console.log(ms.getMin())    //19
ms.push(3)
console.log(ms.getMin())    //3
ms.pop()
ms.pop()
console.log(ms.getMin())    //19
*/



class DuoQueue {
constructor(){
this.Queues=[[],[]]

}
enqueue(person, qNum){
  this.Queues[qNum-1][ this.Queues[qNum-1].length]=person

}
dequeue(qNum){
  this.Queues[qNum-1].splice(0,1)
  
}
getLongestQueue( ){

}
getShortestQueue( ){
 
}
balanceQueues( ){

}
}

let dq = new DuoQueue()
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(2, 2)
dq.enqueue(2, 2)
dq.dequeue(1)
dq.dequeue(1)

console.log(dq.getLongestQueue()) //Queue { queue: [ 2, 2 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 1 ] }

dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)

console.log(dq.getLongestQueue()) //Queue { queue: [ 1, 1, 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 2, 2 ] }

dq.balanceQueues()
console.log(dq.getLongestQueue()) //Queue { queue: [ 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 1, 1, 2, 2 ] }