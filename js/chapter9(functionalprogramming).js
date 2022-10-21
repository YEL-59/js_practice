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
  return c - d;
});
console.log(result2);

var result3 = sample(5, 8, function (c, d) {
  //console.log(c,d)
  return c * d;
});
console.log(result3);

var result4 = sample(5, 8, function (c, d) {
  //console.log(c,d)
  return c / d;
});
console.log(result4);

//foreach function

var arr = [1, 2, 3, 4, 5];
var sum = 0;
arr.forEach(function (value, index, arr) {
  console.log(value, index, arr);
  sum = sum + value;
});
console.log("the sum os array is:", sum);

function forEach(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    //console.log(arr[i])
    cb(arr[i], i, arr);
  }
}
var sum = 0;
forEach(arr, function (value, index, arr) {
  console.log(value, index, arr);
  sum = sum + value;
});
console.log(sum);

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

function name(x, cb, l) {
  console.log(x);
  cb();
  l(2, 3);
}

function hello(x) {
  console.log("this is call back!");
}
function lo(x, y) {
  return x + y;
}

name("tofayel islam", hello, lo);

//This is a simple project of call back function

function calculator(x, cb_sum, cb_sub, cb_add, cb_div) {
  console.log("**************************************************");
  console.log(x);
  console.log("*****Sum******");
  cb_sum(2, 2);
  console.log("*****Sub******");
  cb_sub(2, 2);
  console.log("****Add*******");
  cb_add(2, 2);
  console.log("****Div*******");
  cb_div(2, 2);
}

function Sum(x, y) {
  console.log(x + y);
}
function Sub(x, y) {
  console.log(x - y);
}
function Add(x, y) {
  console.log(x * y);
}
function Div(x, y) {
  console.log(x / y);
}

calculator("CallBack Function", Sum, Sub, Add, Div);

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

console.log("****jakirboss****");

function calculator(a, b, cb) {
  // var a=x+y
  // var b=x-y
  var result = cb(a, b);
  return result;
}

var result_sum = calculator(8, 8, function (a, b) {
  return a + b;
});
console.log(result_sum);

var result_sub = calculator(8, 8, function (a, b) {
  return a - b;
});
console.log(result_sub);

var result_adi = calculator(8, 8, function (a, b) {
  return a * b;
});
console.log(result_adi);

var result_div = calculator(8, 8, function (a, b) {
  return a / b;
});
console.log(result_div);

//Map Function

var array = [1, 2, 3, 4, 5];
//  var sqrArr= arr.map(function(value){
//     //return Math.random()*10
//     return value*value
//  })

//  console.log(arr)
//  console.log(sqrArr)

function mymap(array, cb) {
  var newarr = [];
  for (var i = 0; i < array.length; i++) {
    //var temp=arr[i]*arr[i]
    var temp = cb(array[i], array);
    newarr.push(temp);
  }
  return newarr;
}
var qb = mymap(array, function (value) {
  return value * value * value;
});
var mten = mymap(array, function (value) {
  return value * 10;
});
console.log(array);
console.log(mten);
console.log(qb);
//console.log(mymap(arr))

//Filter Function

var arr = [4, 8, 1, 3, 5, 6, 4, 3, 9];

function myfilter(arr, cb) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(myfilter(arr));

var filterArray = [4, 8, 1, 3, 5, 6, 4, 3, 9];

function tofayelfilter(filterArray, cd) {
  var reArray = [];
  for (var i = 0; i < filterArray.length; i++) {
    if (cd(filterArray[i], i, filterArray)) {
      reArray.push(filterArray[i]);
    }
  }
  return reArray;
}

var result20 = tofayelfilter(filterArray, function (value) {
  return value % 2 == 1;
});
console.log(result20);
console.log(
  tofayelfilter(filterArray, function (value) {
    return value > 4;
  })
);
// var farray=arr.filter(function(value){
//     return value >4//value%2==0
// })
// console.log(farray)

//Reduce Function

var arr5 = [1, 2, 3, 4, 5];
var sum = arr5.reduce(function (prev, curr) {
  return prev + curr;
}, 100);
var max = arr5.reduce(function (prev, curr) {
  return Math.max(prev, curr);
}, 0);
console.log(sum);
console.log(max);

function myreduce(arr5, cb, acc) {
  for (var i = 0; i < arr5.length; i++) {
    acc = cb(acc, arr[i]);
  }
  return acc;
}

var sum = myreduce(
  arr5,
  function (prev, curr) {
    return prev + curr;
  },
  0
);
var max = myreduce(
  arr5,
  function (prev, curr) {
    return Math.max(prev, curr);
  },
  0
);
var min = myreduce(
  arr5,
  function (prev, curr) {
    return Math.min(prev, curr);
  },
  arr5[0]
);

console.log(sum, max, min);

//Find Function

var arrarr = [1, 2, 3, 4, 5, 6, , 1, 22, 34, 5, 6];

function myfind(arrarr, cb) {
  for (var i = 0; i < arrarr.length; i++) {
    if (cb(arrarr[i])) {
      return i; //arrarr[i]
    }
  }
}

var resultfind = myfind(arrarr, function (value) {
  return value == 4;
});
console.log(resultfind);

//Return Function

// function greet(msg){
//   function greetings(name){
//     return msg+''+'!'
//   }
//   return greetings
// }

// var gm=greet('Good morning')

// var msg=gm('tofayel islam')
// console.log(msg)

// function base(b){

//   return  function (n){
//     var result=1
//     for(var i=0;i<b;i++){
//       result=result*n
//     }
//     return result
//   }
// }

// var base10= base(10)

// console.log(base10(2))

//Recursive Function

function sayHi(n) {
  if (n == 0) {
    return;
  } else {
    console.log("hi i am calling");
  }
  sayHi(n - 1);
}
sayHi(10);

// function sum(n) {
//   if (n == 1) {
//     return 1;
//   }
//   return n + sum(n - 1);
// }

// console.log(sum(5));



//Currying in Javascript



// function add(a, b, c) {
//   return a + b + c;
// }

//console.log(add(1,1,1))


function currying(a){
  return function (b){
    return function(c){
      return a+b+c
    }
  }
}

var result100= currying(5)(10)(15)
console.log(result100)

//Composition of Function
function print(p){
  console.log(p)
}

function multi(n){
  return n*5
}

function add(a,b){
  return a+b
}

print(multi(add(3,5)))