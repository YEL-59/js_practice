

const status = true


console.log("Task Number 1")

//promise call
const promise = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    status?resolve("Task Number 2"):reject("failed")
  },1)
}
)
//promise call end
promise.then((value)=>{
  console.log(value)
}
).catch((err)=>{
  console.log(err)
}
)

// setTimeout(()=>{
//   status?console.log("Task Number 2"):console.log("failed")
 
// },1)



console.log("Task Number 3")





//promise Project

const PaymentStatement = true
const marks=70

const enroll = function  () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      PaymentStatement
        ? resolve("Payment Successful")
        : reject("Payment Failed");
    }, 1000);
  });
}

const progress =function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      marks>50
        ? resolve("Progress Successful")
        : reject("Progress Failed");
    }, 1000);
  });
}
const getcertificate = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      marks>50
        ? resolve("Certificate Successful")
        : reject("Certificate Failed");
    }, 1000);
  });
}

enroll()
  .then((value) => {
    console.log(value);
    return progress();
  }
  )
  .then((value) => {
    console.log(value);
    return getcertificate();
  }
  )
  .then((value) => {
    console.log(value);
  }
  )
  .catch((err) => {
    console.log(err);
  }
  );






