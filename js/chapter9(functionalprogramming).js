//Functinal Programming
// document.write('1.hey this is option1')
// var choice=parseInt(prompt('chose the number :'))
// function open(){
//     console.log('hey it is work!')
// }
// if(choice==1){
//     open()
// }else{
//     alert('wrong input only 1!')
// }

function sqr(n) {
  return n * n;
}

for (var i = 0; i < 10; i++) {
  console.log(sqr(3));

  console.log(sqr(4));
}

var n = 10;
function change() {
  n = 100;
}
change();

console.log(n);

var point = {
  x: 45,
  y: 30,
};
function printpoint(point) {
  point.x = 100;
  point.y = 200;

  console.log(point);
}
printpoint(point);
console.log(point);

//pure function is always same result

//*************************************first class function************************************************

//1. a function are store in a variable
function add(a, b) {
  return a + b;
}

var sum = add;
console.log(sum(4, 5));

//2. A function  can be stroed i an array

var arr = [];

arr.push(add);
console.log(arr);
console.log(arr[0](5, 3)); //function call

//3.A function can be stroed as an object

var obj = {
  sum: add,
};
console.log(obj);
console.log(obj.sum(7, 9));

//4.we can create function as need

// higher order

// function sum(a,b){
//     return a+b

// }

// function mainpulate(a,b,fuc){
//     var c=a+b
//     var d=a-b
//     function multi(){
//         var m=fuc(a,b)
//         return c*d*m
//     }
//     return multi
// }

// var b = 10;

// function a() {
//   var x = 5;
//   return function () {
//     console.log(x);
//   };
//   // console.log(b)
// }
// var abc = a();
// console.dir(abc);

//callback function***important***





function sample(a, b, cb) {
  var c = a + b;
  var d = a - b;

  var result = cb(c, d);
  return result;
}

// function sum(a, b) {
//   return a + b;
// }

// var result = sample(5, 8, sum);
// console.log(result);
//console.log(sample(5,8))

var result2 = sample(5, 8, function (c, d) {
  //console.log(c,d)
  return c - d
})
console.log(result2)

var result3 = sample(5, 8, function (c, d) {
    //console.log(c,d)
    return c * d
  })
  console.log(result3)

  var result4 = sample(5, 8, function (c, d) {
    //console.log(c,d)
    return c / d
  })
  console.log(result4)



  //foreach function

  var arr=[1,2,3,4,5]
var sum=0
  arr.forEach(function(value,index,arr){
    console.log(value,index,arr)
    sum=sum+value
  })
console.log('the sum os array is:',sum)


function forEach(arr,cb){
    for(var i=0;i<arr.length;i++){
        //console.log(arr[i])
        cb(arr[i],i,arr)
    }
}
var sum=0
forEach(arr, function(value,index,arr){
    console.log(value,index,arr)
    sum=sum+value
})
console.log(sum)



// function tofayel (name,x){
//     console.log(name)
//     x('callbackjakir')
//     }

//     function jakirboss(x){
//         console.log(x)
//     }
//     //jakirboss('md.jakir ahmed')
//     tofayel('tofayel islam', jakirboss)

//peramitar
// function name (x,fc,l){
//     console.log(x)
//     fc("958729")
//     l()
   
// }

// function hello(y){
//     console.log(y+1)
// }
// function scl(){
//     console.log('----')
// }

// // argument
// name("tofayel",hello, scl);




function name(x,cb,l){
    console.log(x)
    cb()
    l(2,3)
}

function hello(x){
    console.log('this is call back!')
}
function lo(x,y){
    return(x+y)
}

name('tofayel islam',hello,lo)


//This is a simple project of call back function

function calculator(x,cb_sum,cb_sub,cb_add,cb_div){
    console.log('**************************************************')
    console.log(x)
    console.log('*****Sum******')
    cb_sum(2,2)
    console.log('*****Sub******')
    cb_sub(2,2)
    console.log('****Add*******')
    cb_add(2,2)
    console.log('****Div*******')
    cb_div(2,2)
}

function Sum(x, y){
    console.log(x+y)
}
function Sub(x, y){
    console.log(x-y)
}
function Add(x, y){
    console.log(x*y)
}
function Div(x, y){
    console.log(x/y)
}

calculator('CallBack Function',Sum,Sub,Add,Div)


// function sample(a, b, cb) {
//     var x = a + b;
//     var y = a - b;
//     console.log(x)
//     console.log(y)
  
//     var result = cb(x, y);
//     return result;
//   }
  
 
  
//   var result2 = sample(5, 8, function (x, y) {
//     //console.log(c,d)
//     return x - y
//   })
//   console.log(result2)
  
//   var result3 = sample(5, 8, function (x, y) {
//       //console.log(c,d)
//       return x * y
//     })
//     console.log(result3)
  
//     var result4 = sample(5, 8, function (x, y) {
//       //console.log(c,d)
//       return x / y
//     })
//     console.log(result4)

console.log('****jakirboss****')



function calculator(a,b,cb){
    // var a=x+y
    // var b=x-y
    var result= cb(a,b)
    return result
}

var result_sum=calculator(8,8,function(a,b){
    return a+b
})
console.log(result_sum)

var result_sub=calculator(8,8,function(a,b){
    return a-b
})
console.log(result_sub)

var result_adi=calculator(8,8,function(a,b){
    return a*b
})
console.log(result_adi)

var result_div=calculator(8,8,function(a,b){
    return a/b
})
console.log(result_div)

  



