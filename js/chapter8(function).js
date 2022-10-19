//Function

// function add(){
//     var a=10
//     var b=20
//     console.log(a+b)
// }

// function sub(){
//     var a=10
//     var b=20
//     console.log(a-b)
// }
// function functionName(){
//     console.log('This is a function')
// }

// add()
// sub()
// functionName()
// add()
// sub()
// functionName()
// for(var i=0; i<10;i++){
//    add()
// }

function add(a, b) {
  var result = a + b;
  console.log(result);
}
add(10, 20);
add(2, 1);
function sub(a, b) {
  var result = a - b;
  console.log(result);
}
sub(4, 2);

var arr1 = [1, 2, 3];
var arr2 = [5, 7, 9];
var arr3 = [9, 7, 1];

// var sum = 0;
// for (var i = 0; i < arr1.length; i++) {
//   sum = sum + arr1[i];
// }
// console.log(sum);

// var sum1=0
// for (var i = 0; i < arr2.length; i++) {
//   sum1 = sum1 + arr2[i];
// }
// console.log(sum1);

// var sum2=0
// for (var i = 0; i < arr3.length; i++) {
//   sum2 = sum2 + arr3[i];
// }
// console.log(sum2);

// function sumofarray(arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   console.log(sum);
// }

// sumofarray(arr1)
// sumofarray(arr2)
// sumofarray(arr3)

function test(){
    // console.log(arguments)
    for(var i=0;i<arguments.length;i++){
        console.log(arguments[i])
    }
}
test(10,20,30)



function addall(){
    var sum=0
    for(var i=0; i<arguments.length;i++){
        sum=sum+arguments[i]
    }
    //console.log(sum)
    return sum
}
addall(1,2,3,1)

function persion(name,email){
    return{
        name:name,
        email:email
    }
}
var p1=persion('tofayel islam', 'tofayeltuhin143@gmail.com')
console.log(p1)

var addition = function(a,b) {
    return a+b
    
}
addition(2,4)
var another =addition
console.log(another)

setTimeout(function(){
    console.log('i will call 5 sec')
}, 5000);



function something(greet,name){
    function sayhi(){
        //console.log(greet, name)
        if(name){
            return name.split(' ')[0]
        }else{
            return ''
        }

    }
    var massage = greet + ' ' + sayhi()
    console.log(massage)
//sayhi()
}
something('Good morning','Md.Tofayel islam')



//scope

var a='abc'

// if(true){
//     if(true){
//         var b= 'i am B'
//     }
// }
// console.log(b)

function x(){
    //var a=20
    function y(){
        //var a=10
        console.log(a)
    }
    console.log(a)
    y()
}
x()

function test(n){
    function a(){
        return n%3==0

    }
    function b(){
        return n%5==0
    }
    if(a()&&b()){
        console.log(n+'is divisible both 3 and 5')
    }else{
        console.log('404 erroe!')
    }
}
test(15)



