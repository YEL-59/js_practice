//scope and closer
//javascript engine is read code understanding  and javascript code run
// source code==>parser==>abstract windows tree==>machine code ==>execution
//************
// js is compiled or interpreted and compiler both c++ (jit) just in time
a();
function a() {
  console.log("i am function");
}
var newa = function () {
  console.log("newabc");
};
function b() {
  console.log("i am function b");
}
a();

b();

//creational context execution context

//global context, context is a container real world  a context is an object create and execution context

var a = 10;
console.log(a);
var b;

console.log(b);

//b=20
var c = 50;
console.log(c);

//variable declare is a strate work then call object
// how work variable ==> firstly store all variable then line by line execute
//how a function work==>creation==>ref==>executional
// that is very important

//***Hosting***
// var a=100
// newx(a)?why undifined can not call
// x(10)
// var newx= x//ref
// newx(45)
// function x(a){
//     console.log(a)
// }

// x(a)

//creational pase

// a=undifined
// newx=undifined
// x=ReferenceError
// //executional pase
// a=100
// newx=error
// x=10
// newx=ReferenceError
// newx=45
// x=100

// function future(print) {
//   console.log(print);
// }
// function maria(value) {
//   return value + 25000;
// }
// function shaik(a, b) {
//   return a + b;
// }

// var future_goals = future(maria(shaik(15000, 10000)));
// console.log(future_goals);

  