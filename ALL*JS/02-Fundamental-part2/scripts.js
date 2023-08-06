/*
///////////////////////////////////////
// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;


///////////////////////////////////////
// Functions
function logger() {
    console.log('My name is Jonas');
  }
  
  // calling / running / invoking function
  logger();
  logger();
  logger();
  
  function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
  }
  
  const appleJuice = fruitProcessor(5, 0);
  console.log(appleJuice);
  
  const appleOrangeJuice = fruitProcessor(2, 4);
  console.log(appleOrangeJuice);
  
  const num = Number('23');
  console.log(typeof num);



  ///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYeah) {
    return 2037 - birthYeah;
  }
  const age1 = calcAge1(1991);
  
  // Function expression
  const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
  }
  const age2 = calcAge2(1991);
  
  console.log(age1, age2);

  

    ///////////////////////////////////////
// Arrow functions






const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
  }
  
  console.log(yearsUntilRetirement(1991, 'Tofayel')); console.log(yearsUntilRetirement(1980, 'showmik'));
  ///////////////////////////////////////
// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));


///////////////////////////////////////
// Reviewing Functions
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));


///////////////////////////////////////
// Introduction to Arrays

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);
//add items in array
const newLength = friends.push('Jay');
const newLength1 = friends.unshift('John');
console.log(friends);

//remove items in array
 


const popped = friends.pop();
console.log(friends);

const shifted = friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends);
console.log(friends.includes(23));
if(friends.includes('Steven')){
    console.log('You have a friend called Steven');
}


const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
  "hey",
];
const types = [];

console.log(jonas.length - 1);
console.log(typeof jonas);
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist

for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] == "string") {
    types.push(jonas[i]);
  }
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
console.log(years[Math.floor(Math.random()*years.length)]);
const ages = [];
const age = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
  if (ages[i] > 18) {
    console.log(`Age ${i + 1} is ${ages[i]}, he is adult`);
    age.push(ages[i]);
  } else {
    console.log(`Age ${i + 1} is ${ages[i]}, he is teenager`);
  }
}
console.log(ages);
console.log(age);


const cars=['BMW','Audi','Toyota','Nissan','Honda'];
//show random car in console
console.log(cars[Math.floor(Math.random()*cars.length)]);



let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
console.log(bills)
const tips=[];
const totals=[];
// create a assending order sort function
const sort = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
};
sort(bills);
console.log(bills);
//create a dessending order sort function
const sort1 = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
};
sort1(bills);
console.log(bills);

//applying merge sort 
const mergeSort = function (arr) {
  if (arr.length === 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);

  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
};
const merge = function (leftArr, rightArr) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      result.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
};

console.log(mergeSort(bills));

//applying quick sort
const quickSort = function (arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};
console.log(quickSort(bills));

//applying bubble sort
const bubbleSort = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
};
bubbleSort(bills);
console.log(bills);

//applying selection sort
const selectionSort = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    let temp = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
};
selectionSort(bills);
console.log(bills);

//applying insertion sort
const insertionSort = function (arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];

      j--;
    }
    arr[j + 1] = temp;
  }
};
insertionSort(bills);
console.log(bills);
//applying heap sort
const heapSort = function (arr) {
  let n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
  for (let i = n - 1; i > 0; i--) {
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    heapify(arr, i, 0);
  }
};
const heapify = function (arr, n, i) {
  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;
  if (l < n && arr[l] > arr[largest]) largest = l;
  if (r < n && arr[r] > arr[largest]) largest = r;
  if (largest != i) {
    let temp = arr[i];

    arr[i] = arr[largest];
    arr[largest] = temp;
    heapify(arr, n, largest);
  }
};
heapSort(bills);
console.log(bills);





//create a function to calculate tip






//create random 10 bills
// const bills1 = [];
// for (let i = 0; i < 10; i++) {
//   bills1.push(Math.floor(Math.random() * 1000));
// }
// console.log(bills1);

*/

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


  //async awit

  async function hello(){
    console.log("hello")
  }
  console.log(hello())






