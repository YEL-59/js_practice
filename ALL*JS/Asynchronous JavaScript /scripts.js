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
console.log(result)
