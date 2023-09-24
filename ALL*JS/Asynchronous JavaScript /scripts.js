console.log("Asynchronous JavaScript")
//callback means a function take another function as a perametier
function display(x){
    console.log(x)

}
function calcutalor(num1,num2,callback){
    let sum = num1 + num2
    callback(sum)
    return sum
}

let result=calcutalor(2,5,display)
//console.log(result)


// --------------------------------------------

function fullName(fullname){
    // console.log(`my fullname is : ${firstname} + ${lastname}`)
    alert('Hello' + fullname)
  
}


function takename(callback){
    let firstname= prompt('write first name :');
    let lastname = prompt('write lastname');
    let fullname= firstname + lastname ;
    //return fullname
    callback(fullname)
}

//console.log(takename())
//takename(fullName)

//0-----------------------

setTimeout(()=>{
    console.log('time')
},5000)


function x(callback){
console.log('x')
callback()
}
function y(){
    console.log('y')
}
//x(y)



