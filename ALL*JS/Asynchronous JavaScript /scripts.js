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



//callback pattern

let PaymentSuccess = true
let marks =80

// let enrollment = prompt("enter your enrollment number")
// let name = prompt("enter your name")
// let email = prompt("enter your email")
// let phone = prompt("enter your phone number")
// let course = prompt("enter your course name")
let fees = prompt("enter your fees")

if (fees == 500){
    console.log("congratulation!!! your payment paid successful")
    enroll(()=>{
        progress(getcertificate)
    })
    console.log({fees})
}else{
    console.log('Loading...')
    setTimeout(
        ()=>{
            console.log("404!!! your payment not paid")
        },1000
    )
}
function enroll(callback){
    console.log("course enrollment in process")
    setTimeout(()=>{
        if(PaymentSuccess){
            callback()
        }else{
            console.log('payment failed')
        }
    },2000)

}
function progress(callback){
    console.log('course on progress...')
    setTimeout(()=>{
        if(marks>=80){
            callback()
        }else{
            console.log('you could not get enough marks to get certificate')
        }
    },2000)
}
function getcertificate(){
    console.log('pass')
}
// function payment(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(PaymentSuccess){
//                 resolve({enrollment,name,email,phone,course,fees})
//             }else{
//                 reject("payment failed")
//             }
//         },5000)
//     })
// }

// function register(){

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("registration successfull")
//         },2000)
//     })
// }

// payment()
// .then((success)=>{
//     console.log(success)
//     return register()
// })
// .then((success)=>{
//     console.log(success)
// })

// .catch((error)=>{
//     console.log(error)
// }
// )

//async await

